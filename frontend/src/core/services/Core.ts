import { HTTPListResponseType } from '../models/HTTPResponseType'

export interface CoreService<T> {
  getAll(): Promise<HTTPListResponseType>

  getOne(id: string): Promise<T>

  createOrUpdateOne(entity: T): Promise<T>

  remove(roentityle: T): Promise<any>
}
