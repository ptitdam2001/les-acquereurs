import { IUser, UsersState } from './users.interface'
import * as userTypes from './users.types'

const defaultState: UsersState = {
  list: [],
  total: 0,
  pages: 0,
  current: undefined,
}

export default (state = defaultState, action: userTypes.UsersActionTypes): UsersState => {
  switch (action.type) {
    case userTypes.SET_ALL: {
      const { docs, totalDocs, totalPages } = action.users
      return {
        ...state,
        list: docs.map((role: any) => role as IUser),
        total: totalDocs,
        pages: totalPages,
      }
    }

    case userTypes.SET_CURRENT: {
      const newData = { current: action.user }
      return { ...state, ...newData }
    }

    case userTypes.RESET_CURRENT:
      return {
        ...state,
        current: undefined,
      }

    default:
      return state
  }
}
