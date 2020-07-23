import { CountriesActionTypes } from './countries.types'
import { SET_ALL, GET_ALL } from './countries.constant'
import { ICountry } from './countries.interface'

export function setCountries(countries: ICountry[]): CountriesActionTypes {
  return { type: SET_ALL, countries }
}

export function fetchCountries(): CountriesActionTypes {
  return { type: GET_ALL }
}
