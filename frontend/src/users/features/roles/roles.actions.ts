import { HTTPListResponseType } from '../../../core/features/core'
import { IRole } from './roles.interface'
import { FETCH_ALL, FETCH_ONE, SET_ALL, SET_CURRENT, RESET_CURRENT, RolesActionTypes, REMOVE_ONE, ADD_OR_UPDATE } from './roles.types'

export function fetchRoles(): RolesActionTypes {
  return { type: FETCH_ALL }
}

export function fetchRole(id: string): RolesActionTypes {
  return {
    type: FETCH_ONE,
    roleId: id,
  }
}

export function setRoles(roles: HTTPListResponseType): RolesActionTypes {
  return { type: SET_ALL, roles }
}

export function setCurrent(role: IRole): RolesActionTypes {
  return {
    type: SET_CURRENT,
    role,
  }
}

export function resetCurrent(): RolesActionTypes {
  return {
    type: RESET_CURRENT,
  }
}

export function removeOne(role: IRole): RolesActionTypes {
  return {
    type: REMOVE_ONE,
    role,
  }
}

export function createOrUpdate(role: IRole): RolesActionTypes {
  return {
    type: ADD_OR_UPDATE,
    role,
  }
}
