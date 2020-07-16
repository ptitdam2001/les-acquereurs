import React from 'react'
import { Box, Button, AppBar, Toolbar, Typography } from '@material-ui/core'
import { Route, useRouteMatch, Link, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { AdminHome } from './AdminHome'

import getMenu from './config/menu.config'
import { AdminMenu } from './menu/AdminMenu'

const routes = (menus: any[]): any[] => {
  const output: any[] = []
  menus.forEach((menu) => {
    if (menu.submenu) {
      menu.submenu.forEach((submenu: { to: string; component: any; label: string }) => output.push(<Route path={submenu.to} component={submenu.component} key={`route-${submenu.label}`} />))
    } else {
      output.push(<Route path={menu.to} component={menu.component} key={`route-${menu.label}`} />)
    }
  })
  return output
}

const style = {
  title: {
    flexGrow: 1,
  },
}
const useStyle = makeStyles(style)

export const AdminMain: React.FC = () => {
  const classes = useStyle()
  const match = useRouteMatch()
  const menus = getMenu(match.url)

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            BackOffice
          </Typography>
          <Button component={Link} to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex" flex={1} flexDirection="row">
        <Box flex={1 / 4} display="flex" flexDirection="column" boxShadow={2} p={1}>
          <AdminMenu menu={menus} />
        </Box>
        <Box flex={1} display="flex" flexDirection="column">
          <Switch>
            {routes(menus)}
            <Route component={AdminHome} />
          </Switch>
        </Box>
      </Box>
    </>
  )
}
