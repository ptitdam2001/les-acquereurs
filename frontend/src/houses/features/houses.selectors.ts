import { RootState } from '../../application/store'
import { HousesState } from './houses.interface'

export const getHouseState = (state: RootState): HousesState => state.houses

export const getCurrentHouse = (state: RootState) => getHouseState(state).current

export const isLoading = (state: RootState) => getHouseState(state).isLoading

export const getLastAction = (state: RootState) => getHouseState(state).lastAction
