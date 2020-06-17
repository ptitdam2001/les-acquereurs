import { RootState } from './../../../application/store';

export const getCurrentHouse = (state: RootState) => {
	const { current } = state.houses
	return current
}

export const isLoading = (state: RootState) => {
	const { isLoading } = state.houses
	return isLoading
}

export const getLastAction = (state: RootState) => {
	const { lastAction } = state.houses
	return lastAction
}
