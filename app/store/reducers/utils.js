function addToArray(array, item) {
  if (array.includes(item)) {
    return array.filter((i) => i !== item)
  } else {
    return [...array, item]
  }
}

function updateObject(oldObject, newVals) {
  return Object.assign({}, oldObject, newVals)
}

export { addToArray, updateObject }