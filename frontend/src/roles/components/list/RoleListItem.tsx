import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'
import moment from 'moment'
import { IRole } from '../../models/Role'

type RoleListItemProps = {
	role: IRole
}

export const RoleListItem: React.FC<RoleListItemProps> = (props: RoleListItemProps) => {
  const { name, group, createdAt, active, forbidden } = props.role
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{group}</TableCell>
      <TableCell align="right">
        {moment(createdAt).format('DD-MM-YYYY')}
      </TableCell>
      <TableCell align="right">{active ? 'active' : 'inactive'}</TableCell>
      <TableCell align="right">
        {forbidden ? forbidden.join(', ') : null}
      </TableCell>
      <TableCell align="right" />
    </TableRow>
  )
}