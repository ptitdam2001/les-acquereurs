import { HTTPListResponseType } from '../../core/features/core/HTTPResponse.type'
import { SET_ALL, FETCH_ONE, FETCH_ALL, SET_CURRENT, REMOVE_ONE, RESET_CURRENT, ADD_OR_UPDATE } from './companies.constant'

import { ICompany } from './companies.interface'

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
