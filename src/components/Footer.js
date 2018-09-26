import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Footer extends Component {
  static propTypes = {
    deleteAllTodo: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
  }

  shouldComponentUpdate() {
    return false
  }

  handleDeleteAll() {
    this.props.deleteAllTodo()
  }
  render() {
    return (
      <div className="footer">
        <button onClick={this.handleDeleteAll}>
            Delete all
        </button>
      </div>
    )
  }
}

export default Footer
