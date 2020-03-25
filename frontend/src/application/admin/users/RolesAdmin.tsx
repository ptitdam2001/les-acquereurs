import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import { RolesAdminEdit } from './RolesAdminEdit'
import { RolesAdminList } from './RolesAdminList'

export const RolesAdmin: React.FC = () => {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route path={`${match.path}/add`} exact component={RolesAdminEdit} />
      <Route path={`${match.path}/:id/edit`} exact component={RolesAdminEdit} />
      <Route component={RolesAdminList} />
    </Switch>
  )
}
