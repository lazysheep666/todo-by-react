import React, {Component} from 'react'
import PropTypes from 'prop-types'
class AddToDo extends Component {
  static propTypes = {
    onAddTodo: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.toDoName = React.createRef()
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(e) {
    e.preventDefault()
    let todo = {
      name: this.toDoName.current.value,
      isCompleted: false
    }
    this.toDoName.current.value = ''
    this.props.onAddTodo(todo)
  }
  render() {
    return (
      <form onSubmit={this.handleAddTodo} className="add-todo">
        <input type="text" placeholder="Enter ToDo" ref={this.toDoName}/>
      </form>
    )
  }
}

export default AddToDo
