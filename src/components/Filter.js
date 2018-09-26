import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

class Filter extends PureComponent {
  static propTypes = {
    filterName: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onChangeFilter: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(curFiler) {
    this.props.onChangeFilter(curFiler)
  }

  render() {
    const className = cn('tab', {'active': this.props.active})
    return (
      <li className={className} onClick={this.handleChange.bind(null, this.props.filterName)}>
        {this.props.filterName}
      </li>
    )
  }
}

export default Filter
