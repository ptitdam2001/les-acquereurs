import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { companyReducer } from '../companies'
import { houseReducer } from '../houses'
import coreReducers from '../core/reducer'
import { userReducer, roleReducer } from '../users'

import companySaga from '../companies/features/companies.saga'
import coreSaga from '../core/features/countries/countries.saga'
import houseSaga from '../houses/features/houses.saga'
import roleSaga from '../users/features/roles/roles.saga'
import userSaga from '../users/features/users/users.saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  companies: companyReducer,
  houses: houseReducer,
  roles: roleReducer,
  users: userReducer,
  ...coreReducers,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, compose(applyMiddleware(thunk, sagaMiddleware), devToolsEnhancer({})))
;[coreSaga, companySaga, houseSaga, roleSaga, userSaga].map((saga) => sagaMiddleware.run(saga))
