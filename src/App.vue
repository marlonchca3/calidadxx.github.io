<template>
  <div class="app-shell">
    <div class="layout">
      <aside class="sidebar" :class="{ open: mobileMenuOpen }">
        <div class="brand">
          <h2 class="brand-title">DIVMAAER</h2>
          <p class="brand-sub">{{ currentAircraft ? currentAircraft.code : "CONTROL DE CALIDAD" }}</p>
        </div>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="String(menuExpanded)"
          aria-controls="sidebar-menu"
          aria-label="Mostrar u ocultar menu"
          @click="menuExpanded = !menuExpanded"
        >
          <span class="hamburger-icon" aria-hidden="true">☰</span>
        </button>

        <nav id="sidebar-menu" class="menu" :class="{ collapsed: !menuExpanded }">
          <a
            v-for="item in menuItems"
            :key="item.label"
            class="menu-item"
            :class="{ active: activeMenuLabel === item.label }"
            :href="`#${item.target}`"
            @click.prevent="navigate(item.target, item.label)"
          >
            <span class="menu-icon" aria-hidden="true">{{ item.icon }}</span>
            <span class="menu-label">{{ item.label }}</span>
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
              <p class="topbar-kicker">CONTROL DE CALIDAD</p>
              <h1>Sistema de Gestión de Recursos Aeronáuticos</h1>
            </div>
          </div>

          <div class="title-wrap">
            <p>Dashboard tecnico · {{ currentAircraft ? currentAircraft.code : "--" }}</p>
          </div>

          <div class="top-actions">
            <div class="chip aircraft-chip"><span>{{ aircraftChip }}</span> <span>▼</span></div>
            <div class="chip date-chip">01/07/2026 <span>◷</span></div>
            <div class="chip firebase-chip" :class="{ 'sync-error': cloudStatusError }" :title="cloudErrorMessage || cloudStatus">
              <span class="sync-dot"></span>
              <span>Firebase {{ cloudStatusText }}</span>
            </div>
            <div class="chip sync-info-chip" :title="`Fuente: ${syncSourceText}`">
              <span class="sync-source-dot" :class="{ remote: syncSource === 'remote' }"></span>
              <span>Últ. sync: {{ lastSyncLabel }}</span>
            </div>
            <div class="auth-box">
              <span class="auth-status">{{ authStatus }}</span>
              <button v-if="!isAuthenticated" class="auth-btn" type="button" @click="signInWithGoogle">Iniciar sesion</button>
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
                    :class="{ active: aircraft.id === fleet.selectedId, dragging: draggingAircraftId === aircraft.id }"
                    :draggable="isOwner && editingAircraftId !== aircraft.id"
                    @dragstart="startAircraftDrag($event, aircraft.id)"
                    @dragover.prevent
                    @drop.prevent="dropAircraft($event, aircraft.id)"
                    @dragend="finishAircraftDrag"
                  >
                    <template v-if="editingAircraftId === aircraft.id">
                      <input v-model.trim="editingAircraftDraft.code" class="aircraft-edit-input" type="text" maxlength="30" aria-label="Codigo de aeronave">
                      <input v-model.trim="editingAircraftDraft.name" class="aircraft-edit-input" type="text" maxlength="80" aria-label="Nombre de aeronave">
                      <p>Componentes: {{ aircraft.rows.length }}</p>
                    </template>
                    <template v-else>
                      <h3>{{ aircraft.code }}</h3>
                      <p>{{ aircraft.name }}</p>
                      <p>Componentes: {{ aircraft.rows.length }}</p>
                    </template>
                    <div class="aircraft-actions">
                      <template v-if="editingAircraftId === aircraft.id">
                        <button class="table-btn" type="button" :disabled="!isOwner" @click="saveAircraftEdit(aircraft.id)">Guardar</button>
                        <button class="table-btn" type="button" @click="cancelAircraftEdit">Cancelar</button>
                      </template>
                      <template v-else>
                        <button class="table-btn" type="button" @click="openAircraft(aircraft.id)">Abrir</button>
                        <button class="table-btn" type="button" :disabled="!isOwner" @click="startAircraftEdit(aircraft)">Editar</button>
                      </template>
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
            <article class="kpi kpi-info">
              <div class="kpi-head">
                <p class="kpi-title">Total Componentes</p>
                <span class="kpi-icon" aria-hidden="true">▦</span>
              </div>
              <p class="kpi-value">{{ metrics.total }}</p>
              <p class="kpi-meta"><span>Registrados</span><strong>100%</strong></p>
              <div class="kpi-progress"><span style="width: 100%"></span></div>
            </article>

            <article class="kpi kpi-danger">
              <div class="kpi-head">
                <p class="kpi-title">Críticos / Overhaul</p>
                <span class="kpi-icon" aria-hidden="true">!</span>
              </div>
              <p class="kpi-value">{{ metrics.critical }}</p>
              <p class="kpi-meta"><span>Requieren atención</span><strong>{{ pct(metrics.critical) }}</strong></p>
              <div class="kpi-progress"><span :style="{ width: pct(metrics.critical) }"></span></div>
            </article>

            <article class="kpi kpi-warn">
              <div class="kpi-head">
                <p class="kpi-title">Alertas Preventivas</p>
                <span class="kpi-icon" aria-hidden="true">△</span>
              </div>
              <p class="kpi-value">{{ metrics.alert }}</p>
              <p class="kpi-meta"><span>Seguimiento cercano</span><strong>{{ pct(metrics.alert) }}</strong></p>
              <div class="kpi-progress"><span :style="{ width: pct(metrics.alert) }"></span></div>
            </article>

            <article class="kpi kpi-ok">
              <div class="kpi-head">
                <p class="kpi-title">En Condiciones</p>
                <span class="kpi-icon" aria-hidden="true">✓</span>
              </div>
              <p class="kpi-value">{{ metrics.ok }}</p>
              <p class="kpi-meta"><span>Operativos</span><strong>{{ pct(metrics.ok) }}</strong></p>
              <div class="kpi-progress"><span :style="{ width: pct(metrics.ok) }"></span></div>
            </article>

            <article class="kpi risk-card">
              <div class="kpi-risk">
                <div class="ring" :style="riskRingStyle"><span>{{ metrics.risk }}%</span></div>
                <div class="risk-copy">
                  <p class="kpi-title">Riesgo Global</p>
                  <strong :style="{ color: riskLabel.color }">{{ metrics.risk }}%</strong>
                  <span>Nivel: {{ riskLabel.label }}</span>
                  <small>{{ riskAttentionText }}</small>
                </div>
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
              <p class="panel-sub">Comparación: consumido vs remanente por componente</p>
              <div class="chart-legend" aria-label="Leyenda de consumo">
                <span><i class="legend-swatch consumed"></i>Consumido</span>
                <span><i class="legend-swatch remaining"></i>Remanente</span>
              </div>
              <div class="resource-chart">
                <div v-for="bar in chartBars" :key="bar.key" class="resource-row">
                  <div class="resource-row-head">
                    <div class="resource-name">
                      <span class="component-logo" :class="bar.categoryClass">{{ bar.logo }}</span>
                      <span>{{ bar.label }}</span>
                    </div>
                    <strong>{{ bar.percentage }}%</strong>
                  </div>
                  <div class="resource-track" :aria-label="`${bar.label}: ${bar.consumed} consumido, ${bar.remaining} remanente`">
                    <span class="resource-segment consumed" :style="{ width: `${bar.consumedWidth}%` }"></span>
                    <span class="resource-segment remaining" :style="{ width: `${bar.remainingWidth}%` }"></span>
                  </div>
                  <div class="resource-values">
                    <span>{{ formatMetric(bar.consumed) }}</span>
                    <span>{{ formatMetric(bar.remaining) }}</span>
                  </div>
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

          <section class="analytics-grid view">
            <article class="panel analytics-panel">
              <h2>Consumo de Recursos por Categoría</h2>
              <p class="panel-sub">Distribución del consumo registrado</p>
              <div class="donut-layout">
                <div class="donut-chart" :style="categoryDonutStyle">
                  <div class="donut-center">
                    <span>Total</span>
                    <strong>{{ formatMetric(metrics.consumedTotal) }}</strong>
                    <small>HRS / ARR</small>
                  </div>
                </div>
                <div class="chart-list">
                  <div v-for="category in categoryChart" :key="category.key" class="chart-list-row">
                    <span><i class="legend-swatch" :style="{ background: category.color }"></i>{{ category.label }}</span>
                    <strong>{{ formatMetric(category.value) }} <small>{{ category.percentage }}%</small></strong>
                  </div>
                </div>
              </div>
            </article>

            <article class="panel analytics-panel trend-panel">
              <h2>Tendencia de Consumo (TSO)</h2>
              <p class="panel-sub">Comparación de consumo y remanente por componente</p>
              <div class="chart-legend trend-legend">
                <span><i class="legend-swatch consumed"></i>Consumido</span>
                <span><i class="legend-swatch remaining"></i>Remanente</span>
              </div>
              <div class="trend-chart">
                <div class="trend-axis-label top">{{ formatMetric(trendChart.max) }}</div>
                <div class="trend-axis-label bottom">0</div>
                <svg viewBox="0 0 600 180" role="img" aria-label="Tendencia de consumo y remanente">
                  <line v-for="line in trendChart.gridLines" :key="line.y" x1="38" :y1="line.y" x2="590" :y2="line.y" class="trend-grid-line"></line>
                  <polyline :points="trendChart.consumedPoints" class="trend-line consumed-line"></polyline>
                  <polyline :points="trendChart.remainingPoints" class="trend-line remaining-line"></polyline>
                  <g v-for="point in trendChart.points" :key="point.key">
                    <circle :cx="point.x" :cy="point.consumedY" r="4" class="trend-point consumed-point"></circle>
                    <circle :cx="point.x" :cy="point.remainingY" r="4" class="trend-point remaining-point"></circle>
                    <text :x="point.x" y="176" text-anchor="middle" class="trend-label">{{ point.label }}</text>
                  </g>
                </svg>
              </div>
            </article>

            <article class="panel analytics-panel">
              <h2>Estado de Componentes</h2>
              <p class="panel-sub">Situación operativa actual</p>
              <div class="donut-layout status-layout">
                <div class="donut-chart status-donut" :style="statusDonutStyle">
                  <div class="donut-center">
                    <strong>{{ metrics.total }}</strong>
                    <span>Total</span>
                  </div>
                </div>
                <div class="chart-list">
                  <div v-for="status in statusChart" :key="status.key" class="chart-list-row">
                    <span><i class="legend-swatch" :style="{ background: status.color }"></i>{{ status.label }}</span>
                    <strong>{{ status.value }} <small>{{ status.percentage }}%</small></strong>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section id="base-datos" ref="baseDatos" class="panel table-panel view">
            <div class="table-title">
              <h2>Base de Datos de Componentes</h2>
              <div class="table-tools">
                <button class="table-btn" type="button" :disabled="!isOwner" @click="addRow">Agregar componente</button>
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
                    <th>Asignado TBO (hrs)</th>
                    <th>Asignado TBO (años)</th>
                    <th>Consumido TBO hrs</th>
                    <th>Consumido TBO años</th>
                    <th>Remanente TBO (hrs)</th>
                    <th>Remanente TBO (años)</th>
                    <th>Vencimiento</th>
                    <th>Estado</th>
                    <th>Accion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in currentRows" :key="`${currentAircraft.id}-${index}`">
                    <td><div class="table-component"><span class="component-logo" :class="categoryClass(row)">{{ componentLogo(row) }}</span><input v-model="row.component" class="cell-input" :disabled="!isOwner" @change="persistFleet"></div></td>
                    <td><input v-model="row.series" class="cell-input" :disabled="!isOwner" @change="persistFleet"></td>
                    <td><input v-model="row.workshop" class="cell-input" :disabled="!isOwner" @change="persistFleet"></td>
                    <td><input v-model="row.overhaul" class="cell-input" :disabled="!isOwner" @input="updateTboDerived(row)" @change="persistFleet"></td>
                    <td><input v-model="row.assignedTboHours" class="cell-input numeric-input" :disabled="!isOwner" @input="updateTboDerived(row)" @change="persistFleet"></td>
                    <td><input v-model="row.assignedTboYears" class="cell-input numeric-input" :disabled="!isOwner" @input="updateTboDerived(row)" @change="persistFleet"></td>
                    <td><input v-model="row.consumedTboHours" class="cell-input numeric-input" :disabled="!isOwner" @input="updateTboDerived(row)" @change="persistFleet"></td>
                    <td><input v-model="row.consumedTboYears" class="cell-input numeric-input" :disabled="!isOwner" @input="updateTboDerived(row)" @change="persistFleet"></td>
                    <td><input v-model="row.remainingTboHours" class="cell-input numeric-input calculated-input" disabled readonly></td>
                    <td><input v-model="row.remainingTboYears" class="cell-input numeric-input calculated-input" disabled readonly></td>
                    <td><input v-model="row.due" class="cell-input calculated-input" disabled readonly></td>
                    <td><span class="status" :class="statusClass(row)">{{ getStatus(row) }}</span></td>
                    <td>
                      <button class="table-btn danger-btn" type="button" :disabled="!isOwner" @click="deleteRow(index)">Eliminar</button>
                    </td>
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

  </div>
</template>

<script>
import { hasStoredFleet, shouldApplyRemoteFleet } from "./syncRules.js";

const DB_STORAGE_KEY = "sr_aero_fleet_v1";
const DB_META_KEY = "sr_aero_fleet_meta_v1";
const FIRESTORE_COLLECTION = "dashboards";
const FIRESTORE_DOCUMENT = "main";
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

function readFleetMeta() {
  try {
    return JSON.parse(localStorage.getItem(DB_META_KEY) || "{}") || {};
  } catch {
    return {};
  }
}

function writeFleetMeta(updatedAt) {
  try {
    localStorage.setItem(DB_META_KEY, JSON.stringify({ updatedAt }));
  } catch {
    // Ignoramos errores de almacenamiento local.
  }
}

function createDefaultFleet() {
  return {
    selectedId: "pnp-501",
    aircrafts: [
      { id: "pnp-501", code: "PNP-501", name: "Mi-17 MTV-1", rows: cloneData(defaultRowsPnp501).map(normalizeRow) },
      { id: "pnp-506", code: "PNP-506", name: "Mi-171", rows: [] }
    ]
  };
}

function parseNumeric(value) {
  const numeric = parseFloat(String(value).replace(/[^0-9.-]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function formatNumberValue(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return "0";
  }
  return Number.isInteger(number) ? String(number) : String(Number(number.toFixed(2)));
}

function normalizeRow(row) {
  const assignedTboHours = String(row.assignedTboHours ?? row.assigned ?? "");
  const assignedTboYears = String(row.assignedTboYears ?? "");
  const consumedTboHours = String(row.consumedTboHours ?? row.consumed ?? "");
  const consumedTboYears = String(row.consumedTboYears ?? "");
  const remainingTboHours = formatNumberValue(parseNumeric(assignedTboHours) - parseNumeric(consumedTboHours));
  const remainingTboYears = formatNumberValue(parseNumeric(assignedTboYears) - parseNumeric(consumedTboYears));
  const due = calculateDueDate(row.overhaul, assignedTboYears) || String(row.due || "");

  return {
    component: String(row.component || ""),
    series: String(row.series || ""),
    workshop: String(row.workshop || ""),
    overhaul: String(row.overhaul || ""),
    assigned: assignedTboHours,
    consumed: consumedTboHours,
    remaining: remainingTboHours,
    assignedTboHours,
    assignedTboYears,
    consumedTboHours,
    consumedTboYears,
    remainingTboHours,
    remainingTboYears,
    due
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
    parsed.aircrafts = parsed.aircrafts.map((aircraft) => ({
      ...aircraft,
      rows: Array.isArray(aircraft.rows) ? aircraft.rows.map(normalizeRow) : []
    }));
    return parsed;
  } catch {
    return createDefaultFleet();
  }
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

function formatEsDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}/${date.getFullYear()}`;
}

function addTboYears(date, yearsValue) {
  const years = parseNumeric(yearsValue);
  if (years <= 0) {
    return null;
  }

  const result = new Date(date);
  const totalMonths = Math.round(years * 12);
  const originalDay = result.getDate();
  result.setDate(1);
  result.setMonth(result.getMonth() + totalMonths);
  const lastDay = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate();
  result.setDate(Math.min(originalDay, lastDay));
  return result;
}

function calculateDueDate(overhaul, assignedTboYears) {
  const overhaulDate = parseEsDate(overhaul);
  const dueDate = overhaulDate ? addTboYears(overhaulDate, assignedTboYears) : null;
  return dueDate ? formatEsDate(dueDate) : "";
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
      activeMenuLabel: "Dashboard",
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
      lastSyncAt: hasStoredFleet(localStorage) ? Number(readFleetMeta().updatedAt || 0) : 0,
      localReaderUser: null,
      syncSource: "local",
      menuExpanded: true,
      mobileMenuOpen: false,
      newAircraft: { code: "", name: "" },
      editingAircraftId: "",
      editingAircraftDraft: { code: "", name: "" },
      draggingAircraftId: "",
      reader: { email: "", password: "" },
      menuItems: [
        { label: "Dashboard", target: "dashboard", icon: "⌂" },
        { label: "Aeronaves", target: "aeronaves", icon: "✈" },
        { label: "Componentes", target: "dashboard", icon: "⚙" },
        { label: "Base de datos", target: "base-datos", icon: "▦" },
        { label: "Alertas", target: "dashboard", icon: "!" },
        { label: "Calendario", target: "dashboard", icon: "◷" },
        { label: "Historial", target: "dashboard", icon: "≡" }
      ]
    };
  },

  computed: {
    activeUser() {
      return this.currentUser || this.localReaderUser;
    },

    isAuthenticated() {
      return Boolean(this.localReaderUser || (this.currentUser && !this.currentUser.isAnonymous));
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

    cloudStatusText() {
      return this.cloudStatus.toLowerCase();
    },

    syncSourceText() {
      return this.syncSource === "remote" ? "Remoto" : "Local";
    },

    lastSyncLabel() {
      if (!this.lastSyncAt) {
        return "Sin datos";
      }

      return new Intl.DateTimeFormat("es-PE", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date(this.lastSyncAt));
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

      const consumedTotal = rows.reduce((sum, row) => sum + this.rowConsumedHours(row), 0);
      const remainingTotal = rows.reduce((sum, row) => sum + this.rowRemainingHours(row), 0);
      const risk = Math.round(((critical + alert * 0.5) / Math.max(total, 1)) * 100);

      return { total, critical, alert, ok, dueIn90, dueIn180, consumedTotal, remainingTotal, risk };
    },

    riskRingStyle() {
      const degrees = Math.round((this.metrics.risk / 100) * 360);
      return {
        background: `conic-gradient(${this.riskLabel.color} 0 ${degrees}deg, #183458 ${degrees}deg 360deg)`
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

    riskAttentionText() {
      const attention = this.metrics.critical + this.metrics.alert;
      return `${attention} de ${Math.max(this.metrics.total, 1)} componentes requieren atención`;
    },

    panelTotals() {
      return {
        assigned: this.currentRows.reduce((sum, row) => sum + this.rowAssignedHours(row), 0),
        consumed: this.currentRows.reduce((sum, row) => sum + this.rowConsumedHours(row), 0),
        remaining: this.currentRows.reduce((sum, row) => sum + this.rowRemainingHours(row), 0)
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
      const rows = this.currentRows.slice(0, 6);
      if (rows.length === 0) {
        return [];
      }

      const maxValue = Math.max(1, ...rows.map((row) => Math.max(this.rowConsumedHours(row) + Math.max(this.rowRemainingHours(row), 0), 1)));

      return rows.map((row, index) => {
        const consumed = this.rowConsumedHours(row);
        const remaining = Math.max(this.rowRemainingHours(row), 0);
        const total = Math.max(consumed + remaining, 1);
        const status = this.getStatus(row);

        return {
          key: `${row.component}-${index}`,
          label: row.component || "Sin nombre",
          logo: this.componentLogo(row),
          categoryClass: this.categoryClass(row),
          consumed,
          remaining,
          percentage: Math.round((consumed / total) * 100),
          consumedWidth: Math.max(0, Math.min(100, (consumed / maxValue) * 100)),
          remainingWidth: Math.max(0, Math.min(100, (remaining / maxValue) * 100)),
          statusClass: status === "CRITICO" ? "critical" : status === "ALERTA" ? "warn" : "ok"
        };
      });
    },

    categoryChart() {
      const categories = new Map();
      this.currentRows.forEach((row) => {
        const category = this.componentCategory(row);
        const current = categories.get(category.key) || { ...category, value: 0 };
        current.value += Math.max(this.rowConsumedHours(row), 0);
        categories.set(category.key, current);
      });

      const total = Math.max(this.metrics.consumedTotal, 1);
      return Array.from(categories.values())
        .sort((a, b) => b.value - a.value)
        .map((category) => ({
          ...category,
          percentage: Math.round((category.value / total) * 100)
        }));
    },

    categoryDonutStyle() {
      let start = 0;
      const stops = this.categoryChart.map((category) => {
        const end = start + (category.percentage / 100) * 360;
        const stop = `${category.color} ${start}deg ${end}deg`;
        start = end;
        return stop;
      });
      return { background: stops.length ? `conic-gradient(${stops.join(", ")})` : "#183458" };
    },

    statusChart() {
      const statuses = [
        { key: "ok", label: "Operativos", value: this.metrics.ok, color: "#16b86a" },
        { key: "alert", label: "Atención", value: this.metrics.alert, color: "#ffb100" },
        { key: "critical", label: "Overhaul", value: this.metrics.critical, color: "#ff4f4f" }
      ];
      const total = Math.max(this.metrics.total, 1);
      return statuses.map((status) => ({ ...status, percentage: Math.round((status.value / total) * 100) }));
    },

    statusDonutStyle() {
      let start = 0;
      const stops = this.statusChart.map((status) => {
        const end = start + (status.percentage / 100) * 360;
        const stop = `${status.color} ${start}deg ${end}deg`;
        start = end;
        return stop;
      });
      return { background: stops.length ? `conic-gradient(${stops.join(", ")})` : "#183458" };
    },

    trendChart() {
      const rows = this.currentRows.slice(0, 6);
      const values = rows.flatMap((row) => [this.rowConsumedHours(row), Math.max(this.rowRemainingHours(row), 0)]);
      const max = Math.max(1, ...values);
      const points = rows.map((row, index) => {
        const x = 48 + (index * 532) / Math.max(rows.length - 1, 1);
        const consumedY = 150 - (this.rowConsumedHours(row) / max) * 120;
        const remainingY = 150 - (Math.max(this.rowRemainingHours(row), 0) / max) * 120;
        return { key: `${row.component}-${index}`, x, consumedY, remainingY, label: this.shortComponentLabel(row.component) };
      });
      return {
        max,
        points,
        consumedPoints: points.map((point) => `${point.x},${point.consumedY}`).join(" "),
        remainingPoints: points.map((point) => `${point.x},${point.remainingY}`).join(" "),
        gridLines: [30, 70, 110, 150].map((y) => ({ y }))
      };
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

  mounted() {
    this.initAuth();
    window.addEventListener("resize", this.handleResize);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.firestoreUnsubscribe) {
      this.firestoreUnsubscribe();
    }
  },

  methods: {
    componentCategory(row) {
      const name = `${row.component || ""} ${row.series || ""}`.toLowerCase();
      if (/motor|tv3|ai-9|apu/.test(name)) {
        return { key: "motors", label: "Motores", color: "#176ee8", logo: "M" };
      }
      if (/vr-|reductor|reduct/.test(name)) {
        return { key: "reducers", label: "Reductores", color: "#12b96b", logo: "R" };
      }
      if (/bomba|hidraul/.test(name)) {
        return { key: "hydraulic", label: "Hidráulicos", color: "#f2a900", logo: "H" };
      }
      if (/generador|electr|ai-/.test(name)) {
        return { key: "systems", label: "Sistemas", color: "#8b62d9", logo: "S" };
      }
      return { key: "other", label: "Otros", color: "#98a9c2", logo: "O" };
    },

    componentLogo(row) {
      return this.componentCategory(row).logo;
    },

    categoryClass(row) {
      return `category-${this.componentCategory(row).key}`;
    },

    shortComponentLabel(value) {
      const label = String(value || "Sin datos");
      return label.length > 12 ? `${label.slice(0, 11)}…` : label;
    },

    async persistFleet() {
      const timestamp = Date.now();
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(this.fleet));
      writeFleetMeta(timestamp);
      this.lastSyncAt = timestamp;
      this.syncSource = "local";
      if (!this.isApplyingRemoteFleet) {
        return this.saveFleetToFirestore();
      }
      return true;
    },

    getRemoteUpdatedAt(data) {
      if (!data || !data.updatedAt) {
        return 0;
      }
      if (typeof data.updatedAt.toMillis === "function") {
        return data.updatedAt.toMillis();
      }
      if (data.updatedAt.seconds) {
        return Number(data.updatedAt.seconds) * 1000;
      }
      const parsed = new Date(data.updatedAt).getTime();
      return Number.isFinite(parsed) ? parsed : 0;
    },

    rowAssignedHours(row) {
      return parseNumeric(row.assignedTboHours ?? row.assigned);
    },

    rowConsumedHours(row) {
      return parseNumeric(row.consumedTboHours ?? row.consumed);
    },

    rowRemainingHours(row) {
      return parseNumeric(row.remainingTboHours ?? row.remaining);
    },

    updateTboDerived(row) {
      const remainingHours = this.rowAssignedHours(row) - this.rowConsumedHours(row);
      const remainingYears = parseNumeric(row.assignedTboYears) - parseNumeric(row.consumedTboYears);
      const due = calculateDueDate(row.overhaul, row.assignedTboYears);
      row.remainingTboHours = formatNumberValue(remainingHours);
      row.remainingTboYears = formatNumberValue(remainingYears);
      row.assigned = String(row.assignedTboHours ?? "");
      row.consumed = String(row.consumedTboHours ?? "");
      row.remaining = row.remainingTboHours;
      if (due) {
        row.due = due;
      }
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
          rows: Array.isArray(aircraft.rows) ? aircraft.rows.map(normalizeRow) : []
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
        const remoteUpdatedAt = this.getRemoteUpdatedAt(data);
        const localUpdatedAt = Number(readFleetMeta().updatedAt || 0);

        if (!remoteFleet) {
          this.updateCloudStatus("Datos invalidos", true);
          return;
        }

        const useRemoteFleet = shouldApplyRemoteFleet({
          hasLocalData: hasStoredFleet(localStorage),
          localUpdatedAt,
          remoteUpdatedAt,
          isOwner: this.isOwner
        });

        if (!useRemoteFleet && !this.isOwner) {
          this.updateCloudStatus("Sincronizado local");
          return;
        }

        if (!useRemoteFleet && this.isOwner) {
          this.updateCloudStatus("Sincronizado local");
          return;
        }

        this.isApplyingRemoteFleet = true;
        this.fleet = remoteFleet;
        localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(remoteFleet));
        const appliedTimestamp = remoteUpdatedAt || Date.now();
        writeFleetMeta(appliedTimestamp);
        this.lastSyncAt = appliedTimestamp;
        this.syncSource = "remote";
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

      const hasLocalFleet = hasStoredFleet(localStorage);
      if (!force && !hasLocalFleet && !this.isOwner) {
        return false;
      }
      if (!force && !hasLocalFleet && this.isOwner) {
        try {
          const remoteSnapshot = await this.getFleetDocRef().get();
          if (remoteSnapshot.exists && this.getValidFleet(remoteSnapshot.data() && remoteSnapshot.data().fleet)) {
            return false;
          }
        } catch (error) {
          const detail = this.getFirebaseErrorMessage(error);
          this.updateCloudStatus("Error lectura", true, detail);
          this.updateLoginHint(`No se pudo comprobar Firestore. ${detail}`, true);
          return false;
        }
      }

      const ref = this.getFleetDocRef();
      if (!ref) {
        return false;
      }

      try {
        this.isSavingToFirestore = true;
        this.updateCloudStatus("Guardando");
        const timestamp = Date.now();
        await ref.set({
          fleet: cloneData(this.fleet),
          updatedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
          updatedBy: this.currentUser && this.currentUser.email ? this.currentUser.email : OWNER_EMAIL,
          updatedEpoch: timestamp
        }, { merge: true });
        writeFleetMeta(timestamp);
        this.lastSyncAt = timestamp;
        this.syncSource = "local";
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

    async ensureAnonymousFirebaseSession() {
      if (!this.authReady || !window.firebase || !window.firebase.auth) {
        return false;
      }
      if (window.firebase.auth().currentUser) {
        return true;
      }

      try {
        await window.firebase.auth().signInAnonymously();
        return true;
      } catch (error) {
        console.error("Anonymous sign-in error:", error);
        this.updateCloudStatus("Sin lectura", true, this.getFirebaseErrorMessage(error));
        return false;
      }
    },

    formatMetric(value) {
      return new Intl.NumberFormat("es-PE", { minimumFractionDigits: 0, maximumFractionDigits: 1 }).format(value);
    },

    pct(value) {
      const total = Math.max(this.metrics.total, 1);
      return `${Math.round((value / total) * 100)}%`;
    },

    getStatus(row) {
      const remaining = this.rowRemainingHours(row);
      const dueDate = parseEsDate(row.due);
      if (remaining < 0) {
        return "CRITICO";
      }
      if (dueDate && dueDate < TODAY) {
        return "CRITICO";
      }

      const assigned = this.rowAssignedHours(row);
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

    navigate(targetId, menuLabel = "") {
      this.activeView = targetId;
      this.activeMenuLabel = menuLabel || (targetId === "aeronaves" ? "Aeronaves" : targetId === "base-datos" ? "Base de datos" : "Dashboard");
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

    startAircraftEdit(aircraft) {
      if (!this.isOwner) {
        window.alert("Solo el propietario puede editar aeronaves.");
        return;
      }
      this.editingAircraftId = aircraft.id;
      this.editingAircraftDraft = { code: aircraft.code, name: aircraft.name };
    },

    cancelAircraftEdit() {
      this.editingAircraftId = "";
      this.editingAircraftDraft = { code: "", name: "" };
    },

    async saveAircraftEdit(aircraftId) {
      if (!this.isOwner) {
        window.alert("Solo el propietario puede editar aeronaves.");
        return;
      }

      const aircraft = this.fleet.aircrafts.find((item) => item.id === aircraftId);
      const code = this.editingAircraftDraft.code.trim().toUpperCase();
      const name = this.editingAircraftDraft.name.trim();
      if (!aircraft || !code || !name) {
        window.alert("Ingresa codigo y nombre para guardar la aeronave.");
        return;
      }

      const duplicate = this.fleet.aircrafts.some((item) => item.id !== aircraftId && item.code.toUpperCase() === code);
      if (duplicate) {
        window.alert("Ese codigo ya existe.");
        return;
      }

      aircraft.code = code;
      aircraft.name = name;
      this.cancelAircraftEdit();
      const saved = await this.persistFleet();
      if (!saved) {
        window.alert("La aeronave se actualizo localmente, pero Firebase no pudo sincronizar el cambio.");
      }
    },

    aircraftIndex(aircraftId) {
      return this.fleet.aircrafts.findIndex((aircraft) => aircraft.id === aircraftId);
    },

    startAircraftDrag(event, aircraftId) {
      if (!this.isOwner || this.editingAircraftId === aircraftId) {
        event.preventDefault();
        return;
      }
      this.draggingAircraftId = aircraftId;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", aircraftId);
    },

    async dropAircraft(event, targetAircraftId) {
      if (!this.isOwner) {
        return;
      }

      const draggedAircraftId = event.dataTransfer.getData("text/plain") || this.draggingAircraftId;
      const draggedIndex = this.aircraftIndex(draggedAircraftId);
      const targetIndex = this.aircraftIndex(targetAircraftId);
      if (draggedIndex < 0 || targetIndex < 0 || draggedIndex === targetIndex) {
        this.finishAircraftDrag();
        return;
      }

      const aircrafts = [...this.fleet.aircrafts];
      const [draggedAircraft] = aircrafts.splice(draggedIndex, 1);
      aircrafts.splice(targetIndex, 0, draggedAircraft);
      this.fleet.aircrafts = aircrafts;
      this.finishAircraftDrag();
      const saved = await this.persistFleet();
      if (!saved) {
        window.alert("El orden se actualizo localmente, pero Firebase no pudo sincronizar el cambio.");
      }
    },

    finishAircraftDrag() {
      this.draggingAircraftId = "";
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
      return this.isOwner && Boolean(aircraft);
    },

    async deleteAircraft(aircraftId) {
      if (!this.isOwner) {
        window.alert("Solo el propietario puede eliminar aeronaves.");
        return;
      }

      const aircraft = this.fleet.aircrafts.find((item) => item.id === aircraftId);
      if (!this.canDeleteAircraft(aircraft)) {
        window.alert("No se puede eliminar esta aeronave.");
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

      this.currentAircraft.rows.push(normalizeRow({
        component: "Nuevo componente",
        series: "",
        workshop: "",
        overhaul: "01/07/2026",
        assigned: "0",
        consumed: "0",
        remaining: "0",
        assignedTboHours: "0",
        assignedTboYears: "1",
        consumedTboHours: "0",
        consumedTboYears: "0",
        remainingTboHours: "0",
        remainingTboYears: "0",
        due: "01/07/2027"
      }));
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
      this.currentAircraft.rows = this.currentAircraft.id === "pnp-501" ? cloneData(defaultRowsPnp501).map(normalizeRow) : [];
      await this.persistFleet();
    },

    async deleteRow(rowIndex) {
      if (!this.isOwner) {
        window.alert("Solo el propietario puede editar.");
        return;
      }
      if (!this.currentAircraft || !Array.isArray(this.currentAircraft.rows) || rowIndex < 0 || rowIndex >= this.currentAircraft.rows.length) {
        return;
      }

      const row = this.currentAircraft.rows[rowIndex];
      const componentName = row && row.component ? row.component : "este componente";
      const accepted = window.confirm(`Deseas eliminar ${componentName}?`);
      if (!accepted) {
        return;
      }

      this.currentAircraft.rows.splice(rowIndex, 1);
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
      await this.ensureAnonymousFirebaseSession();
      this.subscribeFleetFromFirestore();
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

      await this.ensureAnonymousFirebaseSession();

      window.firebase.auth().onAuthStateChanged(async (user) => {
        this.currentUser = user;
        if (user && !user.isAnonymous) {
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
