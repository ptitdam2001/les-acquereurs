import { CompaniesState } from '../system/companies'
import { CompaniesActionTypes } from '../types/companies'
import { ICompany } from '../../models/Company'
import * as companyTypes from '../types/companies'

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
