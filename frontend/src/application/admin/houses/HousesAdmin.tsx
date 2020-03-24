import React from 'react'
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom'

import { Box, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import PlusIcon from '@material-ui/icons/Add'

import { HousesList, HouseForm } from '../../../houses/components'

export const HousesAdmin: React.FC = () => {
  const match = useRouteMatch()
  return (
    <Box display="flex" flexDirection="column">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Houses
          </Typography>
          <IconButton component={Link} to={`${match.url}/add`} edge="start" color="inherit" aria-label="Add">
            <PlusIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box p={1} flex={1} display="flex" flexDirection="column">
        <Switch>
          <Route path={`${match.url}/:id/edit`} exact component={HouseForm} />
          <Route path={`${match.url}/add`} exact component={HouseForm} />
          <Route component={HousesList} />
        </Switch>
      </Box>
    </Box>
  )
}
