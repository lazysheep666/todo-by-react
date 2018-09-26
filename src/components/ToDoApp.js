import React, {Component} from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import FilterListContainer from '../containers/FilterListContainer'
import FooterContainer from '../containers/FooterContainer'
import {FILTERS} from '../constants/filter'

const FILTERS_ARRAY = []

for (let prop in FILTERS) {
  FILTERS_ARRAY.push(FILTERS[prop])
}

class ToDoApp extends Component {
  render() {
    return (
      <div id="container">
        <h1 id="app-title">
          ToDo APP
        </h1>
        <AddTodoContainer/>
        <FilterListContainer filters={FILTERS_ARRAY}/>
        <TodoListContainer/>
        <FooterContainer/>
      </div>
    )
  }
}

export default ToDoApp
