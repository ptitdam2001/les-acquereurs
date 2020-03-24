import { RootState } from './../../../application/store';
import { ICompany } from './../../models/Company';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import { fetchCompanies, removeOne } from '../../redux/actions/companies'

import styles from './CompaniesList.style'
import { useRouteMatch, Link } from 'react-router-dom';
import { IAddress } from '../../../core/models/Address';
import { Address } from '../../../core/components';

const useStyles = makeStyles(styles)

export const CompaniesList: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const match = useRouteMatch()
  const companies: ICompany[] = useSelector((state: RootState) => {
    const { list } = state.companies
    return list
  })

  const refreshList = () => dispatch(fetchCompanies())

  const remove = (company: ICompany) => {
    return async () => {
      // eslint-disable-next-line no-restricted-globals
      const confirmation = confirm(`Do you really want to remove it? ${company.name}`)
      if (confirmation) {
        await dispatch(removeOne(company))
        refreshList()
      }
    }
  }

  useEffect(() => {
    refreshList()
  }, [])

  return (
    <Table className={classes.table} size="small">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Creation Date</TableCell>
          <TableCell align="right">Active</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {companies.map((row: ICompany) => {
            const {
              active,
              address = {} as IAddress,
              createdAt,
              name,
              shortname,
              _id,
            } = row

            return (
              <TableRow key={_id}>
                <TableCell component="th" scope="row">
                  {name} ({shortname})
                </TableCell>
                <TableCell align="right">
                  <Address address={address} />
                </TableCell>
                <TableCell align="right">{moment(createdAt).format('DD-MM-YYYY')}</TableCell>
                <TableCell align="right">
                  <FontAwesomeIcon
                    icon={active ? faCheckCircle : faTimesCircle}
                    size="lg"
                    className={active ? classes.activeIcon : classes.inactiveIcon}
                  />
                </TableCell>
                <TableCell align="right">
                  <Box display="flex" flexDirection="row" justifyContent="flex-end">
                    <IconButton aria-label="edit" component={Link} to={`${match.url}/${_id}/edit`}>
                      <FontAwesomeIcon icon={faEdit} size="xs" />
                    </IconButton>
                    <IconButton aria-label="remove" onClick={remove(row)}>
                      <FontAwesomeIcon icon={faTrash} size="xs" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
}
