import * as type from '../constants/type.js'

export const changeFilter = (filter) => ({
  type: type.CHANGE_FILTER,
  filter
})
