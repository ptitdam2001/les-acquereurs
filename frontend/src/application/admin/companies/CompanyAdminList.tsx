import React from 'react'

import { AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core'
import PlusIcon from '@material-ui/icons/Add'

import { useRouteMatch, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { CompaniesList } from '../../../companies/components'

export const CompanyAdminList: React.FC = () => {
  const match = useRouteMatch()
  const { t } = useTranslation()
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {t('company:title')}
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
