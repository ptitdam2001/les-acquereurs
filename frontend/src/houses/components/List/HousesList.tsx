import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core'

import { useTranslation } from 'react-i18next'
import { HousesListItem } from './HousesListItem'
import styles from './HousesList.style'
import { RootState } from '../../../application/store'
import { fetchHouses, IHouse } from '../../features'

const useStyles = makeStyles(styles)

export const HousesList: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const dispatch = useDispatch()
  const houseList = useSelector((state: RootState) => {
    const { houses } = state
    return houses.list
  })

  useEffect(() => {
    dispatch(fetchHouses())
  }, [dispatch])

  return (
    <Table className={classes.table} size="small">
      <TableHead>
        <TableRow>
          <TableCell>{t('house:list.type')}</TableCell>
          <TableCell>{t('house:list.title')}</TableCell>
          <TableCell>{t('house:list.roomNumber')}</TableCell>
          <TableCell>{t('house:list.address')}</TableCell>
          <TableCell>{t('house:list.creation')}</TableCell>
          <TableCell align="right">{t('house:list.active')}</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {houseList.map((row: IHouse) => (
          <HousesListItem house={row} key={row._id} />
        ))}
      </TableBody>
    </Table>
  )
}
