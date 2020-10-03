import * as reducer from './roles.reducers'
import * as saga from './roles.saga'

export const rolesReducer = reducer
export const rolesSaga = saga

export * from './roles.interface'
export * from './roles.actions'
export * from './roles.types'
export * from './roles.service'
