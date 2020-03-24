import { IHouse } from '../../models/House';
import {
	FETCH_ALL,
	FETCH_ONE,
	SET_ALL,
	SET_CURRENT,
	RESET_CURRENT,
	HousesActionTypes,
	REMOVE_ONE,
	ADD_OR_UPDATE
} from '../types/houses'
import { HTTPListResponseType } from '../../../core/models/HTTPResponseType';



export function fetchHouses(): HousesActionTypes {
	return { type: FETCH_ALL }
}

export function fetchHouse(id: string): HousesActionTypes {
	return {
		type: FETCH_ONE,
		houseId: id
	}
}

export function setHouses(houses: HTTPListResponseType): HousesActionTypes {
	return { type: SET_ALL, houses }
}

export function setCurrent(house: IHouse): HousesActionTypes {
	return {
		type: SET_CURRENT,
		house
	}
}

export function resetCurrent(): HousesActionTypes {
	return {
		type: RESET_CURRENT
	}
}

export function removeOne(house: IHouse): HousesActionTypes {
	return {
		type: REMOVE_ONE,
		house
	}
}

export function createOrUpdate(house: IHouse): HousesActionTypes {
  return {
    type: ADD_OR_UPDATE,
    house
  }
}