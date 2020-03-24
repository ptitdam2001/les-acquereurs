import { IHouse } from './../models/House';

import API from '../../core/services/Api'
import { HTTPListResponseType } from '../../core/models/HTTPResponseType'
import { CoreService } from '../../core/services/Core';

export class HousesService implements CoreService<IHouse>{
  static uri = `houses`

  getAll():Promise<HTTPListResponseType> {
    return API.get(HousesService.uri, {}).then(({ data }) => data)
  }

  getOne(id: string): Promise<IHouse> {
    return API.get(`${HousesService.uri}/${id}`, {})
      .then((result: any) => result.data as IHouse)
  }
  createOrUpdateOne(house: IHouse): Promise<IHouse> {
    if (house._id) {
      return API.put(`${HousesService.uri}/${house._id}`, house)
        .then((result: any) => (result.data as IHouse))
    } else {
      return API.post(`${HousesService.uri}`, house)
        .then((result: any) => (result.data as IHouse))
    }
  }
  remove(house: IHouse) {
    return API.delete(`${HousesService.uri}/${house._id}`)
  }
}
