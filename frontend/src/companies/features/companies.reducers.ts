import { CompaniesActionTypes } from './companies.types'
import * as companyTypes from './companies.constant'
import { CompaniesState, ICompany } from './companies.interface'

const defaultState: CompaniesState = {
  list: [],
  total: 0,
  pages: 0,
  current: undefined,
}

export default (state = defaultState, action: CompaniesActionTypes): CompaniesState => {
  switch (action.type) {
    case companyTypes.SET_ALL: {
      const { docs, totalDocs, totalPages } = action.companies
      return {
        ...state,
        list: docs.map((company: any) => company as ICompany),
        total: totalDocs,
        pages: totalPages,
      }
    }

    case companyTypes.SET_CURRENT: {
      const newData = { current: action.company }
      return { ...state, ...newData }
    }
    case companyTypes.RESET_CURRENT:
      return { ...state, current: undefined }

    default:
      return state
  }
}
