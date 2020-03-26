import React from 'react'

import { AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core'
import PlusIcon from '@material-ui/icons/Add'
import { useRouteMatch, Link } from 'react-router-dom'

import { UsersList } from '../../../users/components'

export const UsersAdminList: React.FC = () => {
  const match = useRouteMatch()
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Users
          </Typography>
          <IconButton component={Link} to={`${match.url}/add`} edge="start" color="inherit" aria-label="Add">
            <PlusIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box p={3} justifyItems="center">
        <UsersList />
      </Box>
    </>
  )
}
