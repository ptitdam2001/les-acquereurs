import { put, takeLatest, call, all } from 'redux-saga/effects'

import * as CountriesTypes from './countries.constant'
import { CountryService } from './countries.service'
import { setCountries } from './countries.actions'

function* fetchCountries() {
  const countries = yield call(CountryService.getAll)
  yield put(setCountries(countries))
}

function* actionWatcher() {
  yield takeLatest(CountriesTypes.GET_ALL, fetchCountries)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}
