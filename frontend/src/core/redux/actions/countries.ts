import { CountriesActionTypes } from './../types/countries';
import { ICountry } from './../../models/Country'
import { SET_ALL, GET_ALL } from '../types/countries'

export function setCountries(countries: ICountry[]): CountriesActionTypes {
	return { type: SET_ALL, countries }
}

export function fetchCountries(): CountriesActionTypes {
	return { type: GET_ALL };
}