import * as type from '../constants/type.js'
import { FILTERS } from '../constants/filter.js'

export const filter = (state = FILTERS.ALL, action) => {
  switch (action.type) {
    case type.CHANGE_FILTER :
      return action.filter
    default :
      return state
  }
}
