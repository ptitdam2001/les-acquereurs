import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
import { UsersListItem } from './UsersListItem'

import styles from './UserList.style'
import { RootState } from '../../../../application/store'
import { fetchUsers, IUser } from '../../../features/users'

const useStyles = makeStyles(styles)

export const UsersList: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const userList = useSelector((state: RootState) => {
    const { users } = state
    return users.list
  })

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <Table className={classes.table} size="small">
      <TableHead>
        <TableRow>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Company</TableCell>
          <TableCell align="left">Job</TableCell>
          <TableCell align="left">Email</TableCell>
          <TableCell align="left">Role</TableCell>
          <TableCell align="center">Active</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {userList.map((user: IUser) => (
          <UsersListItem user={user} key={user._id} />
        ))}
      </TableBody>
    </Table>
  )
}
