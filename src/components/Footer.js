import React, {Component} from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="footer">
        <div className="fliter">
          <div>All</div>
          <div>Completed</div>
          <div>Active</div>
        </div>
        <div>
          <button>
            Delete all
          </button>
        </div>
      </div>
    )
  }
}

export default Footer
