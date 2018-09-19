import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

class Filter extends PureComponent {
  static propTypes = {
    curFilter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.handleChangeFilter = this.handleChangeFilter.bind(this)
  }

  filters = ['All', 'Completed', 'Pending']
  handleChangeFilter(newFilter) {
    this.props.onChangeFilter(newFilter)
  }
  render() {
    return (
      <ul className="tabs">
        {this.filters.map((name) => {
          const className = cn('tab', {'active': name === this.props.curFilter})
          return (
            <li className={className} key={name} onClick={this.handleChangeFilter.bind(null, name)}>{name}</li>
          )
        })}
      </ul>
    )
  }
}

export default Filter
