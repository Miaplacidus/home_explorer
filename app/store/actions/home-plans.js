function fetchHomePlans(payload) {
  return { type: "FETCH_HOME_PLANS", payload }
};

function saveHomePlan(payload) {
  return { type: "SAVE_HOME_PLAN", payload }
}

export { fetchHomePlans, saveHomePlan }