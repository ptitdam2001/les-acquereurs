import { put, takeLatest, takeEvery, call, all } from 'redux-saga/effects'

import * as userTypes from '../types/users'
import { UserService } from '../../services/User'
import { setUsers, setCurrent, resetCurrent } from '../actions/users'

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

function* actionWatcher() {
  yield takeLatest(userTypes.FETCH_ALL, fetchUsers)
  yield takeEvery(userTypes.FETCH_ONE, fetchOneuser)
  yield takeEvery(userTypes.ADD_OR_UPDATE, createOrUpdate)
}

export default function* userSaga() {
  yield all([actionWatcher()])
}
