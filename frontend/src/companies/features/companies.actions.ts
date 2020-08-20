import { CompaniesActionTypes } from './companies.types'

// import API from '../../../core/services/Api'
import * as ActionTypes from './companies.constant'
import { HTTPListResponseType } from '../../core/models/HTTPResponseType'
import { ICompany } from './companies.interface'

export function fetchCompanies(): CompaniesActionTypes {
  return { type: ActionTypes.FETCH_ALL }
}

export function setCompanies(companies: HTTPListResponseType): CompaniesActionTypes {
  return {
    type: ActionTypes.SET_ALL,
    companies,
  }
}

export function fetchCompany(id: string): CompaniesActionTypes {
  return { type: ActionTypes.FETCH_ONE, companyId: id }
}

export function setCurrent(company: ICompany): CompaniesActionTypes {
  return {
    type: ActionTypes.SET_CURRENT,
    company,
  }
}

export function resetCurrent(): CompaniesActionTypes {
  return {
    type: ActionTypes.RESET_CURRENT,
  }
}

export function removeOne(company: ICompany): CompaniesActionTypes {
  return {
    type: ActionTypes.REMOVE_ONE,
    company,
  }
}

export function createOrUpdate(company: ICompany): CompaniesActionTypes {
  return {
    type: ActionTypes.ADD_OR_UPDATE,
    company,
  }
}
