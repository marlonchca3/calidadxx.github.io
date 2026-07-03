const DB_STORAGE_KEY = "sr_aero_fleet_v1";
const TODAY = new Date("2026-07-01T00:00:00");
const OWNER_EMAIL = "marlonchca3@gmail.com";
const READER_EMAIL_HASH = "cf30f164237b2f843b303d131f806667d66f53df7f853704ad788c586255158b";
const READER_PASSWORD_HASH = "4e300f7119639f74678d06e4c4b06d5e0d4f38b0220f4bbac3cbba8a3f24995c";
const firebaseConfig = {
  apiKey: "AIzaSyDRAZZ4VafNNIi3G9_USyARksFqgKYE5Fo",
  authDomain: "calidadddddd.firebaseapp.com",
  projectId: "calidadddddd",
  storageBucket: "calidadddddd.firebasestorage.app",
  messagingSenderId: "532433890487",
  appId: "1:532433890487:web:d7011a757f953c03363132",
  measurementId: "G-60JGPFZ5TL"
};
const defaultRowsPnp501 = [
  {
    component: "Mi-17 MTV-1",
    series: "96019",
    workshop: "Helicentro",
    overhaul: "20/03/2020",
    assigned: "2,000 h",
    consumed: "860 h",
    remaining: "1,140 h",
    due: "20/03/2028"
  },
  {
    component: "Motor 1 TV3-117BM",
    series: "7087882200433",
    workshop: "URAL",
    overhaul: "12/04/2016",
    assigned: "1,500 h",
    consumed: "828.5 h",
    remaining: "671.5 h",
    due: "12/04/2026"
  },
  {
    component: "Motor 2 TV3-117BM",
    series: "7087884000357",
    workshop: "BORYSFEN",
    overhaul: "21/04/2016",
    assigned: "1,500 h",
    consumed: "828.5 h",
    remaining: "671.5 h",
    due: "21/04/2026"
  },
  {
    component: "AI-9B",
    series: "7080924200355",
    workshop: "OOO ARP Motor",
    overhaul: "16/07/2020",
    assigned: "600 arr",
    consumed: "694 arr",
    remaining: "-94 arr",
    due: "16/07/2028"
  },
  {
    component: "VR-14",
    series: "L0701003MP2",
    workshop: "AO REDUCTOR PM",
    overhaul: "19/09/2017",
    assigned: "2,000 h",
    consumed: "828 h",
    remaining: "1,172 h",
    due: "19/09/2027"
  }
];

function createDefaultFleet() {
  return {
    selectedId: "pnp-501",
    aircrafts: [
      {
        id: "pnp-501",
        code: "PNP-501",
        name: "Mi-17 MTV-1",
        rows: structuredClone(defaultRowsPnp501)
      },
      {
        id: "pnp-506",
        code: "PNP-506",
        name: "Mi-171",
        rows: []
      }
    ]
  };
}

function loadFleet() {
  const saved = localStorage.getItem(DB_STORAGE_KEY);
  if (!saved) {
    return createDefaultFleet();
  }
  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed.aircrafts) || parsed.aircrafts.length === 0) {
      return createDefaultFleet();
    }
    if (!parsed.selectedId || !parsed.aircrafts.find((aircraft) => aircraft.id === parsed.selectedId)) {
      parsed.selectedId = parsed.aircrafts[0].id;
    }
    return parsed;
  } catch {
    return createDefaultFleet();
  }
}

let fleet = loadFleet();
let currentUser = null;
let localReaderUser = null;
let isOwner = false;
let authReady = false;

function getActiveUser() {
  return currentUser || localReaderUser;
}

function isAuthenticated() {
  return Boolean(getActiveUser());
}

function lockWithLoginOverlay() {
  const overlay = document.getElementById("auth-overlay");
  if (overlay) {
    overlay.classList.remove("hidden");
  }
  document.body.classList.add("auth-locked");
}

function unlockLoginOverlay() {
  const overlay = document.getElementById("auth-overlay");
  if (overlay) {
    overlay.classList.add("hidden");
  }
  document.body.classList.remove("auth-locked");
}

function updateLoginHint(message, isError = false) {
  const hint = document.getElementById("auth-hint");
  if (!hint) {
    return;
  }
  hint.textContent = message;
  hint.style.color = isError ? "#ffc0c0" : "#ffe2a2";
}

async function sha256(value) {
  const text = String(value || "");
  const encoded = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function saveFleet() {
  localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(fleet));
}

function isFirebaseConfigReady() {
  return Object.values(firebaseConfig).every((value) => value && !String(value).startsWith("REEMPLAZAR_"));
}

function getCurrentAircraft() {
  return fleet.aircrafts.find((aircraft) => aircraft.id === fleet.selectedId) || null;
}

function getCurrentRows() {
  const currentAircraft = getCurrentAircraft();
  return currentAircraft ? currentAircraft.rows : [];
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"]/g, (char) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;"
    }[char];
  });
}

function parseNumeric(value) {
  const numeric = parseFloat(String(value).replace(/[^0-9.-]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function parseEsDate(value) {
  const match = String(value).trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) {
    return null;
  }
  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return null;
  }
  return date;
}

function getStatus(row) {
  const remaining = parseNumeric(row.remaining);
  const dueDate = parseEsDate(row.due);
  if (remaining < 0) {
    return "CRITICO";
  }
  if (dueDate && dueDate < TODAY) {
    return "CRITICO";
  }
  const assigned = parseNumeric(row.assigned);
  const daysToDue = dueDate ? Math.floor((dueDate - TODAY) / 86400000) : null;
  if ((daysToDue !== null && daysToDue <= 180) || (assigned > 0 && remaining <= assigned * 0.15)) {
    return "ALERTA";
  }
  return "OK";
}

function formatMetric(value) {
  return new Intl.NumberFormat("es-PE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  }).format(value);
}

function calculateMetrics() {
  const rows = getCurrentRows();
  const total = rows.length;
  const critical = rows.filter((row) => getStatus(row) === "CRITICO").length;
  const alert = rows.filter((row) => getStatus(row) === "ALERTA").length;
  const ok = rows.filter((row) => getStatus(row) === "OK").length;

  const dueIn90 = rows.filter((row) => {
    const dueDate = parseEsDate(row.due);
    if (!dueDate) {
      return false;
    }
    const days = Math.floor((dueDate - TODAY) / 86400000);
    return days >= 0 && days <= 90;
  }).length;

  const dueIn180 = rows.filter((row) => {
    const dueDate = parseEsDate(row.due);
    if (!dueDate) {
      return false;
    }
    const days = Math.floor((dueDate - TODAY) / 86400000);
    return days >= 0 && days <= 180;
  }).length;

  const consumedTotal = rows.reduce((sum, row) => sum + parseNumeric(row.consumed), 0);
  const remainingTotal = rows.reduce((sum, row) => sum + parseNumeric(row.remaining), 0);
  const risk = Math.round(((critical + alert * 0.5) / Math.max(total, 1)) * 100);

  return {
    total,
    critical,
    alert,
    ok,
    dueIn90,
    dueIn180,
    consumedTotal,
    remainingTotal,
    risk
  };
}

function renderKpis() {
  const metrics = calculateMetrics();
  const total = Math.max(metrics.total, 1);

  const totalEl = document.getElementById("kpi-total");
  const totalPctEl = document.getElementById("kpi-total-pct");
  const criticalEl = document.getElementById("kpi-critical");
  const criticalPctEl = document.getElementById("kpi-critical-pct");
  const alertEl = document.getElementById("kpi-alert");
  const alertPctEl = document.getElementById("kpi-alert-pct");
  const okEl = document.getElementById("kpi-ok");
  const okPctEl = document.getElementById("kpi-ok-pct");
  const riskEl = document.getElementById("kpi-risk-value");
  const riskRingEl = document.getElementById("kpi-risk-ring");
  const riskLabelEl = document.getElementById("kpi-risk-label");

  if (totalEl) totalEl.textContent = String(metrics.total);
  if (totalPctEl) totalPctEl.textContent = "100%";
  if (criticalEl) criticalEl.textContent = String(metrics.critical);
  if (criticalPctEl) criticalPctEl.textContent = `${Math.round((metrics.critical / total) * 100)}%`;
  if (alertEl) alertEl.textContent = String(metrics.alert);
  if (alertPctEl) alertPctEl.textContent = `${Math.round((metrics.alert / total) * 100)}%`;
  if (okEl) okEl.textContent = String(metrics.ok);
  if (okPctEl) okPctEl.textContent = `${Math.round((metrics.ok / total) * 100)}%`;

  if (riskEl) riskEl.textContent = `${metrics.risk}%`;
  if (riskRingEl) {
    const degrees = Math.round((metrics.risk / 100) * 360);
    riskRingEl.style.background = `conic-gradient(var(--danger) 0 ${degrees}deg, #24456f ${degrees}deg 360deg)`;
  }

  if (riskLabelEl) {
    let label = "Bajo";
    let color = "var(--ok)";
    if (metrics.risk >= 70) {
      label = "Alto";
      color = "var(--danger)";
    } else if (metrics.risk >= 40) {
      label = "Medio";
      color = "var(--warn)";
    }
    riskLabelEl.textContent = label;
    riskLabelEl.style.color = color;
  }

  const overhaulEl = document.getElementById("stat-overhaul");
  const due90El = document.getElementById("stat-90");
  const due180El = document.getElementById("stat-180");
  const consumedEl = document.getElementById("stat-consumed");
  const remainingEl = document.getElementById("stat-remaining");

  if (overhaulEl) overhaulEl.textContent = String(metrics.critical);
  if (due90El) due90El.textContent = String(metrics.dueIn90);
  if (due180El) due180El.textContent = String(metrics.dueIn180);
  if (consumedEl) consumedEl.textContent = `${formatMetric(metrics.consumedTotal)} h`;
  if (remainingEl) remainingEl.textContent = `${formatMetric(metrics.remainingTotal)} h`;
}

function renderAircraftIdentity() {
  const currentAircraft = getCurrentAircraft();
  if (!currentAircraft) {
    return;
  }
  const brandCodeEl = document.getElementById("brand-code");
  const titleSubEl = document.getElementById("title-sub");
  const chipAircraftEl = document.getElementById("chip-aircraft");
  if (brandCodeEl) brandCodeEl.textContent = currentAircraft.code;
  if (titleSubEl) titleSubEl.textContent = `Dashboard tecnico · ${currentAircraft.code}`;
  if (chipAircraftEl) chipAircraftEl.textContent = `${currentAircraft.code} (${currentAircraft.name})`;
}

function renderMainPanels() {
  const currentAircraft = getCurrentAircraft();
  if (!currentAircraft) {
    return;
  }

  const rows = getCurrentRows();
  const metrics = calculateMetrics();
  const assignedTotal = rows.reduce((sum, row) => sum + parseNumeric(row.assigned), 0);
  const consumedTotal = rows.reduce((sum, row) => sum + parseNumeric(row.consumed), 0);
  const remainingTotal = rows.reduce((sum, row) => sum + parseNumeric(row.remaining), 0);
  const dueRows = rows
    .map((row) => ({ row, dueDate: parseEsDate(row.due) }))
    .filter((entry) => entry.dueDate)
    .sort((a, b) => a.dueDate - b.dueDate);

  const seriesEl = document.getElementById("panel-series");
  const nameEl = document.getElementById("panel-aircraft-name");
  const tsnEl = document.getElementById("panel-tsn");
  const assignedEl = document.getElementById("panel-assigned");
  const remainingEl = document.getElementById("panel-remaining");
  const dueEl = document.getElementById("panel-due");
  const stateEl = document.getElementById("panel-state");
  const progressTitleEl = document.getElementById("panel-progress-title");
  const progressBarEl = document.getElementById("panel-progress-bar");
  const chartGridEl = document.getElementById("panel-chart-grid");
  const eventsEl = document.getElementById("panel-events");

  if (seriesEl) {
    const firstWithSeries = rows.find((row) => String(row.series || "").trim());
    const series = firstWithSeries ? String(firstWithSeries.series).trim() : "--";
    seriesEl.textContent = `Serie ${series}`;
  }
  if (nameEl) nameEl.textContent = currentAircraft.name || currentAircraft.code;
  if (tsnEl) tsnEl.textContent = `${formatMetric(consumedTotal)} h`;
  if (assignedEl) assignedEl.textContent = `${formatMetric(assignedTotal)} h`;
  if (remainingEl) remainingEl.textContent = `${formatMetric(remainingTotal)} h`;
  if (dueEl) dueEl.textContent = dueRows.length > 0 ? dueRows[0].row.due : "--";

  if (stateEl) {
    let label = "OPERATIVO";
    if (rows.length === 0) {
      label = "SIN DATOS";
    } else if (metrics.critical > 0) {
      label = "CRITICO";
    } else if (metrics.alert > 0) {
      label = "ALERTA";
    }
    stateEl.textContent = label;
  }

  const consumedPct = assignedTotal > 0 ? Math.max(0, Math.min(100, (consumedTotal / assignedTotal) * 100)) : 0;
  if (progressTitleEl) progressTitleEl.textContent = `Vida util consumida: ${formatMetric(consumedPct)}%`;
  if (progressBarEl) progressBarEl.style.width = `${consumedPct}%`;

  if (chartGridEl) {
    const chartRows = rows.slice(0, 5);
    if (chartRows.length === 0) {
      chartGridEl.innerHTML = `
        <div class="bar-stack">
          <div class="bar" style="height: 16px"></div>
          <div class="bar rem" style="height: 16px"></div>
          <div class="bar-value">0 / 0</div>
          <div class="bar-label">Sin datos</div>
        </div>
      `;
    } else {
      const maxValue = Math.max(1, ...chartRows.map((row) => Math.max(parseNumeric(row.consumed), Math.abs(parseNumeric(row.remaining)))));
      chartGridEl.innerHTML = chartRows.map((row) => {
        const consumed = parseNumeric(row.consumed);
        const remaining = parseNumeric(row.remaining);
        const consumedHeight = Math.max(10, Math.round((Math.max(consumed, 0) / maxValue) * 120));
        const remainingHeight = Math.max(10, Math.round((Math.max(Math.abs(remaining), 0) / maxValue) * 120));
        const remStyle = remaining < 0
          ? "background: linear-gradient(180deg, #ff6a6a, #bf2626)"
          : "";
        return `
          <div class="bar-stack">
            <div class="bar" style="height: ${consumedHeight}px"></div>
            <div class="bar rem" style="height: ${remainingHeight}px; ${remStyle}"></div>
            <div class="bar-value">${formatMetric(consumed)} / ${formatMetric(remaining)}</div>
            <div class="bar-label">${escapeHtml(row.component)}</div>
          </div>
        `;
      }).join("");
    }
  }

  if (eventsEl) {
    if (dueRows.length === 0) {
      eventsEl.innerHTML = `
        <li>
          <span>Sin vencimientos registrados</span>
          <span class="date ok">--</span>
        </li>
      `;
    } else {
      eventsEl.innerHTML = dueRows.slice(0, 5).map((entry) => {
        const status = getStatus(entry.row);
        const dateClass = status === "CRITICO" ? "danger" : status === "ALERTA" ? "warn" : "ok";
        return `
          <li>
            <span>${escapeHtml(entry.row.component)}</span>
            <span class="date ${dateClass}">${escapeHtml(entry.row.due)}</span>
          </li>
        `;
      }).join("");
    }
  }
}

function renderAircraftList() {
  const listEl = document.getElementById("aircraft-list");
  const emptyEl = document.getElementById("aircraft-empty-note");
  if (!listEl || !emptyEl) {
    return;
  }

  if (fleet.aircrafts.length === 0) {
    listEl.innerHTML = "";
    emptyEl.style.display = "block";
    return;
  }

  emptyEl.style.display = "none";
  listEl.innerHTML = fleet.aircrafts.map((aircraft) => {
    const status = aircraft.id === fleet.selectedId ? "active" : "";
    return `
      <article class="aircraft-card ${status}">
        <h3>${escapeHtml(aircraft.code)}</h3>
        <p>${escapeHtml(aircraft.name)}</p>
        <p>Componentes: ${aircraft.rows.length}</p>
        <button class="table-btn" type="button" data-open-aircraft="${aircraft.id}">Abrir</button>
      </article>
    `;
  }).join("");

  listEl.querySelectorAll("button[data-open-aircraft]").forEach((button) => {
    button.addEventListener("click", () => {
      const aircraftId = button.getAttribute("data-open-aircraft");
      if (!aircraftId) {
        return;
      }
      fleet.selectedId = aircraftId;
      saveFleet();
      renderAircraftIdentity();
      renderTable();
      renderAircraftList();
      setActiveMenuByTarget("dashboard");
      showView("dashboard");
    });
  });

}

function showView(targetId) {
  const dashboardBlocks = [
    document.getElementById("dashboard"),
    document.getElementById("main-grid-view"),
    document.getElementById("base-datos"),
    document.getElementById("stats-view")
  ];
  const aircraftView = document.getElementById("aeronaves");

  if (targetId === "aeronaves") {
    dashboardBlocks.forEach((block) => {
      if (block) block.classList.add("hidden");
    });
    if (aircraftView) aircraftView.classList.remove("hidden");
    return;
  }

  if (aircraftView) aircraftView.classList.add("hidden");
  dashboardBlocks.forEach((block) => {
    if (!block) return;
    block.classList.remove("hidden");
  });

  if (targetId === "base-datos") {
    const baseSection = document.getElementById("base-datos");
    if (baseSection) {
      baseSection.scrollIntoView({ behavior: "smooth", block: "start" });
      baseSection.classList.add("jump-highlight");
      window.setTimeout(() => baseSection.classList.remove("jump-highlight"), 1200);
    }
  }
}

function setActiveMenuByTarget(targetId) {
  const menuItems = document.querySelectorAll(".menu-item[data-target]");
  menuItems.forEach((item) => {
    item.classList.toggle("active", item.getAttribute("data-target") === targetId);
  });
}

function renderTable() {
  const rows = getCurrentRows();
  const tbody = document.getElementById("component-table-body");
  if (!tbody) {
    return;
  }
  tbody.innerHTML = rows.map((row, index) => {
    const status = getStatus(row);
    const statusClass = status === "CRITICO" ? "critical" : status === "ALERTA" ? "warn" : "ok";
    const disabled = isOwner ? "" : "disabled";
    return `
      <tr>
        <td><input class="cell-input" data-key="component" data-index="${index}" value="${escapeHtml(row.component)}" ${disabled}></td>
        <td><input class="cell-input" data-key="series" data-index="${index}" value="${escapeHtml(row.series)}" ${disabled}></td>
        <td><input class="cell-input" data-key="workshop" data-index="${index}" value="${escapeHtml(row.workshop)}" ${disabled}></td>
        <td><input class="cell-input" data-key="overhaul" data-index="${index}" value="${escapeHtml(row.overhaul)}" ${disabled}></td>
        <td><input class="cell-input" data-key="assigned" data-index="${index}" value="${escapeHtml(row.assigned)}" ${disabled}></td>
        <td><input class="cell-input" data-key="consumed" data-index="${index}" value="${escapeHtml(row.consumed)}" ${disabled}></td>
        <td><input class="cell-input" data-key="remaining" data-index="${index}" value="${escapeHtml(row.remaining)}" ${disabled}></td>
        <td><input class="cell-input" data-key="due" data-index="${index}" value="${escapeHtml(row.due)}" ${disabled}></td>
        <td><span class="status ${statusClass}">${status}</span></td>
      </tr>
    `;
  }).join("");
  renderKpis();
  renderMainPanels();
}

function bindTableEditing() {
  const tbody = document.getElementById("component-table-body");
  if (!tbody) {
    return;
  }
  tbody.addEventListener("change", (event) => {
    if (!isOwner) {
      return;
    }
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      return;
    }
    const rowIndex = Number(target.dataset.index);
    const key = target.dataset.key;
    const currentAircraft = getCurrentAircraft();
    if (!currentAircraft || Number.isNaN(rowIndex) || !key || !currentAircraft.rows[rowIndex]) {
      return;
    }
    currentAircraft.rows[rowIndex][key] = target.value;
    saveFleet();
    renderTable();
    renderAircraftList();
  });
}

function bindTableButtons() {
  const addRowButton = document.getElementById("add-row-btn");
  const resetButton = document.getElementById("reset-db-btn");
  if (addRowButton) {
    addRowButton.addEventListener("click", () => {
      if (!isOwner) {
        window.alert("Solo el propietario puede editar.");
        return;
      }
      const currentAircraft = getCurrentAircraft();
      if (!currentAircraft) {
        return;
      }
      currentAircraft.rows.push({
        component: "Nuevo componente",
        series: "",
        workshop: "",
        overhaul: "01/07/2026",
        assigned: "0 h",
        consumed: "0 h",
        remaining: "0 h",
        due: "01/07/2027"
      });
      saveFleet();
      renderTable();
      renderAircraftList();
    });
  }
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      if (!isOwner) {
        window.alert("Solo el propietario puede editar.");
        return;
      }
      const accepted = window.confirm("Deseas restaurar la base de datos original?");
      if (!accepted) {
        return;
      }
      const currentAircraft = getCurrentAircraft();
      if (!currentAircraft) {
        return;
      }
      currentAircraft.rows = currentAircraft.id === "pnp-501" ? structuredClone(defaultRowsPnp501) : [];
      saveFleet();
      renderTable();
      renderAircraftList();
    });
  }
}

function bindAircraftCreation() {
  const form = document.getElementById("aircraft-form");
  const codeInput = document.getElementById("new-aircraft-code");
  const nameInput = document.getElementById("new-aircraft-name");
  if (!form || !(codeInput instanceof HTMLInputElement) || !(nameInput instanceof HTMLInputElement)) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!isOwner) {
      window.alert("Solo el propietario puede crear aeronaves.");
      return;
    }

    const code = codeInput.value.trim().toUpperCase();
    const name = nameInput.value.trim();

    if (!code || !name) {
      window.alert("Ingresa codigo y nombre para crear la aeronave.");
      return;
    }

    const exists = fleet.aircrafts.some((aircraft) => aircraft.code.toUpperCase() === code);
    if (exists) {
      window.alert("Ese codigo ya existe.");
      return;
    }

    const id = `${code.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
    fleet.aircrafts.push({
      id,
      code,
      name,
      rows: []
    });
    fleet.selectedId = id;
    saveFleet();
    form.reset();
    renderAircraftIdentity();
    renderAircraftList();
    renderTable();
    setActiveMenuByTarget("base-datos");
    showView("base-datos");
  });
}

function applyPermissionUI() {
  const addRowButton = document.getElementById("add-row-btn");
  const resetButton = document.getElementById("reset-db-btn");
  const form = document.getElementById("aircraft-form");
  const dbNote = document.getElementById("readonly-db-note");
  const aircraftNote = document.getElementById("readonly-aircraft-note");
  const signinBtn = document.getElementById("google-signin-btn");
  const signoutBtn = document.getElementById("google-signout-btn");
  const authStatus = document.getElementById("auth-status");
  const activeUser = getActiveUser();

  if (addRowButton) addRowButton.disabled = !isOwner;
  if (resetButton) resetButton.disabled = !isOwner;

  if (form) {
    const formInputs = form.querySelectorAll("input, button");
    formInputs.forEach((element) => {
      element.disabled = !isOwner;
    });
  }

  if (dbNote) dbNote.style.display = isOwner ? "none" : "block";
  if (aircraftNote) aircraftNote.style.display = isOwner ? "none" : "block";

  if (signinBtn) signinBtn.style.display = activeUser ? "none" : "inline-block";
  if (signoutBtn) signoutBtn.style.display = activeUser ? "inline-block" : "none";

  if (!isAuthenticated()) {
    lockWithLoginOverlay();
  } else {
    unlockLoginOverlay();
  }

  if (authStatus) {
    if (!isAuthenticated()) {
      authStatus.textContent = "No autenticado";
    } else if (isOwner) {
      authStatus.textContent = "Editor";
    } else {
      authStatus.textContent = "Solo lectura";
    }
  }
}

async function signInWithGoogle() {
  if (!authReady) {
    updateLoginHint("Google no esta disponible. Usa correo o configura Firebase.", true);
    return;
  }
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    updateLoginHint("Ingreso correcto con Google.");
  } catch {
    updateLoginHint("No se pudo iniciar sesion con Google.", true);
  }
}

async function signInWithReaderEmail(email, password) {
  const normalized = String(email || "").trim().toLowerCase();
  const rawPassword = String(password || "");
  const emailHash = await sha256(normalized);
  const passwordHash = await sha256(rawPassword);
  if (emailHash !== READER_EMAIL_HASH || passwordHash !== READER_PASSWORD_HASH) {
    updateLoginHint("Credenciales incorrectas para acceso por correo.", true);
    return;
  }

  localReaderUser = {
    email: "usuario-correo",
    provider: "email-reader"
  };
  currentUser = null;
  isOwner = false;
  updateLoginHint("Ingreso correcto. Modo solo lectura.");
  applyPermissionUI();
  renderTable();
}

function bindAuthButtons() {
  const signinBtn = document.getElementById("google-signin-btn");
  const signoutBtn = document.getElementById("google-signout-btn");
  const modalGoogleBtn = document.getElementById("auth-google-btn");
  const emailForm = document.getElementById("auth-email-form");
  const emailInput = document.getElementById("auth-email-input");
  const passwordInput = document.getElementById("auth-password-input");

  if (signinBtn) {
    signinBtn.addEventListener("click", async () => {
      await signInWithGoogle();
    });
  }

  if (modalGoogleBtn) {
    modalGoogleBtn.addEventListener("click", async () => {
      await signInWithGoogle();
    });
  }

  if (emailForm && emailInput instanceof HTMLInputElement && passwordInput instanceof HTMLInputElement) {
    emailForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      await signInWithReaderEmail(emailInput.value, passwordInput.value);
    });
  }

  if (signoutBtn) {
    signoutBtn.addEventListener("click", async () => {
      if (localReaderUser) {
        localReaderUser = null;
        currentUser = null;
        isOwner = false;
        updateLoginHint("El acceso por correo es solo lectura.");
        applyPermissionUI();
        renderTable();
        return;
      }
      if (!authReady) {
        currentUser = null;
        isOwner = false;
        applyPermissionUI();
        renderTable();
        return;
      }
      await firebase.auth().signOut();
    });
  }
}

function initAuth() {
  if (!window.firebase || !isFirebaseConfigReady()) {
    authReady = false;
    currentUser = null;
    isOwner = false;
    applyPermissionUI();
    renderTable();
    updateLoginHint("El acceso por correo es solo lectura.");
    return;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  authReady = true;
  firebase.auth().onAuthStateChanged((user) => {
    currentUser = user;
    if (user) {
      localReaderUser = null;
    }
    const email = (user && user.email ? user.email : "").toLowerCase();
    isOwner = email === OWNER_EMAIL.toLowerCase();
    if (user && !isOwner) {
      updateLoginHint("Ingreso con Google en modo solo lectura.");
    }
    if (user && isOwner) {
      updateLoginHint("Ingreso con Google en modo editor.");
    }
    if (!user && !localReaderUser) {
      updateLoginHint("El acceso por correo es solo lectura.");
    }
    applyPermissionUI();
    renderTable();
  });
}

function setMobileMenuOpen(open) {
  const sidebar = document.querySelector(".sidebar");
  const backdrop = document.getElementById("mobile-menu-backdrop");
  if (sidebar) {
    sidebar.classList.toggle("open", open);
  }
  if (backdrop) {
    backdrop.classList.toggle("open", open);
  }
}

function bindMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const backdrop = document.getElementById("mobile-menu-backdrop");
  const menuItems = document.querySelectorAll(".menu-item[data-target]");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      const sidebar = document.querySelector(".sidebar");
      const isOpen = Boolean(sidebar && sidebar.classList.contains("open"));
      setMobileMenuOpen(!isOpen);
    });
  }

  if (backdrop) {
    backdrop.addEventListener("click", () => {
      setMobileMenuOpen(false);
    });
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 760) {
        setMobileMenuOpen(false);
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setMobileMenuOpen(false);
    }
  });
}

function bindMenuNavigation() {
  const menuItems = document.querySelectorAll(".menu-item[data-target]");
  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      menuItems.forEach((currentItem) => currentItem.classList.remove("active"));
      item.classList.add("active");

      const targetId = item.getAttribute("data-target");
      if (!targetId) {
        return;
      }
      const target = document.getElementById(targetId);
      if (!target) {
        return;
      }

      showView(targetId);

      if (targetId === "dashboard") {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.classList.add("jump-highlight");
        window.setTimeout(() => target.classList.remove("jump-highlight"), 1200);
      }
    });
  });
}

bindAuthButtons();
bindMobileMenu();
bindAircraftCreation();
bindMenuNavigation();
bindTableEditing();
bindTableButtons();
renderAircraftIdentity();
renderAircraftList();
initAuth();
applyPermissionUI();
renderTable();
