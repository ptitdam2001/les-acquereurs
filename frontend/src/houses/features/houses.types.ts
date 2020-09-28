import { HTTPListResponseType } from '../../core/features/core'
import { IActionResult } from '../../core/models/IActionResult'
import { IHouse } from './houses.interface'

export const FETCH_ONE = 'HOUSES_FETCH_ONE'
export const FETCH_ALL = 'HOUSES_FETCH_ALL'

export const SET_ALL = 'HOUSES_SET_ALL'
export const SET_CURRENT = 'HOUSES_SET_CURRENT'

export const RESET_CURRENT = 'HOUSES_RESET_CURRENT'

export const ADD_OR_UPDATE = 'HOUSES_ADD_OR_UPDATE'
export const REMOVE_ONE = 'HOUSES_REMOVE'

export const TOGGLE_IS_LOADING = 'HOUSES_TOGGLE_IS_LOADING'

export const SET_LAST_ACTION = 'HOUSES_SET_LAST_ACTION'

interface FetchHousesAction {
  type: typeof FETCH_ALL
}

interface FetchHouseAction {
  type: typeof FETCH_ONE
  houseId: string
}

interface SetHousesAction {
  type: typeof SET_ALL
  houses: HTTPListResponseType
}

interface SetHouseAction {
  type: typeof SET_CURRENT
  house: IHouse
}

interface ResetCurrentAction {
  type: typeof RESET_CURRENT
}

interface RemoveOneAction {
  type: typeof REMOVE_ONE
  house: IHouse
}

interface CreateOrUpdateAction {
  type: typeof ADD_OR_UPDATE
  house: IHouse
}

interface ToggleIsLoading {
  type: typeof TOGGLE_IS_LOADING
  value: boolean
}

interface SetLastAction {
  type: typeof SET_LAST_ACTION
  value: IActionResult | undefined
}

export type HousesActionTypes = FetchHousesAction | FetchHouseAction | SetHousesAction | SetHouseAction | ResetCurrentAction | RemoveOneAction | CreateOrUpdateAction | ToggleIsLoading | SetLastAction
