export interface IRole {
  _id?: number
  forbidden: string[]
  createdAt?: string
  deleted?: boolean
  active: boolean
  name: string
  group: string
}
