import * as reducer from './houses.reducers'
import * as saga from './houses.saga'
import * as selectors from './houses.selectors'

export const houseReducer = reducer
export const houseSelectors = selectors
export const houseSaga = saga

export * from './houses.interface'
export * from './houses.actions'
export * from './houses.types'
export * from './houses.service'
