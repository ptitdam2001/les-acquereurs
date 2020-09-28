import React, { useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'

import BackIcon from '@material-ui/icons/ChevronLeft'
import { useDispatch, useSelector } from 'react-redux'

import { HouseForm } from '../../../houses/components'

import { houseSelectors, IHouse, fetchHouse, resetCurrent } from '../../../houses/features'

export const HouseAdminEdit: React.FC = () => {
  // const { id } = useParams()
  const id = ''
  const history = useHistory()
  const dispatch = useDispatch()

  const onSave = () => {
    history.push('/admin/houses')
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchHouse(id))
    } else {
      dispatch(resetCurrent())
    }
    return () => {
      dispatch(resetCurrent())
    }
  }, [dispatch, id])

  const house: IHouse | undefined = useSelector(houseSelectors.getCurrentHouse)

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to="/admin/houses" edge="start" color="inherit" aria-label="Back">
            <BackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {id ? 'Edit' : 'Create'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box flex={1} display="flex" flexDirection="column" justifyItems="center">
        <HouseForm house={house} onSave={onSave} />
      </Box>
    </>
  )
}
