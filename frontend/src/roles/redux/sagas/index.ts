import { put, takeLatest, takeEvery, call, all } from 'redux-saga/effects'

import * as roleTypes from '../types/roles'
import { RolesService } from '../../services/Roles'
import { setRoles, setCurrent, resetCurrent } from '../actions/roles'

const service = new RolesService()

function* fetchRoles() {
  const roles = yield call(service.getAll)
  yield put(setRoles(roles))
}

function* fetchOneRole(action: any) {
  try {
    const role = yield call(service.getOne, action.roleId)
    yield put(setCurrent(role))
  } catch (error) {
    yield put(resetCurrent())
  }
}

function* createOrUpdate(action: any) {
  yield call(service.createOrUpdateOne, action.role)
  yield fetchRoles()
}

function* actionWatcher() {
  yield takeLatest(roleTypes.FETCH_ALL, fetchRoles)
  yield takeEvery(roleTypes.FETCH_ONE, fetchOneRole)
  yield takeEvery(roleTypes.ADD_OR_UPDATE, createOrUpdate)
}

export default function* roleSaga() {
  yield all([actionWatcher()])
}
