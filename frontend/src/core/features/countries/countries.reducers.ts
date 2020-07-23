import { CountriesActionTypes } from './countries.types'
import { SET_ALL } from './countries.constant'
import { CountriesState } from './countries.interface'

const defaultState: CountriesState = {
  countries: [],
}

export default (state = defaultState, action: CountriesActionTypes): CountriesState => {
  switch (action.type) {
    case SET_ALL:
      return {
        ...state,
        countries: action.countries,
      }
    default:
      return state
  }
}
