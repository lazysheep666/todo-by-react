import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions/todo'
import { FILTERS } from '../constants/filter'
import TodoList from '../components/TodoList'

const filterTodo = (todos, filter) => {
  return todos.filter((todo) => {
    if (filter === FILTERS.ALL) {
      return true
    } else if (filter === FILTERS.COMPLETED) {
      return todo.isCompleted
    } else if (filter === FILTERS.ACTIVE) {
      return !todo.isCompleted
    } else {
      throw new Error('Unknown filter: ' + filter)
    }
  })
}

const mapStateToProps = ({todos, filter}) => ({
  todos: filterTodo(todos, filter)
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
