import * as type from '../constants/type.js'

export const addTodo = (text) => ({
  type: type.ADD_TODO,
  text
})

export const deleteTodo = (id) => ({
  type: type.DELETE_TODO,
  id
})

export const toggleTodo = (id) => ({
  type: type.TOGGLE_TODO,
  id
})
