import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Filter from './Filter'
class FilterList extends PureComponent {
  static propTypes = {
    filters: PropTypes.array.isRequired,
    curFilter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
  }
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { filters, changeFilter } = this.props
    return (
      <ul className="tabs">
        {filters.map((name) => {
          const active = this.props.curFilter === name
          return (<Filter key={name} filterName={name} active={active} onChangeFilter={changeFilter}/>)
        })}
      </ul>
    )
  }
}

export default FilterList
