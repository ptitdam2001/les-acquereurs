import React from 'react'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, IconButton } from '@material-ui/core'
import PlusIcon from '@material-ui/icons/Add'
import { UserForm } from '../../../users/components/form/UserForm'
import { UsersList } from '../../../users/components'

export const UsersAdmin: React.FC = () => {
  const match = useRouteMatch()

  return (
    <Box display="flex" flexDirection="column">
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
      <Box p={1} flex={1} display="flex" flexDirection="column">
        <Switch>
          <Route path={`${match.path}/add`} component={UserForm} />
          <Route component={UsersList} />
        </Switch>
      </Box>
    </Box>
  )
}
