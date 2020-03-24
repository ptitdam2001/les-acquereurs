import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { Divider } from '@material-ui/core'
import styles from './AdminMenu.style'

const useStyles = makeStyles(styles)

type AdminMenuProps = {
  menu: any[]
}

export const AdminMenu: React.FC<AdminMenuProps> = (props: AdminMenuProps) => {
  const classes = useStyles()
  const { menu } = props
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List aria-labelledby="admin-menu" className={classes.root}>
      {menu.map(item => (
        <Fragment key={item.label}>
          {!item.submenu ? (
            <ListItem button component={item.type} to={item.to}>
              {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : null}
              <ListItemText primary={item.label} />
            </ListItem>
          ) : (
            <>
              <ListItem button onClick={handleClick}>
                {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : null}
                <ListItemText primary={item.label} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((sub: any) => (
                    <ListItem
                      button
                      component={sub.type}
                      to={sub.to}
                      className={classes.nested}
                      key={sub.label}
                    >
                      {sub.icon ? (
                        <ListItemIcon>{sub.icon}</ListItemIcon>
                      ) : null}
                      <ListItemText primary={sub.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          )}
          <Divider />
        </Fragment>
      ))}
    </List>
  )
}
