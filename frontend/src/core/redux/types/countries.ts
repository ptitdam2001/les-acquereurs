import { ICountry } from '../../models/Country'

export const GET_ALL = 'COUNTRIES_GET_ALL'
export const SET_ALL = 'COUNTRIES_SET_COUNTRIES'
export const GET_ONE = 'COUNTRIES_GET_ONE'

interface SetCountriesAction {
  type: typeof SET_ALL
  countries: ICountry[]
}

interface FetchCountriesAction {
  type: typeof GET_ALL
}

export type CountriesActionTypes = SetCountriesAction | FetchCountriesAction
