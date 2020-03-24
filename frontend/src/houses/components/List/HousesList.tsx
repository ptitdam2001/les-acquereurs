import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from '@material-ui/core'

import { fetchHouses } from '../../redux/actions/houses'
import { HousesListItem } from './HousesListItem'
import styles from './HousesList.style'
import { RootState } from '../../../application/store'
import { IHouse } from '../../models/House'

const useStyles = makeStyles(styles)

export const HousesList: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const houses = useSelector((state: RootState) => {
    const { houses } = state
    return houses.list
  })

  useEffect(() => {
    dispatch(fetchHouses())
  }, [])

  return (
    <Table className={classes.table} size="small">
      <TableHead>
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell>Nb of rooms</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Creation Date</TableCell>
          <TableCell align="right">Active</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {
          houses.map((row: IHouse) => <HousesListItem house={row} key={row._id} />)
        }
      </TableBody>
    </Table>
  )
}
