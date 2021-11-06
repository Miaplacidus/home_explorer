import { addToArray } from "./utils"

export default function savedHomePlansReducer(homePlansState, action) {
  switch(action.type) {
    case 'SAVE_HOME_PLAN': {
      return addToArray(homePlansState, action.payload)
    }

    default: {
      return homePlansState
    }
  }
}