import { IUser } from './users.interface'
import API from '../../../core/services/Api'
import { CoreService, HTTPListResponseType } from '../../../core/features/core'

export class UserService implements CoreService<IUser> {
  static uri = `users`

  getAll(): Promise<HTTPListResponseType> {
    return API.get(UserService.uri, {}).then(({ data }) => data)
  }

  getOne(id: string): Promise<IUser> {
    return API.get(`${UserService.uri}/${id}`, {}).then((result: any) => result.data as IUser)
  }

  createOrUpdateOne(user: IUser): Promise<IUser> {
    if (user._id) {
      return API.put(`${UserService.uri}/${user._id}`, user).then((result: any) => result.data as IUser)
    }
    return API.post(`${UserService.uri}`, user).then((result: any) => result.data as IUser)
  }

  remove(user: IUser) {
    return API.delete(`${UserService.uri}/${user._id}`)
  }
}
