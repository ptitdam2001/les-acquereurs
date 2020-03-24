import { IHouse } from './../../models/House';
import { HousesState } from './../system/houses';
import { HousesActionTypes } from './../types/houses';
import * as houseTypes from '../types/houses'

const defaultState: HousesState = {
  list: [],
  total: 0,
  pages: 0,
  current: undefined,
}

export default (state = defaultState, action: HousesActionTypes): HousesState => {
  switch (action.type) {
    case houseTypes.SET_ALL: {
      const { docs, totalDocs, totalPages } = action.houses
      return {
        ...state,
        list: docs.map((role: any) => (role as IHouse)),
        total: totalDocs,
        pages: totalPages,
      }
    }

    case houseTypes.SET_CURRENT:
      const newData = { current: action.house }
      return { ...state, ...newData }

    case houseTypes.RESET_CURRENT:
      return {
        ...state,
        current: undefined,
      }

    default:
      return state
  }
}
