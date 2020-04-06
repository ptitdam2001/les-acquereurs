import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import { UsersAdminList } from './UsersAdminList'
import { UsersAdminEdit } from './UsersAdminEdit'

export const UsersAdmin: React.FC = () => {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route path={`${match.path}/:id/edit`} component={UsersAdminEdit} />
      <Route path={`${match.path}/add`} component={UsersAdminEdit} />
      <Route component={UsersAdminList} />
    </Switch>
  )
}
