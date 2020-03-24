import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import companyReducers from '../companies/reducer'
import houseReducer from '../houses/reducer'
import coreReducers from '../core/reducer'
import roleReducers from '../roles/reducer'
import userReducers from '../users/reducer'

import companySaga from '../companies/redux/sagas'
import coreSaga from '../core/redux/sagas'
import houseSaga from '../houses/redux/sagas'
import roleSaga from '../roles/redux/sagas'
import userSaga from '../users/redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  companies: companyReducers,
  houses: houseReducer,
  roles: roleReducers,
  users: userReducers,
  ...coreReducers,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, sagaMiddleware), devToolsEnhancer({}))
)
;[coreSaga, companySaga, houseSaga, roleSaga, userSaga].map(saga =>
  sagaMiddleware.run(saga)
)
