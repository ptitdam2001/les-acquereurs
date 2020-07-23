import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/styles'

import { TextField, Switch, Button, Box, FormControlLabel } from '@material-ui/core'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import styles from './CompanyForm.style'
import { AddressFormGroup } from '../../../core/components'
import { IAddress } from '../../../core/models/Address'
import { createOrUpdate, ICompany } from '../../features'

const useStyles = makeStyles(styles)

const defaultVal: ICompany = {
  name: '',
  shortname: '',
  address: {} as IAddress,
} as ICompany

type CompanyFormProps = {
  company?: ICompany
  onSave?: () => void
}

export const CompanyForm: React.FC<CompanyFormProps> = (props: CompanyFormProps) => {
  const { company, onSave } = props
  const classes = useStyles()
  const dispatch = useDispatch()
  const [active, setActive] = useState(company?.active || true)
  const formik = useFormik({
    initialValues: defaultVal,
    onSubmit: (values: any) => {
      const toSave = { ...values }
      toSave.active = active
      dispatch(createOrUpdate(toSave as ICompany))
      if (onSave) {
        onSave()
      }
    },
  })

  useEffect(() => {
    formik.setValues(company || defaultVal)
  }, [company, formik])

  const handleChangeActive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActive(event.target.checked)
  }

  return (
    <Box className={classes.root}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <TextField id="name" label="Name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <TextField id="shortname" label="Shortname" value={formik.values.shortname} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" />
        {formik.errors.shortname ? <div>{formik.errors.shortname}</div> : null}

        <AddressFormGroup
          address={formik.values.address}
          onChange={(addr: IAddress) => {
            formik.values.address = addr
            formik.handleChange('address')
          }}
        />

        <FormControlLabel control={<Switch checked={active} onChange={handleChangeActive} name="active" />} label="Active" />

        <Box display="flex" flexDirection="row" justifyContent="center">
          <Button variant="contained" color="primary" type="submit" disabled={formik.isSubmitting}>
            Save
          </Button>
        </Box>
      </form>
    </Box>
  )
}
