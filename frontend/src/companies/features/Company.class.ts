import { ICompany } from './companies.interface'

export class Company {
  private entity: ICompany

  constructor(company: ICompany) {
    this.entity = company
  }

  public get() {
    return this.entity
  }
}
