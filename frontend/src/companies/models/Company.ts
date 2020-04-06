import { IAddress, ICoordinates } from '../../core/models/Address'

export interface ICompany {
  _id?: string
  name: string
  shortname: string
  address: IAddress
  active: boolean
  createdAt: number
  loc?: ICoordinates
  deleted?: boolean
}

export interface DBCompanies {
  docs: ICompany[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage?: number
  nextPage?: number
}

export default {
  name: '',
  shortname: '',
  address: {
    way1: '',
    way2: '',
    way3: '',
    postalCode: '',
    city: '',
    country: '',
  },
  active: true,
}

export class Company {
  private entity: ICompany

  constructor(company: ICompany) {
    this.entity = company
  }

  public get() {
    return this.entity
  }
}
