import { HTTPListResponseType } from '../../../core/models/HTTPResponseType'
import { IUser } from '../../models/User'

export const FETCH_ONE = 'USERS_FETCH_ONE'
export const FETCH_ALL = 'USERS_FETCH_ALL'

export const SET_ALL = 'USERS_SET_ALL'
export const SET_CURRENT = 'USERS_SET_CURRENT'

export const RESET_CURRENT = 'USERS_RESET_CURRENT'

export const ADD_OR_UPDATE = 'USERS_ADD_OR_UPDATE'
export const REMOVE_ONE = 'USERS_REMOVE'

interface FetchUsersAction {
  type: typeof FETCH_ALL
}

interface FetchUserAction {
  type: typeof FETCH_ONE
  userId: string
}

interface SetUsersAction {
  type: typeof SET_ALL
  users: HTTPListResponseType
}

interface SetUserAction {
  type: typeof SET_CURRENT
  user: IUser
}

interface ResetCurrentAction {
  type: typeof RESET_CURRENT
}

interface RemoveOneAction {
  type: typeof REMOVE_ONE
  user: IUser
}

interface CreateOrUpdateAction {
  type: typeof ADD_OR_UPDATE
  user: IUser
}

export type UsersActionTypes = FetchUsersAction | FetchUserAction | SetUsersAction | SetUserAction | ResetCurrentAction | RemoveOneAction | CreateOrUpdateAction
