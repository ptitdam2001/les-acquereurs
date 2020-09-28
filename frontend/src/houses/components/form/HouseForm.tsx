import React from 'react'
import { Switch, Route, useRouteMatch, useLocation, NavLink } from 'react-router-dom'
import { Button, Box, Divider, makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { HouseGeneralForm } from './general/HouseGeneralForm'
import { HouseRoomsForm } from './rooms/HouseRoomsForm'
import { HouseAddressForm } from './address/HouseAddressForm'
import { HouseMoreForm } from './more/HouseMoreForm'
import { HouseMediaForm } from './media/HouseMediaForm'

import styles from './HouseForm.style'
import { IHouse } from '../../features'

const useStyles = makeStyles(styles)

type HouseFormProps = {
  house?: IHouse
  onSave?: () => void
}

export const HouseForm: React.FC<HouseFormProps> = (props: HouseFormProps) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const { house } = props

  const allTabs = [
    {
      label: t('house:menu.general'),
      route: '/general',
      component: <HouseGeneralForm house={house} />,
    },
    {
      label: t('house:menu.rooms'),
      route: '/rooms',
      component: <HouseRoomsForm house={house} />,
    },
    {
      label: t('house:menu.address'),
      route: '/address',
      component: <HouseAddressForm house={house} />,
    },
    {
      label: t('house:menu.other'),
      route: '/other',
      component: <HouseMoreForm house={house} />,
    },
    {
      label: t('house:menu.media'),
      route: '/medias',
      component: <HouseMediaForm house={house} />,
    },
  ]
  const match = useRouteMatch()
  const location = useLocation()

  return (
    <Box flex={1} display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row" p={1}>
        {allTabs.map((tab, index) => (
          <Button key={tab.label} component={NavLink} to={`${match.url}${tab.route}`} activeClassName={classes.currentLink} disabled={index !== 0 && !house?._id}>
            {tab.label}
          </Button>
        ))}
      </Box>
      <Divider />
      <Box flex={1} display="flex" flexDirection="row" p={1}>
        <TransitionGroup className={classes.transitionGroup}>
          <CSSTransition key={location.key} classNames="page" timeout={150}>
            <Switch location={location}>
              {allTabs.slice(1).map((tab) => (
                <Route key={tab.route} path={`${match.url}${tab.route}`} exact>
                  {tab.component}
                </Route>
              ))}
              <Route>{allTabs[0].component}</Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Box>
    </Box>
  )
}

HouseForm.defaultProps = {
  house: undefined,
  onSave: () => {},
}
