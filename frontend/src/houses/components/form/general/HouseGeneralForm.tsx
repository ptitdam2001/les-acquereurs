import React from 'react'
import { Formik } from 'formik'
import { makeStyles } from '@material-ui/styles'
import { Box, CssBaseline } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { IHouse, getNewHouse } from '../../../models/House'

import style from './HouseGeneralForm.style'
import { createOrUpdate } from '../../../redux/actions/houses'
import { GeneralForm } from './GeneralForm'

const useStyle = makeStyles(style)

type HouseGeneralFormProps = {
  house?: IHouse
  onSave?: () => void
}

export const HouseGeneralForm: React.FC<HouseGeneralFormProps> = (props: HouseGeneralFormProps) => {
  const { house, onSave } = props
  const dispatch = useDispatch()
  const classes = useStyle()

  const handleSubmit = (values: IHouse) => {
    const toSave = { ...values }
    dispatch(createOrUpdate(toSave as IHouse))
    if (onSave) {
      onSave()
    }
  };

  const defaultValues = house
    ? house
    : getNewHouse()

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Formik
        enableReinitialize
        initialValues={defaultValues}
        onSubmit={handleSubmit}
        component={GeneralForm}
      />
    </Box>
  )
}
