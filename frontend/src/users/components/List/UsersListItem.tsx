import React from 'react'
import { TableRow, TableCell, makeStyles, Box, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { IUser } from '../../models/User'

import styles from './UsersListItem.style'
import { fetchUsers, removeOne } from '../../redux/actions/users'

const useStyles = makeStyles(styles)

type UsersListItemProps = {
  user: IUser
}

export const UsersListItem: React.FC<UsersListItemProps> = (props: UsersListItemProps) => {
  const { user } = props
  const classes = useStyles({ active: user.active })
  const dispatch = useDispatch()
  const match = useRouteMatch()

  const remove = (entity: IUser) => {
    return async () => {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-restricted-globals
      const confirmation = confirm(`Do you really want to remove it? ${entity.firstname} ${entity.lastname}`)
      if (confirmation) {
        await dispatch(removeOne(entity))
        dispatch(fetchUsers())
      }
    }
  }

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
      <TableCell align="right">
        <Box display="flex" flexDirection="row" justifyContent="flex-end">
          <IconButton aria-label="edit" component={Link} to={`${match.url}/${user._id}/edit`}>
            <FontAwesomeIcon icon={faEdit} size="xs" />
          </IconButton>
          <IconButton aria-label="remove" onClick={remove(user)}>
            <FontAwesomeIcon icon={faTrash} size="xs" />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  )
}
