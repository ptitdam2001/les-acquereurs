import { AxiosResponse } from 'axios'
import { CoreService, HTTPListResponseType } from '../../core/features/core'
import API from '../../core/services/Api'
import { IRole } from '../models/Role'

export class RolesService implements CoreService<IRole> {
  static uri = `roles`

  getAll(): Promise<HTTPListResponseType> {
    return API.get(RolesService.uri, {}).then((result: AxiosResponse) => result.data)
  }

  getOne(idRole: string): Promise<IRole> {
    return API.get(`${RolesService.uri}/${idRole}`, {}).then((result: any) => result.data as IRole)
  }

  createOrUpdateOne(role: IRole): Promise<IRole> {
    if (role._id) {
      return API.put(`${RolesService.uri}/${role._id}`, role).then((result: any) => result.data as IRole)
    }
    return API.post(`${RolesService.uri}`, role).then((result: any) => result.data as IRole)
  }

  remove(role: IRole) {
    return API.delete(`${RolesService.uri}/${role._id}`)
  }
}
