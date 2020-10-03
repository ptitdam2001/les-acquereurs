import { put, takeLatest, takeEvery, call, all } from 'redux-saga/effects'

import * as userTypes from './users.types'
import { UserService } from './users.service'
import { setUsers, setCurrent, resetCurrent } from './users.actions'

const service = new UserService()

function* fetchUsers() {
  const users = yield call(service.getAll)
  yield put(setUsers(users))
}

function* fetchOneuser(action: any) {
  try {
    const user = yield call(service.getOne, action.userId)
    yield put(setCurrent(user))
  } catch (error) {
    yield put(resetCurrent())
  }
}

function* createOrUpdate(action: any) {
  yield call(service.createOrUpdateOne, action.user)
  yield fetchUsers()
}

function* removeOne(action: any) {
  yield call(service.remove, action.user)
  yield fetchUsers()
}

function* actionWatcher() {
  yield takeLatest(userTypes.FETCH_ALL, fetchUsers)
  yield takeEvery(userTypes.FETCH_ONE, fetchOneuser)
  yield takeEvery(userTypes.ADD_OR_UPDATE, createOrUpdate)
  yield takeLatest(userTypes.REMOVE_ONE, removeOne)
}

export default function* userSaga() {
  yield all([actionWatcher()])
}
