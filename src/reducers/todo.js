import * as type from '../constants/type.js'

export const todos = (state = [], action) => {
  switch (action.type) {
    case type.ADD_TODO :
      return [...state, { text: action.text, isCompleted: false }]
    case type.DELETE_TODO :
      return [...state.slice(0, action.id), ...state.slice(action.id + 1)]
    case type.DELETE_ALL_TODO :
      return []
    case type.TOGGLE_TODO :
      return state.map((todo, index) => (
        index === action.id ? {...todo, isCompleted: !todo.isCompleted} : todo
      ))
    default:
      return state
  }
}
