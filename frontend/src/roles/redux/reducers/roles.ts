import { IRole } from './../../models/Role';
import { RolesState } from './../system/roles';
import { RolesActionTypes } from './../types/roles';
import * as roleTypes from '../types/roles'

const defaultState: RolesState = {
  list: [],
  total: 0,
  pages: 0,
  current: undefined,
}

export default (state = defaultState, action: RolesActionTypes): RolesState => {
  switch (action.type) {
    case roleTypes.SET_ALL: {
      const { docs, totalDocs, totalPages } = action.roles
      return {
        ...state,
        list: docs.map((role: any) => (role as IRole)),
        total: totalDocs,
        pages: totalPages,
      }
    }

    case roleTypes.SET_CURRENT:
      const newData = { current: action.role }
      return { ...state, ...newData }

    case roleTypes.RESET_CURRENT:
      return {
        ...state,
        current: undefined,
      }

    default:
      return state
  }
}
