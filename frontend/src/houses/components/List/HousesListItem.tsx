import React, { useState } from 'react'
import moment from 'moment'
import { TableRow, TableCell, Box, IconButton, makeStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrash, faFolder, faFolderOpen, faCheckCircle, faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link, useRouteMatch } from 'react-router-dom'

import { Address } from '../../../core/components'
import styles from './HousesListItem.style'
import { IHouse } from '../../features'

const useStyle = makeStyles(styles)

type HousesListItemProps = {
  house: IHouse
}

export const HousesListItem: React.FC<HousesListItemProps> = (props: HousesListItemProps) => {
  const { house } = props
  const match = useRouteMatch()
  const classes = useStyle({ active: house.active })
  const [isExpended, setIsExpended] = useState(false)

  const toggleExpend = () => {
    setIsExpended(!isExpended)
  }

  const remove = () => {
    console.log('Implement remove func : ', house._id)
  }

  return (
    <>
      <TableRow key={house._id}>
        <TableCell align="right">{house.type}</TableCell>
        <TableCell align="right">{house.title}</TableCell>
        <TableCell align="right">{house.roomNumber}</TableCell>
        <TableCell align="right">
          <Address address={house.address} />
        </TableCell>
        <TableCell align="right">{moment(house.createdAt).format('DD-MM-YYYY')}</TableCell>
        <TableCell align="right">
          <FontAwesomeIcon icon={house.active ? faCheckCircle : faTimesCircle} size="lg" className={classes.active} />
        </TableCell>
        <TableCell align="right">
          <Box display="flex" flexDirection="row" justifyContent="flex-end">
            <IconButton aria-label="view" onClick={toggleExpend}>
              <FontAwesomeIcon icon={isExpended ? faFolderOpen : faFolder} size="xs" />
            </IconButton>
            <IconButton aria-label="edit" component={Link} to={`${match.url}/${house._id}/edit`}>
              <FontAwesomeIcon icon={faEdit} size="xs" />
            </IconButton>
            <IconButton aria-label="remove" onClick={remove}>
              <FontAwesomeIcon icon={faTrash} size="xs" />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
      {isExpended ? (
        <TableRow key={`${house._id}-expended`}>
          <TableCell colSpan={5}>{JSON.stringify(house, null, 2)}</TableCell>
          <TableCell />
        </TableRow>
      ) : null}
    </>
  )
}
