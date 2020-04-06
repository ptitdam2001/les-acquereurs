import { IHouse } from '../../models/House'

export interface HousesState {
  list: IHouse[]
  total: number
  pages: number
  current?: IHouse
}
