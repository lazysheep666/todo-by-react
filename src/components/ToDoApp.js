import React, {Component} from 'react'
import AddTodo from './AddToDo.js'
import TodoList from './TodoList.js'
import Footer from './Footer.js'
class ToDoApp extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      filter: 'all'
    }
    this.addTodo = this.addTodo.bind(this)
    this.toggleTodoStatus = this.toggleTodoStatus.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
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
  render() {
    return (
      <div id="container">
        <h1 id="app-title">
          ToDo APP
        </h1>
        <AddTodo onAddTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} onToggleTodo={this.toggleTodoStatus} onDeleteTodo={this.deleteTodo}/>
        <Footer/>
      </div>
    )
  }
}

export default ToDoApp
