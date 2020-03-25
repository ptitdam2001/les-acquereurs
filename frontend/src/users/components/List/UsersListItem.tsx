import React from 'react'
import { TableRow, TableCell, makeStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { IUser } from '../../models/User'

import styles from './UsersListItem.style'

const useStyles = makeStyles(styles)

type UsersListItemProps = {
  user: IUser
}

export const UsersListItem: React.FC<UsersListItemProps> = (props: UsersListItemProps) => {
  const { user } = props
  const classes = useStyles({ active: user.active })

  return (
    <TableRow>
      <TableCell component="th" scope="row" align="left">
        {user.firstname} {user.lastname}
      </TableCell>
      <TableCell align="left">{user.company ? user.company.name : ''}</TableCell>
      <TableCell align="left">{user.job}</TableCell>
      <TableCell align="left">{user.email}</TableCell>
      <TableCell align="left">{user.role.name}</TableCell>
      <TableCell align="right">
        <FontAwesomeIcon icon={user.active ? faCheckCircle : faTimesCircle} size="lg" className={classes.active} />
      </TableCell>
      <TableCell align="right" />
    </TableRow>
  )
}
