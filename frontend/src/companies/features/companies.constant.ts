export const FETCH_ALL = 'COMPANIES_FETCH_ALL'
export const SET_ALL = 'COMPANIES_SET_ALL'

export const FETCH_ONE = 'COMPANIES_FETCH_ONE'
export const SET_CURRENT = 'COMPANIES_SET_CURRENT'
export const RESET_CURRENT = 'COMPANIES_RESET_CURRENT'
export const REMOVE_ONE = 'COMPANIES_REMOVE_ONE'

export const ADD_OR_UPDATE = 'COMPANIES_ADD_OR_UPDATE'

export const defaultCompany = {
  name: '',
  shortname: '',
  address: {
    way1: '',
    way2: '',
    way3: '',
    postalCode: '',
    city: '',
    country: '',
  },
  active: true,
}
