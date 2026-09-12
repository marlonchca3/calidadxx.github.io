<template>
  <div class="app-shell" :class="{ 'sidebar-collapsed': sidebarCollapsed, 'text-large': textSizeLarge }">
    <section v-if="!isAuthenticated" class="login-screen">
      <form class="login-card" @submit.prevent="signInWithEmail">
        <div class="login-brand">
          <p>DIVMAAER</p>
          <h1>Control de Calidad</h1>
        </div>

        <label for="login-email">Correo</label>
        <input
          id="login-email"
          v-model.trim="loginEmail"
          class="login-input"
          type="email"
          autocomplete="username"
          placeholder="correo@ejemplo.com"
          :disabled="authBusy"
        >

        <label for="login-password">Contrasena</label>
        <input
          id="login-password"
          v-model="loginPassword"
          class="login-input"
          type="password"
          autocomplete="current-password"
          placeholder="Contrasena"
          :disabled="authBusy"
        >

        <div class="login-actions">
          <button class="login-btn primary" type="submit" :disabled="authBusy || !authReady">
            {{ authBusy ? "Procesando..." : "Ingresar" }}
          </button>
          <button class="login-btn" type="button" :disabled="authBusy || !authReady" @click="createEmailUser">
            Crear cuenta
          </button>
        </div>

        <button class="login-link-btn" type="button" :disabled="authBusy || !authReady" @click="sendPasswordReset">
          Restablecer contrasena
        </button>

        <p class="login-hint" :class="{ error: authHintError }">{{ authHint }}</p>
      </form>
    </section>

    <div v-else class="layout">
      <aside class="sidebar" :class="{ open: mobileMenuOpen }">
        <div class="brand">
          <h2 class="brand-title">DIVMAAER</h2>
          <p class="brand-sub">{{ currentAircraft ? currentAircraft.code : "CONTROL DE CALIDAD" }}</p>
        </div>

        <button
          class="sidebar-collapse-btn"
          type="button"
          :aria-label="sidebarCollapsed ? 'Desplegar menu lateral' : 'Ocultar menu lateral'"
          :title="sidebarCollapsed ? 'Desplegar menu' : 'Ocultar menu'"
          @click="sidebarCollapsed = !sidebarCollapsed"
        >
          {{ sidebarCollapsed ? "›" : "‹" }}
        </button>

        <nav id="sidebar-menu" class="menu">
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
            <button class="chip text-size-btn" type="button" :title="textSizeLarge ? 'Achicar letras' : 'Agrandar letras'" @click="textSizeLarge = !textSizeLarge">
              {{ textSizeLarge ? "A-" : "A+" }}
            </button>
            <div class="chip aircraft-chip"><span>{{ aircraftChip }}</span> <span>▼</span></div>
            <div class="chip date-chip">{{ todayLabel }} <span>◷</span></div>
            <div class="chip firebase-chip" :class="{ 'sync-error': cloudStatusError }" :title="cloudErrorMessage || cloudStatus">
              <span class="sync-dot"></span>
              <span>Firebase {{ cloudStatusText }}</span>
            </div>
            <div class="chip sync-info-chip" :title="`Fuente: ${syncSourceText}`">
              <span class="sync-source-dot" :class="{ remote: syncSource === 'remote' }"></span>
              <span>Últ. sync: {{ lastSyncLabel }}</span>
            </div>
            <div class="auth-box" :title="authHint">
              <span class="auth-status">{{ authStatus }}</span>
              <button class="auth-btn" type="button" @click="signOut">Cerrar sesion</button>
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
                      <textarea v-model.trim="editingAircraftDraft.notes" class="aircraft-edit-input aircraft-notes-input" maxlength="240" aria-label="Notas de aeronave" placeholder="Notas"></textarea>
                      <p>Componentes: {{ aircraft.rows.length }}</p>
                    </template>
                    <template v-else>
                      <h3>{{ aircraft.code }}</h3>
                      <p>{{ aircraft.name }}</p>
                      <p v-if="aircraft.notes" class="aircraft-notes">{{ aircraft.notes }}</p>
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
                <textarea v-model.trim="newAircraft.notes" maxlength="240" placeholder="Notas de la aeronave" :disabled="!isOwner"></textarea>
                <button class="table-btn" type="submit" :disabled="!isOwner">Crear aeronave</button>
                <p class="readonly-note" :class="{ visible: !isOwner }">Solo el propietario puede crear aeronaves.</p>
              </form>
            </div>
          </section>
        </section>

        <template v-if="activeView !== 'aeronaves'">
          <section v-if="activeView === 'dashboard'" id="dashboard" ref="dashboard" class="grid-kpi view">
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

          <section v-if="activeView === 'dashboard'" id="main-grid-view" class="main-grid view">
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

          <section v-if="activeView === 'componentes'" id="componentes" class="analytics-grid view">
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

          <section v-if="activeView === 'base-datos'" id="base-datos" ref="baseDatos" class="panel table-panel view">
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
                    <th>Orden</th>
                    <th>Componente</th>
                    <th>Serie</th>
                    <th>Taller</th>
                    <th>Ultimo Overhaul</th>
                    <th>Asignado TBO (hrs)</th>
                    <th>Asignado TBO (años)</th>
                    <th>Consumido TBO hrs</th>
                    <th>Consumido TBO años</th>
                    <th>Asignado TSN (hrs)</th>
                    <th>Asignado TSN (años)</th>
                    <th>Consumido TSN hrs</th>
                    <th>Consumido TSN años</th>
                    <th>Remanente TBO (hrs)</th>
                    <th>Remanente TBO (años)</th>
                    <th>Remanente TSN (hrs)</th>
                    <th>Remanente TSN (años)</th>
                    <th>Notas</th>
                    <th>Vencimiento</th>
                    <th>Estado</th>
                    <th>Accion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in currentRows"
                    :key="`${currentAircraft.id}-${index}`"
                    :class="{ 'dragging-row': draggingRowIndex === index }"
                    @dragover.prevent
                    @drop.prevent="dropRow(index)"
                  >
                    <td class="row-drag-cell">
                      <button
                        class="row-drag-handle"
                        type="button"
                        draggable="true"
                        aria-label="Arrastrar componente"
                        :disabled="!isOwner"
                        @dragstart="startRowDrag($event, index)"
                        @dragend="finishRowDrag"
                      >
                        ⋮⋮
                      </button>
                    </td>
                    <td><div class="table-component"><span class="component-logo" :class="categoryClass(row)">{{ componentLogo(row) }}</span><input v-model="row.component" class="cell-input" :disabled="!isOwner" @change="saveRowFieldChange(row, 'Componente')"></div></td>
                    <td><input v-model="row.series" class="cell-input" :disabled="!isOwner" @change="saveRowFieldChange(row, 'Serie')"></td>
                    <td><input v-model="row.workshop" class="cell-input" :disabled="!isOwner" @change="saveRowFieldChange(row, 'Taller')"></td>
                    <td><input v-model="row.overhaul" class="cell-input" :disabled="!isOwner" @input="updateAllDerived(row)" @change="saveRowFieldChange(row, 'Ultimo overhaul', 'all')"></td>
                    <td><input v-model="row.assignedTboHours" class="cell-input numeric-input" :disabled="!isOwner" @input="updateTboDerived(row)" @change="saveRowFieldChange(row, 'Asignado TBO horas', 'tbo')"></td>
                    <td><input v-model="row.assignedTboYears" class="cell-input numeric-input" :disabled="!isOwner" @input="updateTboDerived(row)" @change="saveRowFieldChange(row, 'Asignado TBO años', 'tbo')"></td>
                    <td><input v-model="row.consumedTboHours" class="cell-input numeric-input" :disabled="!isOwner" @input="updateTboDerived(row)" @change="saveRowFieldChange(row, 'Consumido TBO horas', 'tbo')"></td>
                    <td><input v-model="row.consumedTboYears" class="cell-input numeric-input calculated-input" disabled readonly></td>
                    <td><input v-model="row.assignedTsnHours" class="cell-input numeric-input" :disabled="!isOwner" @input="updateTsnDerived(row)" @change="saveRowFieldChange(row, 'Asignado TSN horas', 'tsn')"></td>
                    <td><input v-model="row.assignedTsnYears" class="cell-input numeric-input" :disabled="!isOwner" @input="updateTsnDerived(row)" @change="saveRowFieldChange(row, 'Asignado TSN años', 'tsn')"></td>
                    <td><input v-model="row.consumedTsnHours" class="cell-input numeric-input" :disabled="!isOwner" @input="updateTsnDerived(row)" @change="saveRowFieldChange(row, 'Consumido TSN horas', 'tsn')"></td>
                    <td><input v-model="row.consumedTsnYears" class="cell-input numeric-input calculated-input" disabled readonly></td>
                    <td><input v-model="row.remainingTboHours" class="cell-input numeric-input calculated-input" disabled readonly></td>
                    <td><input v-model="row.remainingTboYears" class="cell-input numeric-input calculated-input" disabled readonly></td>
                    <td><input v-model="row.remainingTsnHours" class="cell-input numeric-input calculated-input" disabled readonly></td>
                    <td><input v-model="row.remainingTsnYears" class="cell-input numeric-input calculated-input" disabled readonly></td>
                    <td><textarea v-model="row.notes" class="cell-input notes-input" :disabled="!isOwner" maxlength="360" placeholder="Notas del componente" @change="saveRowFieldChange(row, 'Notas')"></textarea></td>
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

          <section v-if="activeView === 'alertas'" id="alertas" class="view">
            <div class="stats-row">
              <article class="mini">
                <p>Overhaul Requerido</p>
                <b style="color: var(--danger)">{{ metrics.critical }}</b>
              </article>
              <article class="mini">
                <p>Alertas Preventivas</p>
                <b style="color: var(--warn)">{{ metrics.alert }}</b>
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
                <p>Riesgo Global</p>
                <b :style="{ color: riskLabel.color }">{{ metrics.risk }}%</b>
              </article>
            </div>

            <article class="panel">
              <h2>Componentes en Alerta</h2>
              <p class="panel-sub">Elementos con vencimiento cercano o recursos consumidos</p>
              <ul class="events">
                <li v-for="alert in alertRows" :key="alert.key">
                  <span>{{ alert.component }}</span>
                  <span class="date" :class="alert.className">{{ alert.status }}</span>
                </li>
              </ul>
            </article>
          </section>

          <section v-if="activeView === 'calendario'" id="calendario" class="panel view">
            <h2>Calendario de Vencimientos</h2>
            <p class="panel-sub">Proximos controles por fecha</p>
            <ul class="events">
              <li v-for="event in dueEvents" :key="event.key">
                <span>{{ event.component }}</span>
                <span class="date" :class="event.className">{{ event.due }}</span>
              </li>
            </ul>
          </section>

          <section v-if="activeView === 'historial'" id="historial" class="panel table-panel view">
            <div class="table-title">
              <div>
                <h2>Historial</h2>
                <p class="panel-sub">Ultimos 20 cambios del sistema y registro de overhaul</p>
              </div>
            </div>
            <div class="change-log">
              <article v-for="change in recentChanges" :key="change.id" class="change-item">
                <div>
                  <strong>{{ change.action }}</strong>
                  <p>{{ change.detail }}</p>
                </div>
                <span>{{ formatChangeDate(change.timestamp) }}</span>
              </article>
              <p v-if="recentChanges.length === 0" class="empty-note">Aun no hay cambios registrados.</p>
            </div>
            <div class="history-section-title">Historial de Overhaul</div>
            <div class="table-wrap">
              <table class="history-table">
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Serie</th>
                    <th>Taller</th>
                    <th>Ultimo Overhaul</th>
                    <th>Vencimiento</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="entry in historyRows" :key="entry.key">
                    <td>{{ entry.component }}</td>
                    <td>{{ entry.series }}</td>
                    <td>{{ entry.workshop }}</td>
                    <td>{{ entry.overhaul }}</td>
                    <td>{{ entry.due }}</td>
                    <td><span class="status" :class="entry.statusClass">{{ entry.status }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </template>

        <footer>
          {{ new Date().getFullYear() }} Sistema de Gestion de Recursos Aeronauticos · {{ currentAircraft ? currentAircraft.code : "PNP-501" }} · Todos los derechos reservados
        </footer>
      </main>
    </div>

  </div>
</template>

<script>
import { hasStoredFleet } from "./syncRules.js";

const DB_STORAGE_KEY = "sr_aero_fleet_v1";
const DB_META_KEY = "sr_aero_fleet_meta_v1";
const FIRESTORE_COLLECTION = "dashboards";
const FIRESTORE_DOCUMENT = "main";
const MAX_CHANGE_LOG = 20;
const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);
const OWNER_EMAIL = "calidad@divmaaer.com";
const EDITOR_EMAILS = [
  OWNER_EMAIL,
  "marlonchca3@gmail.com",
  "gato0247@gmail.com",
  "tatianamhl250197@gmail.com"
];

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
    changes: [],
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

function calculateConsumedYears(overhaul) {
  const overhaulDate = parseEsDate(overhaul);
  if (!overhaulDate || overhaulDate > TODAY) {
    return "0";
  }

  const elapsedMs = TODAY.getTime() - overhaulDate.getTime();
  const years = elapsedMs / (365.25 * 86400000);
  return formatNumberValue(years);
}

function currentConsumedDate() {
  return formatEsDate(TODAY);
}

function normalizeRow(row) {
  const assignedTboHours = String(row.assignedTboHours ?? row.assigned ?? "");
  const assignedTboYears = String(row.assignedTboYears ?? "");
  const consumedTboHours = String(row.consumedTboHours ?? row.consumed ?? "");
  const consumedDate = currentConsumedDate();
  const assignedTsnHours = String(row.assignedTsnHours ?? "");
  const assignedTsnYears = String(row.assignedTsnYears ?? "");
  const consumedTsnHours = String(row.consumedTsnHours ?? "");
  const remainingTsnHours = formatNumberValue(parseNumeric(assignedTsnHours) - parseNumeric(consumedTsnHours));
  const remainingTsnYears = calculateDueDate(row.overhaul, assignedTsnYears) || String(row.remainingTsnYears || "");
  const remainingTboHours = formatNumberValue(parseNumeric(assignedTboHours) - parseNumeric(consumedTboHours));
  const due = calculateDueDate(row.overhaul, assignedTboYears) || String(row.due || "");
  const remainingTboYears = due;

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
    consumedTboYears: consumedDate,
    assignedTsnHours,
    assignedTsnYears,
    consumedTsnHours,
    consumedTsnYears: consumedDate,
    remainingTboHours,
    remainingTboYears,
    remainingTsnHours,
    remainingTsnYears,
    notes: String(row.notes || ""),
    due
  };
}

function normalizeChanges(changes) {
  if (!Array.isArray(changes)) {
    return [];
  }

  return changes
    .map((change, index) => ({
      id: String(change.id || `${change.timestamp || Date.now()}-${index}`),
      timestamp: Number(change.timestamp || 0),
      action: String(change.action || "Cambio registrado"),
      detail: String(change.detail || ""),
      aircraftCode: String(change.aircraftCode || ""),
      user: String(change.user || "")
    }))
    .filter((change) => change.timestamp > 0)
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, MAX_CHANGE_LOG);
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
    parsed.changes = normalizeChanges(parsed.changes);
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

function isEditorEmail(email) {
  return EDITOR_EMAILS.includes(String(email || "").toLowerCase());
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

export default {
  name: "App",

  data() {
    return {
      activeView: "dashboard",
      activeMenuLabel: "Dashboard",
      authBusy: false,
      authHint: "Usa Ingresar si ya tienes cuenta, o Crear cuenta si es tu primera vez.",
      authHintError: false,
      authReady: false,
      cloudErrorMessage: "",
      cloudStatus: "Local",
      cloudStatusError: false,
      currentUser: null,
      dbReady: false,
      fleet: loadFleet(),
      firestoreUnsubscribe: null,
      hasLoadedRemoteFleet: false,
      isOwner: false,
      isApplyingRemoteFleet: false,
      isSavingToFirestore: false,
      lastLocalWriteAt: 0,
      lastSyncAt: hasStoredFleet(localStorage) ? Number(readFleetMeta().updatedAt || 0) : 0,
      loginEmail: "",
      loginPassword: "",
      syncSource: "local",
      mobileMenuOpen: false,
      sidebarCollapsed: false,
      textSizeLarge: false,
      newAircraft: { code: "", name: "", notes: "" },
      editingAircraftId: "",
      editingAircraftDraft: { code: "", name: "", notes: "" },
      draggingAircraftId: "",
      draggingRowIndex: null,
      menuItems: [
        { label: "Dashboard", target: "dashboard", icon: "⌂" },
        { label: "Aeronaves", target: "aeronaves", icon: "✈" },
        { label: "Componentes", target: "componentes", icon: "⚙" },
        { label: "Base de datos", target: "base-datos", icon: "▦" },
        { label: "Alertas", target: "alertas", icon: "!" },
        { label: "Calendario", target: "calendario", icon: "◷" },
        { label: "Historial", target: "historial", icon: "≡" }
      ]
    };
  },

  computed: {
    activeUser() {
      return this.currentUser;
    },

    isAuthenticated() {
      return Boolean(this.currentUser && !this.currentUser.isAnonymous);
    },

    todayLabel() {
      return formatEsDate(TODAY);
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
    },

    alertRows() {
      const rows = this.currentRows
        .map((row, index) => {
          const status = this.getStatus(row);
          return {
            key: `${row.component}-${index}`,
            component: row.component || "Sin nombre",
            status,
            className: status === "CRITICO" ? "danger" : "warn"
          };
        })
        .filter((entry) => entry.status === "CRITICO" || entry.status === "ALERTA");

      return rows.length ? rows : [{ key: "empty", component: "Sin alertas activas", status: "OK", className: "ok" }];
    },

    recentChanges() {
      return normalizeChanges(this.fleet.changes);
    },

    historyRows() {
      return this.currentRows.map((row, index) => {
        const status = this.getStatus(row);
        return {
          key: `${row.component}-${row.series}-${index}`,
          component: row.component || "Sin nombre",
          series: row.series || "--",
          workshop: row.workshop || "--",
          overhaul: row.overhaul || "--",
          due: row.due || "--",
          status,
          statusClass: this.statusClass(row)
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
      this.lastLocalWriteAt = timestamp;
      this.lastSyncAt = timestamp;
      this.syncSource = "local";
      if (!this.isApplyingRemoteFleet) {
        return this.saveFleetToFirestore();
      }
      return true;
    },

    getRemoteUpdatedAt(data) {
      if (data && Number.isFinite(Number(data.updatedEpoch)) && Number(data.updatedEpoch) > 0) {
        return Number(data.updatedEpoch);
      }
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

    recordSystemChange(action, detail) {
      const timestamp = Date.now();
      const aircraftCode = this.currentAircraft ? this.currentAircraft.code : "";
      const user = this.currentUser && this.currentUser.email ? this.currentUser.email : "local";
      const changes = Array.isArray(this.fleet.changes) ? this.fleet.changes : [];
      this.fleet.changes = [
        {
          id: `${timestamp}-${Math.random().toString(36).slice(2, 8)}`,
          timestamp,
          action,
          detail,
          aircraftCode,
          user
        },
        ...changes
      ].slice(0, MAX_CHANGE_LOG);
    },

    formatChangeDate(timestamp) {
      if (!timestamp) {
        return "--";
      }

      return new Intl.DateTimeFormat("es-PE", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date(timestamp));
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
      const consumedDate = currentConsumedDate();
      const remainingHours = this.rowAssignedHours(row) - this.rowConsumedHours(row);
      const due = calculateDueDate(row.overhaul, row.assignedTboYears);
      row.consumedTboYears = consumedDate;
      row.consumedTsnYears = consumedDate;
      row.remainingTboHours = formatNumberValue(remainingHours);
      row.remainingTboYears = due || "";
      row.assigned = String(row.assignedTboHours ?? "");
      row.consumed = String(row.consumedTboHours ?? "");
      row.remaining = row.remainingTboHours;
      if (due) {
        row.due = due;
      }
    },

    updateTsnDerived(row) {
      const consumedDate = currentConsumedDate();
      const remainingHours = parseNumeric(row.assignedTsnHours) - parseNumeric(row.consumedTsnHours);
      row.consumedTsnYears = consumedDate;
      row.remainingTsnHours = formatNumberValue(remainingHours);
      row.remainingTsnYears = calculateDueDate(row.overhaul, row.assignedTsnYears) || "";
    },

    updateAllDerived(row) {
      this.updateTboDerived(row);
      this.updateTsnDerived(row);
    },

    async saveRowFieldChange(row, fieldLabel, derivedGroup = "") {
      if (derivedGroup === "tbo") {
        this.updateTboDerived(row);
      }
      if (derivedGroup === "tsn") {
        this.updateTsnDerived(row);
      }
      if (derivedGroup === "all") {
        this.updateAllDerived(row);
      }
      this.recordSystemChange("Componente actualizado", `${fieldLabel}: ${row.component || "Sin nombre"}`);
      await this.persistFleet();
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
        changes: normalizeChanges(value.changes),
        aircrafts: value.aircrafts.map((aircraft) => ({
          id: String(aircraft.id || ""),
          code: String(aircraft.code || ""),
          name: String(aircraft.name || ""),
          notes: String(aircraft.notes || ""),
          rows: Array.isArray(aircraft.rows) ? aircraft.rows.map(normalizeRow) : []
        })).filter((aircraft) => aircraft.id && aircraft.code)
      };
    },

    async loadFleetFromFirestore() {
      const ref = this.getFleetDocRef();
      if (!ref) {
        return;
      }

      try {
        const snapshot = await ref.get({ source: "server" });
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

        const remoteUpdatedAt = this.getRemoteUpdatedAt(data) || Date.now();
        this.hasLoadedRemoteFleet = true;
        this.isApplyingRemoteFleet = true;
        this.fleet = remoteFleet;
        localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(remoteFleet));
        writeFleetMeta(remoteUpdatedAt);
        this.lastSyncAt = remoteUpdatedAt;
        this.syncSource = "remote";
        this.$nextTick(() => {
          this.isApplyingRemoteFleet = false;
        });
        this.updateCloudStatus("Sincronizado");
      } catch (error) {
        const detail = this.getFirebaseErrorMessage(error);
        console.error("Firestore initial read error:", error);
        this.updateCloudStatus("Error lectura", true, detail);
        this.updateLoginHint(`No se pudo cargar la flota desde Firestore. ${detail}`, true);
      }
    },

    subscribeFleetFromFirestore() {
      const ref = this.getFleetDocRef();
      if (!ref) {
        return;
      }

      if (this.firestoreUnsubscribe) {
        this.firestoreUnsubscribe();
      }

      this.hasLoadedRemoteFleet = false;
      this.updateCloudStatus("Conectando");
      this.firestoreUnsubscribe = ref.onSnapshot(async (snapshot) => {
        if (snapshot.metadata.hasPendingWrites) {
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

        if (!this.hasLoadedRemoteFleet) {
          this.hasLoadedRemoteFleet = true;
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
          return;
        }

        if (remoteUpdatedAt <= localUpdatedAt || (this.lastLocalWriteAt && remoteUpdatedAt < this.lastLocalWriteAt)) {
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
      if (!this.dbReady) {
        this.updateCloudStatus("Sin Firebase", true);
        this.updateLoginHint("Firestore aun no esta listo.", true);
        return false;
      }
      if (!this.currentUser || this.currentUser.isAnonymous) {
        this.updateCloudStatus("Requiere login", true);
        this.updateLoginHint("Inicia sesion con el correo autorizado para guardar.", true);
        return false;
      }
      if (!this.isOwner && !force) {
        this.updateLoginHint("Tu cuenta tiene permisos de solo lectura.", true);
        return false;
      }
      if (this.isApplyingRemoteFleet) {
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
      this.activeMenuLabel = menuLabel || this.menuItems.find((item) => item.target === targetId)?.label || "Dashboard";
      this.setMobileMenuOpen(false);
      this.$nextTick(() => {
        const element = document.getElementById(targetId);
        if (element) {
          this.highlightAndScroll(element);
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
      this.editingAircraftDraft = { code: aircraft.code, name: aircraft.name, notes: aircraft.notes || "" };
    },

    cancelAircraftEdit() {
      this.editingAircraftId = "";
      this.editingAircraftDraft = { code: "", name: "", notes: "" };
    },

    async saveAircraftEdit(aircraftId) {
      if (!this.isOwner) {
        window.alert("Solo el propietario puede editar aeronaves.");
        return;
      }

      const aircraft = this.fleet.aircrafts.find((item) => item.id === aircraftId);
      const code = this.editingAircraftDraft.code.trim().toUpperCase();
      const name = this.editingAircraftDraft.name.trim();
      const notes = this.editingAircraftDraft.notes.trim();
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
      aircraft.notes = notes;
      this.cancelAircraftEdit();
      this.recordSystemChange("Aeronave actualizada", `${code} - ${name}`);
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
      this.recordSystemChange("Aeronaves reordenadas", `${draggedAircraft.code} movida en la lista`);
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
      const notes = this.newAircraft.notes.trim();
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
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      this.fleet.aircrafts.push({ id, code, name, notes, rows: [] });
      this.fleet.selectedId = id;
      this.newAircraft.code = "";
      this.newAircraft.name = "";
      this.newAircraft.notes = "";
      this.recordSystemChange("Aeronave creada", `${code} - ${name}`);
      const saved = await this.persistFleet();
      this.$nextTick(() => window.scrollTo(scrollX, scrollY));
      if (!saved) {
        window.alert("La aeronave se creo localmente, pero Firebase no la pudo sincronizar. Revisa reglas y login.");
      }
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

      this.recordSystemChange("Aeronave eliminada", `${aircraft.code} - ${aircraft.name}`);
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
        overhaul: formatEsDate(TODAY),
        assigned: "0",
        consumed: "0",
        remaining: "0",
        assignedTboHours: "0",
        assignedTboYears: "1",
        consumedTboHours: "0",
        consumedTboYears: currentConsumedDate(),
        assignedTsnHours: "0",
        assignedTsnYears: "1",
        consumedTsnHours: "0",
        consumedTsnYears: currentConsumedDate(),
        remainingTboHours: "0",
        remainingTboYears: "0",
        remainingTsnHours: "0",
        remainingTsnYears: calculateDueDate(formatEsDate(TODAY), "1"),
        notes: "",
        due: calculateDueDate(formatEsDate(TODAY), "1")
      }));
      this.recordSystemChange("Componente agregado", `${this.currentAircraft.code}: Nuevo componente`);
      await this.persistFleet();
    },

    startRowDrag(event, rowIndex) {
      if (!this.isOwner) {
        event.preventDefault();
        return;
      }
      this.draggingRowIndex = rowIndex;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", String(rowIndex));
    },

    async dropRow(targetIndex) {
      if (!this.isOwner || !this.currentAircraft || !Array.isArray(this.currentAircraft.rows)) {
        this.finishRowDrag();
        return;
      }

      if (this.draggingRowIndex === null) {
        return;
      }

      const draggedIndex = Number(this.draggingRowIndex);
      if (!Number.isInteger(draggedIndex) || draggedIndex < 0 || targetIndex < 0 || targetIndex >= this.currentAircraft.rows.length || draggedIndex === targetIndex) {
        this.finishRowDrag();
        return;
      }

      const rows = [...this.currentAircraft.rows];
      const [draggedRow] = rows.splice(draggedIndex, 1);
      rows.splice(targetIndex, 0, draggedRow);
      this.currentAircraft.rows = rows;
      this.finishRowDrag();
      this.recordSystemChange("Componentes reordenados", `${draggedRow.component || "Sin nombre"} movido en ${this.currentAircraft.code}`);
      const saved = await this.persistFleet();
      if (!saved) {
        window.alert("El orden se actualizo localmente, pero Firebase no pudo sincronizar el cambio.");
      }
    },

    finishRowDrag() {
      this.draggingRowIndex = null;
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
      this.recordSystemChange("Base de datos restaurada", `${this.currentAircraft.code}: datos restaurados`);
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
      this.recordSystemChange("Componente eliminado", `${this.currentAircraft.code}: ${componentName}`);
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

    getAuthErrorMessage(error) {
      const code = error && error.code ? error.code : "";
      if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
        return "Correo o contrasena incorrectos.";
      }
      if (code === "auth/too-many-requests") {
        return "Demasiados intentos. Espera un momento y vuelve a probar.";
      }
      if (code === "auth/operation-not-allowed") {
        return "Activa Email/Password en Firebase Authentication.";
      }
      if (code === "auth/weak-password") {
        return "La contrasena debe tener al menos 6 caracteres.";
      }
      if (code === "auth/email-already-in-use") {
        return "Ese correo ya existe. Usa Ingresar o restablece la contrasena.";
      }
      if (code === "auth/invalid-email") {
        return "Ingresa un correo valido.";
      }
      return "No se pudo iniciar sesion con correo.";
    },

    async createEmailUser() {
      if (!this.authReady) {
        this.updateLoginHint("Firebase Auth no esta disponible.", true);
        return false;
      }
      if (!this.loginEmail || !this.loginPassword) {
        this.updateLoginHint("Ingresa correo y contrasena para crear la cuenta.", true);
        return false;
      }

      try {
        this.authBusy = true;
        await window.firebase.auth().createUserWithEmailAndPassword(this.loginEmail, this.loginPassword);
        this.loginPassword = "";
        this.updateLoginHint("Cuenta creada e ingreso correcto.");
        return true;
      } catch (error) {
        console.error("Email sign-up error:", error);
        this.updateLoginHint(this.getAuthErrorMessage(error), true);
        return false;
      } finally {
        this.authBusy = false;
      }
    },

    async sendPasswordReset() {
      if (!this.authReady) {
        this.updateLoginHint("Firebase Auth no esta disponible.", true);
        return;
      }
      if (!this.loginEmail) {
        this.updateLoginHint("Escribe tu correo para enviar el restablecimiento.", true);
        return;
      }

      try {
        this.authBusy = true;
        await window.firebase.auth().sendPasswordResetEmail(this.loginEmail);
        this.updateLoginHint("Te enviamos un correo para restablecer la contrasena.");
      } catch (error) {
        console.error("Password reset error:", error);
        this.updateLoginHint(this.getAuthErrorMessage(error), true);
      } finally {
        this.authBusy = false;
      }
    },

    async signInWithEmail() {
      if (!this.authReady) {
        this.updateLoginHint("Firebase Auth no esta disponible.", true);
        return;
      }
      if (!this.loginEmail || !this.loginPassword) {
        this.updateLoginHint("Ingresa correo y contrasena.", true);
        return;
      }

      try {
        this.authBusy = true;
        await window.firebase.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPassword);
        this.loginPassword = "";
        this.updateLoginHint("Ingreso correcto con correo.");
      } catch (error) {
        console.error("Email sign-in error:", error);
        this.updateLoginHint(this.getAuthErrorMessage(error), true);
      } finally {
        this.authBusy = false;
      }
    },

    async signOut() {
      if (!this.authReady) {
        this.currentUser = null;
        this.isOwner = false;
        return;
      }

      await window.firebase.auth().signOut();
    },

    async initAuth() {
      if (!isFirebaseConfigReady()) {
        this.updateLoginHint("Configura Firebase Auth para iniciar sesion.", true);
        return;
      }

      try {
        await loadScript("https://www.gstatic.com/firebasejs/10.12.3/firebase-app-compat.js");
        await loadScript("https://www.gstatic.com/firebasejs/10.12.3/firebase-auth-compat.js");
        await loadScript("https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore-compat.js");
      } catch (error) {
        console.error("Firebase SDK load error:", error);
        this.updateLoginHint("Firebase Auth no esta disponible.", true);
        this.updateCloudStatus("Sin conexion", true, this.getFirebaseErrorMessage(error));
        return;
      }

      if (!window.firebase || !window.firebase.firestore) {
        this.updateLoginHint("Firebase Auth no esta disponible.", true);
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
        this.isOwner = false;

        if (!user || user.isAnonymous) {
          if (this.firestoreUnsubscribe) {
            this.firestoreUnsubscribe();
            this.firestoreUnsubscribe = null;
          }
          this.updateCloudStatus("Requiere login");
          this.updateLoginHint("Usa Ingresar si ya tienes cuenta, o Crear cuenta si es tu primera vez.");
          return;
        }

        const email = (user.email || "").toLowerCase();
        let role = "";
        try {
          const tokenResult = await user.getIdTokenResult();
          role = tokenResult.claims.role || "";
        } catch (error) {
          console.warn("No se pudieron leer los claims de Auth:", error);
        }
        this.isOwner = role === "editor" || isEditorEmail(email);

        if (user && !this.isOwner) {
          this.updateLoginHint("Ingreso autenticado en modo solo lectura.");
        }
        if (user && this.isOwner) {
          this.updateLoginHint("Ingreso autenticado en modo editor.");
        }

        await this.loadFleetFromFirestore();
        this.subscribeFleetFromFirestore();
      });
    }
  }
};
</script>
