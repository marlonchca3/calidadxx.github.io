<template>
  <div class="app-shell">
    <div class="layout">
      <aside class="sidebar" :class="{ open: mobileMenuOpen }">
        <div class="brand">
          <h2 class="brand-title">DIVMAAER</h2>
          <p class="brand-sub">{{ currentAircraft ? currentAircraft.code : "CONTROL DE CALIDAD" }}</p>
        </div>

        <nav class="menu">
          <a
            v-for="item in menuItems"
            :key="item.label"
            class="menu-item"
            :class="{ active: activeView === item.target }"
            :href="`#${item.target}`"
            @click.prevent="navigate(item.target)"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="profile">
          <b>Marlon Chuquino</b>
          Administrador
        </div>
      </aside>

      <div class="mobile-menu-backdrop" :class="{ open: mobileMenuOpen }" @click="setMobileMenuOpen(false)"></div>

      <main class="content">
        <header class="topbar">
          <div class="topbar-left">
            <button class="mobile-menu-btn" type="button" aria-label="Abrir menu" @click="setMobileMenuOpen(!mobileMenuOpen)">
              ☰
            </button>
            <div class="topbar-brand">
              <p class="topbar-kicker">Control de Calidad</p>
              <h1>Sistema de Gestion de Recursos Aeronauticos</h1>
            </div>
          </div>

          <div class="title-wrap">
            <p>Dashboard tecnico · {{ currentAircraft ? currentAircraft.code : "--" }}</p>
          </div>

          <div class="top-actions">
            <div class="chip"><span>{{ aircraftChip }}</span> <span>▼</span></div>
            <div class="chip">01/07/2026 <span>◷</span></div>
            <div class="chip" :title="cloudErrorMessage || cloudStatus">
              Firebase <span :class="{ 'sync-error': cloudStatusError }">{{ cloudStatus }}</span>
            </div>
            <div class="auth-box">
              <span class="auth-status">{{ authStatus }}</span>
              <button v-if="!isAuthenticated" class="auth-btn" type="button" @click="signInWithGoogle">Iniciar con Google</button>
              <button v-else class="auth-btn" type="button" @click="signOut">Cerrar sesion</button>
            </div>
          </div>
        </header>

        <section v-show="activeView === 'aeronaves'" id="aeronaves" class="view">
          <section class="panel">
            <h2>Gestion de Aeronaves</h2>
            <p class="panel-sub">Selecciona una aeronave operativa o crea una nueva con base de datos vacia.</p>
            <div class="aircrafts-layout">
              <div>
                <div class="aircraft-list">
                  <article
                    v-for="aircraft in fleet.aircrafts"
                    :key="aircraft.id"
                    class="aircraft-card"
                    :class="{ active: aircraft.id === fleet.selectedId }"
                  >
                    <h3>{{ aircraft.code }}</h3>
                    <p>{{ aircraft.name }}</p>
                    <p>Componentes: {{ aircraft.rows.length }}</p>
                    <div class="aircraft-actions">
                      <button class="table-btn" type="button" @click="openAircraft(aircraft.id)">Abrir</button>
                      <button
                        v-if="canDeleteAircraft(aircraft)"
                        class="table-btn danger-btn"
                        type="button"
                        @click="deleteAircraft(aircraft.id)"
                      >
                        Eliminar
                      </button>
                    </div>
                  </article>
                </div>
                <p v-if="fleet.aircrafts.length === 0" class="empty-note">No hay aeronaves registradas.</p>
              </div>

              <form class="aircraft-form" @submit.prevent="createAircraft">
                <input v-model.trim="newAircraft.code" type="text" maxlength="30" placeholder="Codigo (ej. PNP-700)" :disabled="!isOwner">
                <input v-model.trim="newAircraft.name" type="text" maxlength="80" placeholder="Nombre (ej. Mi-171Sh)" :disabled="!isOwner">
                <button class="table-btn" type="submit" :disabled="!isOwner">Crear aeronave</button>
                <p class="readonly-note" :class="{ visible: !isOwner }">Solo el propietario puede crear aeronaves.</p>
              </form>
            </div>
          </section>
        </section>

        <template v-if="activeView !== 'aeronaves'">
          <section id="dashboard" ref="dashboard" class="grid-kpi view">
            <article class="kpi">
              <p class="kpi-title">Total Componentes</p>
              <p class="kpi-value">{{ metrics.total }}</p>
              <p class="kpi-meta"><span>Registrados</span><strong>100%</strong></p>
            </article>

            <article class="kpi">
              <p class="kpi-title">Criticos / Overhaul</p>
              <p class="kpi-value">{{ metrics.critical }}</p>
              <p class="kpi-meta"><span>Requieren atencion</span><strong>{{ pct(metrics.critical) }}</strong></p>
            </article>

            <article class="kpi">
              <p class="kpi-title">Alertas Preventivas</p>
              <p class="kpi-value">{{ metrics.alert }}</p>
              <p class="kpi-meta"><span>Seguimiento cercano</span><strong>{{ pct(metrics.alert) }}</strong></p>
            </article>

            <article class="kpi">
              <p class="kpi-title">En Condiciones</p>
              <p class="kpi-value">{{ metrics.ok }}</p>
              <p class="kpi-meta"><span>Operativos</span><strong>{{ pct(metrics.ok) }}</strong></p>
            </article>

            <article class="kpi">
              <p class="kpi-title">Riesgo Global</p>
              <div class="kpi-risk">
                <div class="ring" :style="riskRingStyle"><span>{{ metrics.risk }}%</span></div>
                <p class="kpi-meta">
                  <strong :style="{ color: riskLabel.color, fontSize: '20px' }">{{ riskLabel.label }}</strong>
                </p>
              </div>
            </article>
          </section>

          <section id="main-grid-view" class="main-grid view">
            <article class="panel">
              <h2>Aeronave Seleccionada</h2>
              <p class="panel-sub">Serie {{ aircraftSeries }}</p>
              <p class="plane-title">{{ currentAircraft ? currentAircraft.name : "--" }}</p>
              <ul class="meta-list">
                <li><span>Horas Totales (TSN):</span> <span>{{ formatMetric(panelTotals.consumed) }} h</span></li>
                <li><span>Vida Total Asignada:</span> <span>{{ formatMetric(panelTotals.assigned) }} h</span></li>
                <li><span>Horas Remanentes:</span> <span>{{ formatMetric(panelTotals.remaining) }} h</span></li>
                <li><span>Vencimiento Calendario:</span> <span>{{ nextDueDate }}</span></li>
              </ul>
              <div class="state-pill">{{ aircraftState }}</div>
              <p class="progress-title">Vida util consumida: {{ formatMetric(consumedPct) }}%</p>
              <div class="progress"><div :style="{ width: `${consumedPct}%` }"></div></div>
            </article>

            <article class="panel">
              <h2>Consumo de Recursos (TSO / Arranques)</h2>
              <p class="panel-sub">Consumido vs remanente</p>
              <div class="chart-grid">
                <div v-for="bar in chartBars" :key="bar.key" class="bar-stack">
                  <div class="bar" :style="{ height: `${bar.consumedHeight}px` }"></div>
                  <div class="bar rem" :style="bar.remainingStyle"></div>
                  <div class="bar-value">{{ formatMetric(bar.consumed) }} / {{ formatMetric(bar.remaining) }}</div>
                  <div class="bar-label">{{ bar.label }}</div>
                </div>
              </div>
            </article>

            <article class="panel">
              <h2>Proximos Vencimientos</h2>
              <p class="panel-sub">Control calendario</p>
              <ul class="events">
                <li v-for="event in dueEvents" :key="event.key">
                  <span>{{ event.component }}</span>
                  <span class="date" :class="event.className">{{ event.due }}</span>
                </li>
              </ul>
            </article>
          </section>

          <section id="base-datos" ref="baseDatos" class="panel table-panel view">
            <div class="table-title">
              <h2>Base de Datos de Componentes</h2>
              <div class="table-tools">
                <button class="table-btn" type="button" :disabled="!isOwner" @click="addRow">Agregar fila</button>
                <button class="table-btn" type="button" :disabled="!isOwner" @click="resetDb">Restaurar datos</button>
              </div>
            </div>

            <p class="readonly-note" :class="{ visible: !isOwner }" style="margin: 0 14px 10px;">
              Modo solo lectura: solo el propietario puede editar la base de datos.
            </p>

            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Serie</th>
                    <th>Taller</th>
                    <th>Ultimo Overhaul</th>
                    <th>Asignado</th>
                    <th>Consumido</th>
                    <th>Remanente</th>
                    <th>Vencimiento</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in currentRows" :key="`${currentAircraft.id}-${index}`">
                    <td><input v-model="row.component" class="cell-input" :disabled="!isOwner" @change="persistFleet"></td>
                    <td><input v-model="row.series" class="cell-input" :disabled="!isOwner" @change="persistFleet"></td>
                    <td><input v-model="row.workshop" class="cell-input" :disabled="!isOwner" @change="persistFleet"></td>
                    <td><input v-model="row.overhaul" class="cell-input" :disabled="!isOwner" @change="persistFleet"></td>
                    <td><input v-model="row.assigned" class="cell-input" :disabled="!isOwner" @change="persistFleet"></td>
                    <td><input v-model="row.consumed" class="cell-input" :disabled="!isOwner" @change="persistFleet"></td>
                    <td><input v-model="row.remaining" class="cell-input" :disabled="!isOwner" @change="persistFleet"></td>
                    <td><input v-model="row.due" class="cell-input" :disabled="!isOwner" @change="persistFleet"></td>
                    <td><span class="status" :class="statusClass(row)">{{ getStatus(row) }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="stats-view" class="stats-row view">
            <article class="mini">
              <p>Overhaul Requerido</p>
              <b style="color: var(--danger)">{{ metrics.critical }}</b>
            </article>
            <article class="mini">
              <p>Proximos 90 dias</p>
              <b style="color: var(--warn)">{{ metrics.dueIn90 }}</b>
            </article>
            <article class="mini">
              <p>Proximos 180 dias</p>
              <b style="color: #ffd58f">{{ metrics.dueIn180 }}</b>
            </article>
            <article class="mini">
              <p>Total Horas Consumidas</p>
              <b style="color: var(--accent-2)">{{ formatMetric(metrics.consumedTotal) }} h</b>
            </article>
            <article class="mini">
              <p>Total Horas Remanentes</p>
              <b style="color: #65f39a">{{ formatMetric(metrics.remainingTotal) }} h</b>
            </article>
          </section>
        </template>

        <footer>
          2026 Sistema de Gestion de Recursos Aeronauticos · {{ currentAircraft ? currentAircraft.code : "PNP-501" }} · Todos los derechos reservados
        </footer>
      </main>
    </div>

    <div class="auth-overlay" :class="{ hidden: isAuthenticated }" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title">
      <div class="auth-modal">
        <h2 id="auth-modal-title">Iniciar sesion</h2>
        <p class="auth-modal-sub">Accede con Google o con correo y contrasena.</p>
        <button class="auth-modal-btn" type="button" @click="signInWithGoogle">Continuar con Google</button>
        <div class="auth-divider">o</div>

        <form class="auth-email-form" @submit.prevent="signInWithReaderEmail">
          <label for="auth-email-input">Correo</label>
          <input id="auth-email-input" v-model="reader.email" type="email" placeholder="Ingresa el correo" autocomplete="username">

          <label for="auth-password-input">Contrasena</label>
          <input id="auth-password-input" v-model="reader.password" type="password" placeholder="Ingresa la contrasena" autocomplete="current-password">

          <button class="auth-modal-btn" type="submit">Entrar con correo</button>
        </form>

        <p class="auth-hint" :class="{ error: authHintError }">{{ authHint }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const DB_STORAGE_KEY = "sr_aero_fleet_v1";
const FIRESTORE_COLLECTION = "dashboards";
const FIRESTORE_DOCUMENT = "main";
const PROTECTED_AIRCRAFT_IDS = ["pnp-501", "pnp-506"];
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
  { component: "Mi-17 MTV-1", series: "96019", workshop: "Helicentro", overhaul: "20/03/2020", assigned: "2,000 h", consumed: "860 h", remaining: "1,140 h", due: "20/03/2028" },
  { component: "Motor 1 TV3-117BM", series: "7087882200433", workshop: "URAL", overhaul: "12/04/2016", assigned: "1,500 h", consumed: "828.5 h", remaining: "671.5 h", due: "12/04/2026" },
  { component: "Motor 2 TV3-117BM", series: "7087884000357", workshop: "BORYSFEN", overhaul: "21/04/2016", assigned: "1,500 h", consumed: "828.5 h", remaining: "671.5 h", due: "21/04/2026" },
  { component: "AI-9B", series: "7080924200355", workshop: "OOO ARP Motor", overhaul: "16/07/2020", assigned: "600 arr", consumed: "694 arr", remaining: "-94 arr", due: "16/07/2028" },
  { component: "VR-14", series: "L0701003MP2", workshop: "AO REDUCTOR PM", overhaul: "19/09/2017", assigned: "2,000 h", consumed: "828 h", remaining: "1,172 h", due: "19/09/2027" }
];

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function createDefaultFleet() {
  return {
    selectedId: "pnp-501",
    aircrafts: [
      { id: "pnp-501", code: "PNP-501", name: "Mi-17 MTV-1", rows: cloneData(defaultRowsPnp501) },
      { id: "pnp-506", code: "PNP-506", name: "Mi-171", rows: [] }
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

function isFirebaseConfigReady() {
  return Object.values(firebaseConfig).every((value) => value && !String(value).startsWith("REEMPLAZAR_"));
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function sha256(value) {
  const text = String(value || "");
  const encoded = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export default {
  name: "App",

  data() {
    return {
      activeView: "dashboard",
      authHint: "El acceso por correo es solo lectura.",
      authHintError: false,
      authReady: false,
      cloudErrorMessage: "",
      cloudStatus: "Local",
      cloudStatusError: false,
      currentUser: null,
      dbReady: false,
      fleet: loadFleet(),
      firestoreUnsubscribe: null,
      isOwner: false,
      isApplyingRemoteFleet: false,
      isSavingToFirestore: false,
      localReaderUser: null,
      mobileMenuOpen: false,
      newAircraft: { code: "", name: "" },
      reader: { email: "", password: "" },
      menuItems: [
        { label: "Dashboard", target: "dashboard" },
        { label: "Aeronaves", target: "aeronaves" },
        { label: "Componentes", target: "dashboard" },
        { label: "Base de datos", target: "base-datos" },
        { label: "Alertas", target: "dashboard" },
        { label: "Calendario", target: "dashboard" },
        { label: "Historial", target: "dashboard" }
      ]
    };
  },

  computed: {
    activeUser() {
      return this.currentUser || this.localReaderUser;
    },

    isAuthenticated() {
      return Boolean(this.activeUser);
    },

    authStatus() {
      if (!this.isAuthenticated) {
        return "No autenticado";
      }
      return this.isOwner ? "Editor" : "Solo lectura";
    },

    currentAircraft() {
      return this.fleet.aircrafts.find((aircraft) => aircraft.id === this.fleet.selectedId) || null;
    },

    currentRows() {
      return this.currentAircraft ? this.currentAircraft.rows : [];
    },

    aircraftChip() {
      if (!this.currentAircraft) {
        return "--";
      }
      return `${this.currentAircraft.code} (${this.currentAircraft.name})`;
    },

    metrics() {
      const rows = this.currentRows;
      const total = rows.length;
      const critical = rows.filter((row) => this.getStatus(row) === "CRITICO").length;
      const alert = rows.filter((row) => this.getStatus(row) === "ALERTA").length;
      const ok = rows.filter((row) => this.getStatus(row) === "OK").length;

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

      return { total, critical, alert, ok, dueIn90, dueIn180, consumedTotal, remainingTotal, risk };
    },

    riskRingStyle() {
      const degrees = Math.round((this.metrics.risk / 100) * 360);
      return {
        background: `conic-gradient(var(--danger) 0 ${degrees}deg, #24456f ${degrees}deg 360deg)`
      };
    },

    riskLabel() {
      if (this.metrics.risk >= 70) {
        return { label: "Alto", color: "var(--danger)" };
      }
      if (this.metrics.risk >= 40) {
        return { label: "Medio", color: "var(--warn)" };
      }
      return { label: "Bajo", color: "var(--ok)" };
    },

    panelTotals() {
      return {
        assigned: this.currentRows.reduce((sum, row) => sum + parseNumeric(row.assigned), 0),
        consumed: this.currentRows.reduce((sum, row) => sum + parseNumeric(row.consumed), 0),
        remaining: this.currentRows.reduce((sum, row) => sum + parseNumeric(row.remaining), 0)
      };
    },

    dueRows() {
      return this.currentRows
        .map((row, index) => ({ row, index, dueDate: parseEsDate(row.due) }))
        .filter((entry) => entry.dueDate)
        .sort((a, b) => a.dueDate - b.dueDate);
    },

    aircraftSeries() {
      const firstWithSeries = this.currentRows.find((row) => String(row.series || "").trim());
      return firstWithSeries ? String(firstWithSeries.series).trim() : "--";
    },

    nextDueDate() {
      return this.dueRows.length > 0 ? this.dueRows[0].row.due : "--";
    },

    aircraftState() {
      if (this.currentRows.length === 0) {
        return "SIN DATOS";
      }
      if (this.metrics.critical > 0) {
        return "CRITICO";
      }
      if (this.metrics.alert > 0) {
        return "ALERTA";
      }
      return "OPERATIVO";
    },

    consumedPct() {
      const assigned = this.panelTotals.assigned;
      if (assigned <= 0) {
        return 0;
      }
      return Math.max(0, Math.min(100, (this.panelTotals.consumed / assigned) * 100));
    },

    chartBars() {
      const rows = this.currentRows.slice(0, 5);
      if (rows.length === 0) {
        return [{ key: "empty", label: "Sin datos", consumed: 0, remaining: 0, consumedHeight: 16, remainingStyle: { height: "16px" } }];
      }

      const maxValue = Math.max(1, ...rows.map((row) => Math.max(parseNumeric(row.consumed), Math.abs(parseNumeric(row.remaining)))));

      return rows.map((row, index) => {
        const consumed = parseNumeric(row.consumed);
        const remaining = parseNumeric(row.remaining);
        const remainingStyle = {
          height: `${Math.max(10, Math.round((Math.max(Math.abs(remaining), 0) / maxValue) * 120))}px`
        };

        if (remaining < 0) {
          remainingStyle.background = "linear-gradient(180deg, #ff6a6a, #bf2626)";
        }

        return {
          key: `${row.component}-${index}`,
          label: row.component,
          consumed,
          remaining,
          consumedHeight: Math.max(10, Math.round((Math.max(consumed, 0) / maxValue) * 120)),
          remainingStyle
        };
      });
    },

    dueEvents() {
      if (this.dueRows.length === 0) {
        return [{ key: "empty", component: "Sin vencimientos registrados", due: "--", className: "ok" }];
      }

      return this.dueRows.slice(0, 5).map((entry) => {
        const status = this.getStatus(entry.row);
        return {
          key: `${entry.row.component}-${entry.index}`,
          component: entry.row.component,
          due: entry.row.due,
          className: status === "CRITICO" ? "danger" : status === "ALERTA" ? "warn" : "ok"
        };
      });
    }
  },

  watch: {
    isAuthenticated(value) {
      document.body.classList.toggle("auth-locked", !value);
    }
  },

  mounted() {
    this.initAuth();
    document.body.classList.toggle("auth-locked", !this.isAuthenticated);
    window.addEventListener("resize", this.handleResize);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    document.body.classList.remove("auth-locked");
    if (this.firestoreUnsubscribe) {
      this.firestoreUnsubscribe();
    }
  },

  methods: {
    async persistFleet() {
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(this.fleet));
      if (!this.isApplyingRemoteFleet) {
        return this.saveFleetToFirestore();
      }
      return true;
    },

    updateCloudStatus(message, isError = false, detail = "") {
      this.cloudStatus = message;
      this.cloudStatusError = isError;
      this.cloudErrorMessage = detail;
    },

    getFirebaseErrorMessage(error) {
      const code = error && error.code ? error.code : "firebase-error";
      const message = error && error.message ? error.message : "Error desconocido de Firebase.";
      return `${code}: ${message}`;
    },

    getFleetDocRef() {
      if (!window.firebase || !window.firebase.firestore) {
        return null;
      }
      return window.firebase.firestore().collection(FIRESTORE_COLLECTION).doc(FIRESTORE_DOCUMENT);
    },

    getValidFleet(value) {
      if (!value || !Array.isArray(value.aircrafts) || value.aircrafts.length === 0) {
        return null;
      }

      const selectedId = value.selectedId && value.aircrafts.some((aircraft) => aircraft.id === value.selectedId)
        ? value.selectedId
        : value.aircrafts[0].id;

      return {
        selectedId,
        aircrafts: value.aircrafts.map((aircraft) => ({
          id: String(aircraft.id || ""),
          code: String(aircraft.code || ""),
          name: String(aircraft.name || ""),
          rows: Array.isArray(aircraft.rows) ? aircraft.rows.map((row) => ({
            component: String(row.component || ""),
            series: String(row.series || ""),
            workshop: String(row.workshop || ""),
            overhaul: String(row.overhaul || ""),
            assigned: String(row.assigned || ""),
            consumed: String(row.consumed || ""),
            remaining: String(row.remaining || ""),
            due: String(row.due || "")
          })) : []
        })).filter((aircraft) => aircraft.id && aircraft.code)
      };
    },

    subscribeFleetFromFirestore() {
      const ref = this.getFleetDocRef();
      if (!ref) {
        return;
      }

      if (this.firestoreUnsubscribe) {
        this.firestoreUnsubscribe();
      }

      this.updateCloudStatus("Conectando");
      this.firestoreUnsubscribe = ref.onSnapshot(async (snapshot) => {
        if (this.isSavingToFirestore && !snapshot.metadata.hasPendingWrites) {
          return;
        }

        if (!snapshot.exists) {
          this.updateCloudStatus("Inicial");
          if (this.isOwner) {
            await this.saveFleetToFirestore(true);
          }
          return;
        }

        const data = snapshot.data() || {};
        const remoteFleet = this.getValidFleet(data.fleet);
        if (!remoteFleet) {
          this.updateCloudStatus("Datos invalidos", true);
          return;
        }

        this.isApplyingRemoteFleet = true;
        this.fleet = remoteFleet;
        localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(remoteFleet));
        this.$nextTick(() => {
          this.isApplyingRemoteFleet = false;
        });
        this.updateCloudStatus("Sincronizado");
      }, (error) => {
        const detail = this.getFirebaseErrorMessage(error);
        console.error("Firestore read error:", error);
        this.firestoreUnsubscribe = null;
        this.updateCloudStatus("Error lectura", true, detail);
        this.updateLoginHint(`No se pudo leer Firestore. ${detail}`, true);
      });
    },

    async saveFleetToFirestore(force = false) {
      if ((!this.isOwner && !force) || !this.dbReady || this.isApplyingRemoteFleet) {
        return false;
      }

      const ref = this.getFleetDocRef();
      if (!ref) {
        return false;
      }

      try {
        this.isSavingToFirestore = true;
        this.updateCloudStatus("Guardando");
        await ref.set({
          fleet: cloneData(this.fleet),
          updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
          updatedBy: this.currentUser && this.currentUser.email ? this.currentUser.email : OWNER_EMAIL
        }, { merge: true });
        this.updateCloudStatus("Guardado");
        return true;
      } catch (error) {
        const detail = this.getFirebaseErrorMessage(error);
        console.error("Firestore write error:", error);
        this.updateCloudStatus("Error escritura", true, detail);
        this.updateLoginHint(`No se pudo guardar en Firestore. ${detail}`, true);
        return false;
      } finally {
        this.isSavingToFirestore = false;
      }
    },

    updateLoginHint(message, isError = false) {
      this.authHint = message;
      this.authHintError = isError;
    },

    formatMetric(value) {
      return new Intl.NumberFormat("es-PE", { minimumFractionDigits: 0, maximumFractionDigits: 1 }).format(value);
    },

    pct(value) {
      const total = Math.max(this.metrics.total, 1);
      return `${Math.round((value / total) * 100)}%`;
    },

    getStatus(row) {
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
    },

    statusClass(row) {
      const status = this.getStatus(row);
      if (status === "CRITICO") {
        return "critical";
      }
      if (status === "ALERTA") {
        return "warn";
      }
      return "ok";
    },

    navigate(targetId) {
      this.activeView = targetId;
      this.setMobileMenuOpen(false);
      this.$nextTick(() => {
        if (targetId === "base-datos" && this.$refs.baseDatos) {
          this.highlightAndScroll(this.$refs.baseDatos);
        }
        if (targetId === "dashboard" && this.$refs.dashboard) {
          this.highlightAndScroll(this.$refs.dashboard);
        }
      });
    },

    highlightAndScroll(element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.classList.add("jump-highlight");
      window.setTimeout(() => element.classList.remove("jump-highlight"), 1200);
    },

    async openAircraft(aircraftId) {
      if (!aircraftId) {
        return;
      }
      this.fleet.selectedId = aircraftId;
      await this.persistFleet();
      this.navigate("dashboard");
    },

    async createAircraft() {
      if (!this.isOwner) {
        window.alert("Solo el propietario puede crear aeronaves.");
        return;
      }

      const code = this.newAircraft.code.trim().toUpperCase();
      const name = this.newAircraft.name.trim();
      if (!code || !name) {
        window.alert("Ingresa codigo y nombre para crear la aeronave.");
        return;
      }

      const exists = this.fleet.aircrafts.some((aircraft) => aircraft.code.toUpperCase() === code);
      if (exists) {
        window.alert("Ese codigo ya existe.");
        return;
      }

      const id = `${code.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
      this.fleet.aircrafts.push({ id, code, name, rows: [] });
      this.fleet.selectedId = id;
      this.newAircraft.code = "";
      this.newAircraft.name = "";
      const saved = await this.persistFleet();
      if (!saved) {
        window.alert("La aeronave se creo localmente, pero Firebase no la pudo sincronizar. Revisa reglas y login.");
      }
      this.navigate("base-datos");
    },

    canDeleteAircraft(aircraft) {
      return this.isOwner && aircraft && !PROTECTED_AIRCRAFT_IDS.includes(aircraft.id);
    },

    async deleteAircraft(aircraftId) {
      if (!this.isOwner) {
        window.alert("Solo el propietario puede eliminar aeronaves.");
        return;
      }

      const aircraft = this.fleet.aircrafts.find((item) => item.id === aircraftId);
      if (!this.canDeleteAircraft(aircraft)) {
        window.alert("Esta aeronave base no se puede eliminar.");
        return;
      }

      const accepted = window.confirm(`Deseas eliminar la aeronave ${aircraft.code}?`);
      if (!accepted) {
        return;
      }

      this.fleet.aircrafts = this.fleet.aircrafts.filter((item) => item.id !== aircraftId);
      if (this.fleet.selectedId === aircraftId) {
        this.fleet.selectedId = this.fleet.aircrafts[0] ? this.fleet.aircrafts[0].id : "";
      }

      const saved = await this.persistFleet();
      if (!saved) {
        window.alert("La aeronave se elimino localmente, pero Firebase no pudo sincronizar el cambio.");
      }
    },

    async addRow() {
      if (!this.isOwner) {
        window.alert("Solo el propietario puede editar.");
        return;
      }
      if (!this.currentAircraft) {
        return;
      }

      this.currentAircraft.rows.push({
        component: "Nuevo componente",
        series: "",
        workshop: "",
        overhaul: "01/07/2026",
        assigned: "0 h",
        consumed: "0 h",
        remaining: "0 h",
        due: "01/07/2027"
      });
      await this.persistFleet();
    },

    async resetDb() {
      if (!this.isOwner) {
        window.alert("Solo el propietario puede editar.");
        return;
      }
      const accepted = window.confirm("Deseas restaurar la base de datos original?");
      if (!accepted || !this.currentAircraft) {
        return;
      }
      this.currentAircraft.rows = this.currentAircraft.id === "pnp-501" ? cloneData(defaultRowsPnp501) : [];
      await this.persistFleet();
    },

    setMobileMenuOpen(open) {
      this.mobileMenuOpen = open;
    },

    handleResize() {
      if (window.innerWidth > 760) {
        this.setMobileMenuOpen(false);
      }
    },

    async signInWithGoogle() {
      if (!this.authReady) {
        this.updateLoginHint("Google no esta disponible. Usa correo o configura Firebase.", true);
        return;
      }

      try {
        const provider = new window.firebase.auth.GoogleAuthProvider();
        await window.firebase.auth().signInWithPopup(provider);
        this.updateLoginHint("Ingreso correcto con Google.");
      } catch (error) {
        console.error("Google sign-in error:", error);
        this.updateLoginHint("No se pudo iniciar sesion con Google.", true);
      }
    },

    async signInWithReaderEmail() {
      const normalized = String(this.reader.email || "").trim().toLowerCase();
      const rawPassword = String(this.reader.password || "");
      const emailHash = await sha256(normalized);
      const passwordHash = await sha256(rawPassword);

      if (emailHash !== READER_EMAIL_HASH || passwordHash !== READER_PASSWORD_HASH) {
        this.updateLoginHint("Credenciales incorrectas para acceso por correo.", true);
        return;
      }

      this.localReaderUser = { email: "usuario-correo", provider: "email-reader" };
      this.currentUser = null;
      this.isOwner = false;
      this.reader.password = "";
      this.updateLoginHint("Ingreso correcto. Modo solo lectura.");
    },

    async signOut() {
      if (this.localReaderUser) {
        this.localReaderUser = null;
        this.currentUser = null;
        this.isOwner = false;
        this.updateLoginHint("El acceso por correo es solo lectura.");
        return;
      }

      if (!this.authReady) {
        this.currentUser = null;
        this.isOwner = false;
        return;
      }

      await window.firebase.auth().signOut();
    },

    async initAuth() {
      if (!isFirebaseConfigReady()) {
        this.updateLoginHint("El acceso por correo es solo lectura.");
        return;
      }

      try {
        await loadScript("https://www.gstatic.com/firebasejs/10.12.3/firebase-app-compat.js");
        await loadScript("https://www.gstatic.com/firebasejs/10.12.3/firebase-auth-compat.js");
        await loadScript("https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore-compat.js");
      } catch (error) {
        console.error("Firebase SDK load error:", error);
        this.updateLoginHint("Google no esta disponible. Usa el acceso por correo.", true);
        this.updateCloudStatus("Sin conexion", true, this.getFirebaseErrorMessage(error));
        return;
      }

      if (!window.firebase || !window.firebase.firestore) {
        this.updateLoginHint("Google no esta disponible. Usa el acceso por correo.", true);
        this.updateCloudStatus("Sin Firebase", true);
        return;
      }

      if (!window.firebase.apps.length) {
        window.firebase.initializeApp(firebaseConfig);
      }

      this.authReady = true;
      this.dbReady = true;

      window.firebase.auth().onAuthStateChanged(async (user) => {
        this.currentUser = user;
        if (user) {
          this.localReaderUser = null;
        }

        const email = (user && user.email ? user.email : "").toLowerCase();
        this.isOwner = email === OWNER_EMAIL.toLowerCase();

        if (user && !this.isOwner) {
          this.updateLoginHint("Ingreso con Google en modo solo lectura.");
        }
        if (user && this.isOwner) {
          this.updateLoginHint("Ingreso con Google en modo editor.");
        }
        if (!user && !this.localReaderUser) {
          this.updateLoginHint("El acceso por correo es solo lectura.");
        }

        this.subscribeFleetFromFirestore();

        if (this.isOwner) {
          await this.saveFleetToFirestore();
        }
      });
    }
  }
};
</script>
