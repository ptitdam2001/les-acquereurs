import { ICompany } from '../../../companies/features/companies.interface'
import { IRole } from '../roles'

export interface IUser {
  createdAt: string
  deleted?: boolean
  active?: boolean
  _id?: string
  firstname: string
  lastname: string
  email: string
  password: string
  company: ICompany
  job: string
  role: IRole
}

export interface UsersState {
  list: IUser[]
  total: number
  pages: number
  current?: IUser
}
