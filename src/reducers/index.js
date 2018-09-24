import { combineReducers } from 'redux'
import { todos } from './todo.js'
import { filter } from './filter.js'

export default combineReducers({
  todos,
  filter
})
