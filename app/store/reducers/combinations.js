export default function combinationsReducer(combinationsState, action) {
  switch(action.type) {

    case 'FETCH_COMBINATIONS': {
      return [...action.payload]
    }

    default: {
      return combinationsState
    }
  }
}