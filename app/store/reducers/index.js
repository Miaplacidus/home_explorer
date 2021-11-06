import homePlansReducer from "./home-plans";
import lotsReducer from "./lots";
import savedLotsReducer from "./saved-lots";
import savedHomePlansReducer from "./saved-home-plans";
import combinationsReducer from "./combinations";

const initialState = {
  homePlans: [],
  lots: [],
  combinations: [],
  savedHomePlans: [],
  savedLots: []
};

function rootReducer(state = initialState, action) { 
  return {
    homePlans: homePlansReducer(state.homePlans, action),
    lots: lotsReducer(state.lots, action),
    combinations: combinationsReducer(state.combinations, action),
    savedHomePlans: savedHomePlansReducer(state.savedHomePlans, action),
    savedLots: savedLotsReducer(state.savedLots, action)
  }
}

export default rootReducer;