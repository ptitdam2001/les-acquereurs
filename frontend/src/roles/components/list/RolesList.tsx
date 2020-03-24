import React, { useEffect } from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
import { fetchRoles } from '../../redux/actions/roles'
import { RoleListItem } from './RoleListItem'
import styles from './RolesList.style'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../application/store'
import { IRole } from '../../models/Role'

const useStyle = makeStyles(styles)

export const RolesList = () => {
  const classes = useStyle()
  const dispatch = useDispatch()
  const roles = useSelector((state: RootState) => {
    const { roles } = state
    return roles.list
  })

  useEffect(() => {
    dispatch(fetchRoles())
  }, [])

  return (
    <Box p={1}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Group</TableCell>
            <TableCell align="center">Creation Date</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">Forbidden</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((row: IRole) => <RoleListItem role={row} key={row._id} />)}
        </TableBody>
      </Table>
    </Box>
  )
}
