import { ICompany } from './../models/Company';
import API from '../../core/services/Api'
import { AxiosResponse } from 'axios';
import { HTTPListResponseType } from '../../core/models/HTTPResponseType';
import { CoreService } from '../../core/services/Core';

export class CompaniesService implements CoreService<ICompany>{
  static uri = `companies`

  getAll(): Promise<HTTPListResponseType> {
    return API.get(CompaniesService.uri, {}).then((result: AxiosResponse) => result.data)
  }

  getOne(idCompany: string): Promise<ICompany> {
    return API.get(`${CompaniesService.uri}/${idCompany}`, {})
      .then((result: any) => result.data as ICompany)
  }

  createOrUpdateOne(company: ICompany): Promise<ICompany> {
    if (company._id) {
      return API.put(`${CompaniesService.uri}/${company._id}`, company)
        .then((result: any) => (result.data as ICompany))
    } else {
      return API.post(`${CompaniesService.uri}`, company)
        .then((result: any) => (result.data as ICompany))
    }
  }

  remove(company: ICompany) {
    return API.delete(`${CompaniesService.uri}/${company._id}`)
  }
}
