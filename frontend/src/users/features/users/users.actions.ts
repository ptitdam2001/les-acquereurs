import { FETCH_ALL, FETCH_ONE, SET_ALL, SET_CURRENT, RESET_CURRENT, UsersActionTypes, REMOVE_ONE, ADD_OR_UPDATE } from './users.types'

import { HTTPListResponseType } from '../../../core/features/core'
import { IUser } from './users.interface'

export function fetchUsers(): UsersActionTypes {
  return { type: FETCH_ALL }
}

export function fetchUser(id: string): UsersActionTypes {
  return {
    type: FETCH_ONE,
    userId: id,
  }
}

export function setUsers(users: HTTPListResponseType): UsersActionTypes {
  return { type: SET_ALL, users }
}

export function setCurrent(user: IUser): UsersActionTypes {
  return {
    type: SET_CURRENT,
    user,
  }
}

export function resetCurrent(): UsersActionTypes {
  return {
    type: RESET_CURRENT,
  }
}

export function removeOne(user: IUser): UsersActionTypes {
  return {
    type: REMOVE_ONE,
    user,
  }
}

export function createOrUpdate(user: IUser): UsersActionTypes {
  return {
    type: ADD_OR_UPDATE,
    user,
  }
}
