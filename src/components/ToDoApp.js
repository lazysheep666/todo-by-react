import React, {Component} from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import Filter from './filter.js'
// import TodoList from './TodoList.js'
// import Footer from './Footer.js'
class ToDoApp extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      filter: 'All'
    }

    // this.deleteAll = this.deleteAll.bind(this)
    // this.changeFilter = this.changeFilter.bind(this)
  }
  componentDidMount() {

  }

  // deleteAll() {
  //   this.setState({
  //     todos: []
  //   })
  // }

  // changeFilter(newFilter) {
  //   this.setState({
  //     filter: newFilter
  //   })
  // }

  render() {
    return (
      <div id="container">
        <h1 id="app-title">
          ToDo APP
        </h1>
        <AddTodoContainer/>
        <Filter curFilter={this.state.filter} onChangeFilter={this.changeFilter}/>
        <TodoListContainer/>
        {/* <AddTodo onAddTodo={this.addTodo}/>
        <Filter curFilter={this.state.filter} onChangeFilter={this.changeFilter}/>
        <TodoList curFilter={this.state.filter}
          todos={this.state.todos}
          onToggleTodo={this.toggleTodoStatus}
          onDeleteTodo={this.deleteTodo}/>
        <Footer onDeleteAll={this.deleteAll}/> */}
      </div>
    )
  }
}

export default ToDoApp
