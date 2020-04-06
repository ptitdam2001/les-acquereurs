import React, { useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core'
import { Link, useParams, useHistory } from 'react-router-dom'

import BackIcon from '@material-ui/icons/ChevronLeft'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { IUser } from '../../../users/models/User'
import { fetchUser, resetCurrent } from '../../../users/redux/actions/users'
import { UserForm } from '../../../users/components/form/UserForm'

export const UsersAdminEdit: React.FC = () => {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const onSave = () => {
    history.push('/admin/users')
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchUser(id))
    } else {
      dispatch(resetCurrent())
    }
  }, [dispatch, id])

  const user: IUser | undefined = useSelector((state: RootState) => {
    const { current } = state.users
    return current
  })

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to="/admin/users" edge="start" color="inherit" aria-label="Back">
            <BackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {id ? 'Edit' : 'Create'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box p={3} justifyItems="center">
        <UserForm user={user} onSave={onSave} />
      </Box>
    </>
  )
}
