import { addToArray } from "./utils"

export default function homePlansReducer(homePlansState, action) {
  switch(action.type) {

    case 'FETCH_HOME_PLANS': {
      return [...action.payload]
    }

    default: {
      return homePlansState
    }
  }
}