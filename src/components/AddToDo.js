import React, {Component} from 'react'
import PropTypes from 'prop-types'
class AddToDo extends Component {
  static propTypes = {
    addTodo: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.todoName = React.createRef()
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(e) {
    e.preventDefault()
    let text = this.todoName.current.value
    this.todoName.current.value = ''
    this.props.addTodo(text)
  }
  render() {
    return (
      <form onSubmit={this.handleAddTodo} className="add-todo">
        <input type="text" placeholder="Enter ToDo" ref={this.todoName}/>
      </form>
    )
  }
}

export default AddToDo
