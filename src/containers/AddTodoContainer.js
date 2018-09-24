import { connect } from 'react-redux'
import { addTodo } from '../actions/todo'
import addTodoComponent from '../components/addTodo'

export default connect(null, { addTodo })(addTodoComponent)
