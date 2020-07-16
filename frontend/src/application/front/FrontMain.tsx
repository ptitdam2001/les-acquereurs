import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'

import { faServer } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const style = {
  title: {
    flexGrow: 1,
  },
}

const useStyles = makeStyles(style)

export const FrontMain: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Les acquereurs
          </Typography>
          <IconButton component={Link} to="/admin" aria-label="backoffice" title="backoffice">
            <FontAwesomeIcon icon={faServer} size="lg" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div>Front main</div>
    </>
  )
}
