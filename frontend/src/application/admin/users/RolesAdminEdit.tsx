import React, { useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core'
import { Link, useParams, useHistory } from 'react-router-dom'

import BackIcon from '@material-ui/icons/ChevronLeft'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { fetchRole, resetCurrent } from '../../../roles/redux/actions/roles'
import { IRole } from '../../../roles/models/Role'
import { RoleForm } from '../../../roles/components'

export const RolesAdminEdit: React.FC = () => {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const onSave = () => {
    history.push('/admin/roles')
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchRole(id))
    } else {
      dispatch(resetCurrent())
    }
  }, [dispatch, id])

  const role: IRole | undefined = useSelector((state: RootState) => {
    const { current } = state.roles
    return current
  })

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to="/admin/roles" edge="start" color="inherit" aria-label="Back">
            <BackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {id ? 'Edit' : 'Create'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box p={3} justifyItems="center">
        <RoleForm role={role} onSave={onSave} />
      </Box>
    </>
  )
}
