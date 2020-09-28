import { HousesActionTypes } from './houses.types'
import * as houseTypes from './houses.types'
import { HousesState, IHouse } from './houses.interface'

const defaultState: HousesState = {
  list: [],
  total: 0,
  pages: 0,
  current: undefined,
  isLoading: false,
  lastAction: undefined,
}

export default (state = defaultState, action: HousesActionTypes): HousesState => {
  switch (action.type) {
    case houseTypes.SET_ALL: {
      const { docs, totalDocs, totalPages } = action.houses
      return {
        ...state,
        list: docs.map((role: any) => role as IHouse),
        total: totalDocs,
        pages: totalPages,
      }
    }

    case houseTypes.SET_CURRENT: {
      const newData = { current: action.house }
      return { ...state, ...newData }
    }

    case houseTypes.RESET_CURRENT:
      return {
        ...state,
        current: undefined,
      }

    case houseTypes.TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.value,
      }

    case houseTypes.SET_LAST_ACTION:
      return {
        ...state,
        lastAction: action.value,
      }

    default:
      return state
  }
}
