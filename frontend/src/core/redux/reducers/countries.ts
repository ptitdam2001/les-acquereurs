import { CountriesActionTypes } from './../types/countries';
import { SET_ALL } from '../types/countries'
import { CountriesState } from '../system/countries';

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
