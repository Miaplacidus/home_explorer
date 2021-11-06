import { addToArray } from "./utils"

export default function savedLotsReducer(lotsState, action) {
  switch(action.type) {
    case 'SAVE_LOT': {
      return addToArray(lotsState, action.payload)
    }

    default: {
      return lotsState
    }
  }
}