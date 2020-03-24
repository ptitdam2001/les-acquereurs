import { ICompany } from '../../models/Company'
import { HTTPListResponseType } from '../../../core/models/HTTPResponseType'

export const FETCH_ALL = 'COMPANIES_FETCH_ALL'
export const SET_ALL = 'COMPANIES_SET_ALL'

export const FETCH_ONE = 'COMPANIES_FETCH_ONE'
export const SET_CURRENT = 'COMPANIES_SET_CURRENT'
export const RESET_CURRENT = 'COMPANIES_RESET_CURRENT'
export const REMOVE_ONE = 'COMPANIES_REMOVE_ONE'

export const ADD_OR_UPDATE = 'COMPANIES_ADD_OR_UPDATE'

interface FetchCompaniesAction {
  type: typeof FETCH_ALL
}

interface SetCompaniesAction {
  type: typeof SET_ALL
  companies: HTTPListResponseType
}

interface FetchCompanyAction {
  type: typeof FETCH_ONE
  companyId: string
}

interface SetCurrentAction {
  type: typeof SET_CURRENT
  company: ICompany
}

interface ResetCurrentAction {
  type: typeof RESET_CURRENT
}

interface RemoveOneAction {
  type: typeof REMOVE_ONE
  company: ICompany
}

interface CreateOrUpdateAction {
  type: typeof ADD_OR_UPDATE
  company: ICompany
}

export type CompaniesActionTypes = FetchCompaniesAction | SetCompaniesAction | SetCurrentAction | FetchCompanyAction | ResetCurrentAction | RemoveOneAction | CreateOrUpdateAction
