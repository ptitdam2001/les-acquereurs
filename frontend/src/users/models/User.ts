import { IRole } from '../../roles/models/Role'
import { ICompany } from '../../companies/models/Company'

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
