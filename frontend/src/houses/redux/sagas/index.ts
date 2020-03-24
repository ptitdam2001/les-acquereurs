import { put, takeLatest, takeEvery, call, all } from 'redux-saga/effects'

import * as houseTypes from '../types/houses'
import { HousesService } from '../../services/houses'
import { setHouses, setCurrent, resetCurrent } from '../actions/houses'

const service = new HousesService()

function* fetchHouses() {
  const houses = yield call(service.getAll)
  yield put(setHouses(houses))
}

function* fetchOneHouse(action: any) {
  try {
    const house = yield call(service.getOne, action.houseId)
    yield put(setCurrent(house))
  }
  catch(error) {
    yield put(resetCurrent())
  }
}

function* createOrUpdate(action: any) {
  yield call(service.createOrUpdateOne, action.house)
  yield fetchHouses()
}

function* actionWatcher() {
  yield takeLatest(houseTypes.FETCH_ALL, fetchHouses)
  yield takeEvery(houseTypes.FETCH_ONE, fetchOneHouse)
  yield takeEvery(houseTypes.ADD_OR_UPDATE, createOrUpdate)
}

export default function* houseSaga() {
  yield all([actionWatcher()])
}
