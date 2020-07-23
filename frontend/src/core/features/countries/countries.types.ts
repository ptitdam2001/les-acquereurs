import { SET_ALL, GET_ALL } from './countries.constant'
import { ICountry } from './countries.interface'

interface SetCountriesAction {
  type: typeof SET_ALL
  countries: ICountry[]
}

interface FetchCountriesAction {
  type: typeof GET_ALL
}

export type CountriesActionTypes = SetCountriesAction | FetchCountriesAction
