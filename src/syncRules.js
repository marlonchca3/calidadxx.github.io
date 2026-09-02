export function hasStoredFleet(storage = globalThis.localStorage) {
  try {
    const raw = storage && storage.getItem ? storage.getItem("sr_aero_fleet_v1") : null;
    if (!raw) {
      return false;
    }

    const parsed = JSON.parse(raw);
    return Boolean(parsed && Array.isArray(parsed.aircrafts) && parsed.aircrafts.length > 0);
  } catch {
    return false;
  }
}

export function getLocalFleetUpdatedAt(storage = globalThis.localStorage) {
  try {
    const raw = storage && storage.getItem ? storage.getItem("sr_aero_fleet_meta_v1") : null;
    if (!raw) {
      return 0;
    }

    const parsed = JSON.parse(raw);
    const updatedAt = Number(parsed && parsed.updatedAt ? parsed.updatedAt : 0);
    return Number.isFinite(updatedAt) ? updatedAt : 0;
  } catch {
    return 0;
  }
}

export function shouldApplyRemoteFleet({ hasLocalData, localUpdatedAt, remoteUpdatedAt, isOwner = false }) {
  const remoteMs = Number(remoteUpdatedAt || 0);
  if (!remoteMs) {
    return false;
  }

  if (!hasLocalData) {
    return true;
  }

  const localMs = Number(localUpdatedAt || 0);
  if (!localMs) {
    return true;
  }

  if (isOwner) {
    return false;
  }

  return remoteMs > localMs;
}
