import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import { HousesAdminList } from './HousesAdminList'
import { HouseAdminEdit } from './HouseAdminEdit'

export const HousesAdmin: React.FC = () => {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.url}/:id/edit`} exact component={HouseAdminEdit} />
      <Route path={`${match.url}/add`} exact component={HouseAdminEdit} />
      <Route component={HousesAdminList} />
    </Switch>
  )
}
