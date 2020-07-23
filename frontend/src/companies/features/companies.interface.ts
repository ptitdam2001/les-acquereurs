import { IAddress, ICoordinates } from '../../core/models/Address'

export interface ICompany {
  _id?: string
  name: string
  shortname: string
  address: IAddress
  active: boolean
  createdAt: number
  loc?: ICoordinates
  deleted?: boolean
}

export interface DBCompanies {
  docs: ICompany[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage?: number
  nextPage?: number
}
export interface CompaniesState {
  list: ICompany[]
  total: number
  pages: number
  current?: ICompany
}
