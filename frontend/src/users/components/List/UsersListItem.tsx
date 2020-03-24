import React from 'react'
import { IUser } from '../../models/User'
import { TableRow, TableCell } from '@material-ui/core'

type UsersListItemProps = {
	user: IUser
}

export const UsersListItem: React.FC<UsersListItemProps> = (props: UsersListItemProps) => {
  const { user } = props

  return (
    <TableRow>
      <TableCell component="th" scope="row" align="left">{user.firstname} {user.lastname}</TableCell>
      <TableCell align="left">{user.company ? user.company.name : ''}</TableCell>
      <TableCell align="left">{user.job}</TableCell>
      <TableCell align="left">{user.email}</TableCell>
      <TableCell align="left">{user.role.name}</TableCell>
      <TableCell align="right">{user.active ? 'active' : 'inactive'}</TableCell>
      <TableCell align="right" />
    </TableRow>
  )
}
