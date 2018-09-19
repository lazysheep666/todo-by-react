import React, {Component} from 'react'
import AddTodo from './AddToDo.js'
import Filter from './filter.js'
import TodoList from './TodoList.js'
import Footer from './Footer.js'
class ToDoApp extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      filter: 'All'
    }
    this.addTodo = this.addTodo.bind(this)
    this.toggleTodoStatus = this.toggleTodoStatus.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.deleteAll = this.deleteAll.bind(this)
    this.changeFilter = this.changeFilter.bind(this)
  }
  componentDidMount() {
    this.setState({
      todos: [
        {name: 'Todo 1', isCompleted: true},
        {name: 'Todo 2', isCompleted: false}
      ]
    })
  }
  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  toggleTodoStatus(index) {
    this.setState(preState => ({
      todos: preState.todos.map((todo, i) => {
        if (i === index) {
          return {...todo, isCompleted: !todo.isCompleted}
        }
        return todo
      })
    }))
  }

  deleteTodo(index) {
    this.setState({
      todos: this.state.todos.filter((todo, i) => !(i === index))
    })
  }

  deleteAll() {
    this.setState({
      todos: []
    })
  }

  changeFilter(newFilter) {
    this.setState({
      filter: newFilter
    })
  }

  render() {
    return (
      <div id="container">
        <h1 id="app-title">
          ToDo APP
        </h1>
        <AddTodo onAddTodo={this.addTodo}/>
        <Filter curFilter={this.state.filter} onChangeFilter={this.changeFilter}/>
        <TodoList curFilter={this.state.filter}
          todos={this.state.todos}
          onToggleTodo={this.toggleTodoStatus}
          onDeleteTodo={this.deleteTodo}/>
        <Footer onDeleteAll={this.deleteAll}/>
      </div>
    )
  }
}

export default ToDoApp
