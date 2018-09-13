import React, {Component} from 'react'
import AddTodo from './AddToDo.js'
import TodoList from './TodoList.js'
// import Footer from './Footer.js'
class ToDoApp extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      filter: 'all'
    }
    this.addTodo = this.addTodo.bind(this)
    this.completeTodo = this.completeTodo.bind(this)
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

  completeTodo(index) {
    let newTodos = this.state.todos
    newTodos[index].isCompleted = true
    this.setState({
      todos: newTodos
    })
  }

  deleteTodo(index) {
    this.setState({
      todos: this.state.todos.filter((todo, i) => !(i === index))
    })
  }
  render() {
    return (
      <div id="container">
        <h1>
          ToDo APP
        </h1>
        <AddTodo onAddTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} onCompleteTodo={this.completeTodo} onDeleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default ToDoApp
