export default function lotsReducer(lotsState, action) {
  switch(action.type) {
    case 'FETCH_LOTS': {
      return [...action.payload]
    }

    default: {
      return lotsState
    }
  }
}