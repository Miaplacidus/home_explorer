function fetchLots(payload) {
  return { type: "FETCH_LOTS", payload }
};

function saveLot(payload) {
  return { type: "SAVE_LOT", payload }
}

export { fetchLots, saveLot }