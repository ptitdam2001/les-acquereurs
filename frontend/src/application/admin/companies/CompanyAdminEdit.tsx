import React, { useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core'
import { Link, useParams, useHistory } from 'react-router-dom'

import BackIcon from '@material-ui/icons/ChevronLeft'
import { useDispatch, useSelector } from 'react-redux'
import { CompanyForm } from '../../../companies/components'
import { fetchCompany, resetCurrent, ICompany } from '../../../companies/features'
import { RootState } from '../../store'

export const CompanyAdminEdit: React.FC = () => {
  console.log('_____', useParams())
  const id = ''

  // const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const onSave = () => {
    history.push('/admin/companies')
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchCompany(id))
    } else {
      dispatch(resetCurrent())
    }
  }, [dispatch, id])

  const company: ICompany | undefined = useSelector((state: RootState) => {
    const { current } = state.companies
    return current
  })

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to="/admin/companies" edge="start" color="inherit" aria-label="Back">
            <BackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {id ? 'Edit' : 'Create'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box p={3} justifyItems="center">
        <CompanyForm company={company} onSave={onSave} />
      </Box>
    </>
  )
}
