import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import { CompanyAdminEdit } from './CompanyAdminEdit'
import { CompanyAdminList } from './CompanyAdminList'

export const CompaniesAdmin: React.FC = () => {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.url}/:id/edit`} exact component={CompanyAdminEdit} />
      <Route path={`${match.url}/add`} exact component={CompanyAdminEdit} />
      <Route component={CompanyAdminList} />
    </Switch>
  )
}
