import ADD_ELEMENT from "./actions.js"

export const todoState = function(state=[], action) {
  switch (action.type) {
    case ADD_ELEMENT:
      return state.push(action.value)
  }
}