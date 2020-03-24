import React from 'react'
import { Link } from 'react-router-dom'
import { Apartment, Business, Person, Grade, ViewList } from '@material-ui/icons'

import { CompaniesAdmin } from '../companies/CompaniesAdmin'
import { HousesAdmin } from '../houses/HousesAdmin'
import { UsersAdmin } from '../users/UsersAdmin'
import { RolesAdmin } from '../users/RolesAdmin'

export default (prefix: string = '') => [
  {
    type: Link,
    to: `${prefix}/companies`,
    label: 'Companies',
    icon: <Business />,
    component: CompaniesAdmin,
  },
  {
    label: 'Users',
    icon: <Person />,
    submenu: [
      {
        to: `${prefix}/users`,
        label: 'User List',
        value: 'list',
        component: UsersAdmin,
        type: Link,
        icon: <ViewList />,
      },
      {
        to: `${prefix}/roles`,
        label: 'User roles',
        value: 'roles',
        component: RolesAdmin,
        type: Link,
        icon: <Grade />,
      },
    ],
  },
  {
    type: Link,
    to: `${prefix}/houses`,
    label: 'Houses',
    component: HousesAdmin,
    icon: <Apartment />,
  },
]
