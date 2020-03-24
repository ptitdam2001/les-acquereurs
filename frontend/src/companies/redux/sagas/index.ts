import { put, takeLatest, takeEvery, call, all } from 'redux-saga/effects'

import * as companyTypes from '../types/companies'
import { CompaniesService } from '../../services/Companies'
import { setCompanies, setCurrent, resetCurrent } from '../actions/companies'

const service = new CompaniesService()

function* fetchCompanies() {
  const companies = yield call(service.getAll)
  yield put(setCompanies(companies))
}

function* fetchOneCompany(action:any) {
  try {
    const company = yield call(service.getOne, action.companyId)
    yield put(setCurrent(company))
  }
  catch(error) {
    yield put(resetCurrent())
  }
}

function* createOrUpdate(action: any) {
  yield call(service.createOrUpdateOne, action.company)
  yield fetchCompanies()
}

function* actionWatcher() {
  yield takeLatest(companyTypes.FETCH_ALL, fetchCompanies)
}

function* actionOneWatcher() {
  yield takeEvery(companyTypes.FETCH_ONE, fetchOneCompany)
  yield takeEvery(companyTypes.ADD_OR_UPDATE, createOrUpdate)
}

export default function* companieSaga() {
  yield all([actionWatcher(), actionOneWatcher()])
}
