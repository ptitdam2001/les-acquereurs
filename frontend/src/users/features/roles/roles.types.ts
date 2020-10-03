import { HTTPListResponseType } from '../../../core/features/core'
import { IRole } from './roles.interface'

export const FETCH_ALL = 'ROLES_FETCH_ALL'
export const FETCH_ONE = 'ROLES_FETCH_ONE'

export const SET_ALL = 'ROLES_SET_ALL'
export const SET_CURRENT = `ROLES_SET_ONE`

export const RESET_CURRENT = 'ROLES_RESET_CURRENT'

export const REMOVE_ONE = 'ROLES_REMOVE_ONE'
export const ADD_OR_UPDATE = 'ROLES_ADD_OR_UPDATE'

interface FetchRolesAction {
  type: typeof FETCH_ALL
}

interface FetchRoleAction {
  type: typeof FETCH_ONE
  roleId: string
}

interface SetRolesAction {
  type: typeof SET_ALL
  roles: HTTPListResponseType
}

interface SetRoleAction {
  type: typeof SET_CURRENT
  role: IRole
}

interface ResetCurrentAction {
  type: typeof RESET_CURRENT
}

interface RemoveOneAction {
  type: typeof REMOVE_ONE
  role: IRole
}

interface CreateOrUpdateAction {
  type: typeof ADD_OR_UPDATE
  role: IRole
}

export type RolesActionTypes = FetchRolesAction | FetchRoleAction | SetRolesAction | SetRoleAction | ResetCurrentAction | RemoveOneAction | CreateOrUpdateAction
