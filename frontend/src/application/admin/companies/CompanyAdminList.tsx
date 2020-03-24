import React from 'react'

import { AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core'

// import BackIcon from '@material-ui/icons/ChevronLeft';
import PlusIcon from '@material-ui/icons/Add'

import { useRouteMatch, Link } from 'react-router-dom'
import { CompaniesList } from '../../../companies/components'

export const CompanyAdminList: React.FC = () => {
  const match = useRouteMatch()
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton component={Link} to="/admin" edge="start" color="inherit" aria-label="Back">
            <BackIcon />
          </IconButton> */}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Companies
          </Typography>
          <IconButton component={Link} to={`${match.url}/add`} edge="start" color="inherit" aria-label="Add">
            <PlusIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box p={3} justifyItems="center">
        <CompaniesList />
      </Box>
    </>
  )
}
