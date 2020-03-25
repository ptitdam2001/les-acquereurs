import React from 'react'
import { TableRow, TableCell, Box, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { useRouteMatch, Link } from 'react-router-dom'
import { IRole } from '../../models/Role'

import styles from './RoleListItem.style'
import { fetchRoles, removeOne } from '../../redux/actions/roles'

const useStyles = makeStyles(styles)

type RoleListItemProps = {
  role: IRole
}

export const RoleListItem: React.FC<RoleListItemProps> = (props: RoleListItemProps) => {
  const { role } = props
  const { _id, name, group, createdAt, active, forbidden } = role
  const classes = useStyles({ active })
  const dispatch = useDispatch()
  const match = useRouteMatch()

  const remove = (entity: IRole) => {
    return async () => {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-restricted-globals
      const confirmation = confirm(`Do you really want to remove it? ${entity.name}`)
      if (confirmation) {
        await dispatch(removeOne(entity))
        dispatch(fetchRoles())
      }
    }
  }

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{group}</TableCell>
      <TableCell align="right">{moment(createdAt).format('DD-MM-YYYY')}</TableCell>
      <TableCell align="right">
        <FontAwesomeIcon icon={active ? faCheckCircle : faTimesCircle} size="lg" className={classes.active} />
      </TableCell>
      <TableCell align="right">{forbidden ? forbidden.join(', ') : null}</TableCell>
      <TableCell align="right">
        <Box display="flex" flexDirection="row" justifyContent="flex-end">
          <IconButton aria-label="edit" component={Link} to={`${match.url}/${_id}/edit`}>
            <FontAwesomeIcon icon={faEdit} size="xs" />
          </IconButton>
          <IconButton aria-label="remove" onClick={remove(role)}>
            <FontAwesomeIcon icon={faTrash} size="xs" />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  )
}
