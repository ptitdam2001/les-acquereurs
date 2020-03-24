import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { TableRow, TableCell, Box, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrash, faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { Address } from '../../../core/components'
import { IHouse } from '../../models/House'

type HousesListItemProps = {
  house: IHouse
}

export const HousesListItem: React.FC<HousesListItemProps> = (props: HousesListItemProps) => {
  const { house } = props
  const [isExpended, setIsExpended] = useState(false)

  const toggleExpend = () => {
    setIsExpended(!isExpended)
  }

  return (
    <>
      <TableRow key={house._id}>
        <TableCell component="th" scope="row">{house.type}
        </TableCell>
        <TableCell align="right">{house.roomNumber}</TableCell>
        <TableCell align="right">
          <Address address={house.address} />
        </TableCell>
        <TableCell align="right">{moment(house.createdAt).format('DD-MM-YYYY')}</TableCell>
        <TableCell align="right">{house.active ? 'active' : 'inactive'}</TableCell>
        <TableCell align="right">
          <Box display="flex" flexDirection="row" justifyContent="flex-end">
            <IconButton aria-label="view" onClick={toggleExpend}>
              <FontAwesomeIcon
                icon={isExpended ? faFolderOpen : faFolder}
                size="xs"
              />
            </IconButton>
            <IconButton
              aria-label="remove"
              onClick={() =>
                console.log('Implement remove func : ', house._id)
              }
            >
              <FontAwesomeIcon icon={faTrash} size="xs" />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>
      {isExpended ? (
        <TableRow key={`${house._id}-expended`}>
          <TableCell colSpan={5}>
            {JSON.stringify(house, null, 2)}
          </TableCell>
          <TableCell />
        </TableRow>
      ) : null}
    </>
  )
}
