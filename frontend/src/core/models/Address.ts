export interface IAddress {
  way1: string
  way2?: string
  way3?: string
  postalCode: string
  city: string
  country: string
}

export interface ICoordinates {
  lon: number
  lat: number
}

export class Address {
  private entity: IAddress

  constructor(defaultAddress?: IAddress) {
    const voidEntity = {
      way1: '',
      way2: '',
      way3: '',
      postalCode: '',
      city: '',
      country: '',
    }
    this.entity = defaultAddress || voidEntity
  }

  public get() {
    return this.entity
  }
}
