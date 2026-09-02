import test from 'node:test';
import assert from 'node:assert/strict';

import { shouldApplyRemoteFleet, getLocalFleetUpdatedAt, hasStoredFleet } from '../src/syncRules.js';

test('aplica la flota remota cuando el equipo es nuevo y no tiene datos locales guardados', () => {
  const storage = { getItem: () => null };

  assert.equal(hasStoredFleet(storage), false);
  assert.equal(getLocalFleetUpdatedAt(storage, {}), 0);
  assert.equal(
    shouldApplyRemoteFleet({
      hasLocalData: false,
      localUpdatedAt: 0,
      remoteUpdatedAt: 1700000000000,
      isOwner: false
    }),
    true
  );
});

test('no reemplaza los datos remotos si el equipo local ya guardó una versión más reciente', () => {
  assert.equal(
    shouldApplyRemoteFleet({
      hasLocalData: true,
      localUpdatedAt: 1700000005000,
      remoteUpdatedAt: 1700000000000,
      isOwner: false
    }),
    false
  );
});
