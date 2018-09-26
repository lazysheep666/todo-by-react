import { connect } from 'react-redux'
import FilterList from '../components/FilterList'
import { changeFilter } from '../actions/filter'

const mapStateToProps = (state) => ({
  curFilter: state.filter
})

export default connect(mapStateToProps, {changeFilter})(FilterList)
