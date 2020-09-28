import { HTTPListResponseType } from '../../core/features/core'
import { IActionResult } from '../../core/models/IActionResult'
import { FETCH_ALL, FETCH_ONE, SET_ALL, SET_CURRENT, RESET_CURRENT, HousesActionTypes, REMOVE_ONE, ADD_OR_UPDATE, TOGGLE_IS_LOADING, SET_LAST_ACTION } from './houses.types'
import { IHouse } from './houses.interface'

export function fetchHouses(): HousesActionTypes {
  return { type: FETCH_ALL }
}

export function fetchHouse(id: string): HousesActionTypes {
  return {
    type: FETCH_ONE,
    houseId: id,
  }
}

export function setHouses(houses: HTTPListResponseType): HousesActionTypes {
  return { type: SET_ALL, houses }
}

export function setCurrent(house: IHouse): HousesActionTypes {
  return {
    type: SET_CURRENT,
    house,
  }
}

export function resetCurrent(): HousesActionTypes {
  return {
    type: RESET_CURRENT,
  }
}

export function removeOne(house: IHouse): HousesActionTypes {
  return {
    type: REMOVE_ONE,
    house,
  }
}

export function createOrUpdate(house: IHouse): HousesActionTypes {
  return {
    type: ADD_OR_UPDATE,
    house,
  }
}

export function toggleIsLoading(value: boolean): HousesActionTypes {
  return {
    type: TOGGLE_IS_LOADING,
    value,
  }
}

export function setLastAction(value: IActionResult): HousesActionTypes {
  return {
    type: SET_LAST_ACTION,
    value,
  }
}

export function resetLastAction(): HousesActionTypes {
  return {
    type: SET_LAST_ACTION,
    value: undefined,
  }
}
