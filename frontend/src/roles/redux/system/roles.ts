import { IRole } from '../../models/Role';

export interface RolesState {
	list: IRole[]
  total: number
  pages: number
	current?: IRole
}
