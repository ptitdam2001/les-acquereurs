import { IUser } from '../../models/User'

export interface UsersState {
  list: IUser[]
  total: number
  pages: number
  current?: IUser
}
