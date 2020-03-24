import { put, takeLatest, call, all } from 'redux-saga/effects'

import * as CountriesTypes from '../types/countries'
import { CountryService } from '../../services/Countries'
import { setCountries } from '../actions/countries'

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
