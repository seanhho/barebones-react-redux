export const ADD_ELEMENT = "ADD_ELEMENT"

export const addElement = function(value) {
  return {
    type: ADD_ELEMENT,
    value: value
  }
}