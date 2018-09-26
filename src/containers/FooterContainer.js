import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { deleteAllTodo } from '../actions/todo'

export default connect(null, {deleteAllTodo})(Footer)
