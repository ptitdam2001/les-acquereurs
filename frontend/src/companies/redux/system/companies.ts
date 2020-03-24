import { ICompany } from '../../models/Company'

export interface CompaniesState {
  list: ICompany[]
  total: number
  pages: number
  current?: ICompany
}
