import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { Box, TextField, FormControlLabel, Switch, Button } from '@material-ui/core'

import { IUser } from '../../models/User'

import styles from './UserForm.style'
import { createOrUpdate } from '../../redux/actions/users'
import { IRole } from '../../../roles/models/Role'
import { RoleSelector } from '../../../roles/components'
import { CompanySelector } from '../../../companies/components'
import { ICompany } from '../../../companies/features'

const useStyles = makeStyles(styles)

const defaultVal: IUser = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  job: '',
  role: {} as IRole,
  company: {} as ICompany,
} as IUser

type UserFormProps = {
  user?: IUser
  onSave?: () => any
}

export const UserForm: React.FC<UserFormProps> = (props: UserFormProps) => {
  const { user, onSave } = props
  const classes = useStyles()
  const dispatch = useDispatch()
  const [active, setActive] = useState(user?.active || true)

  const formik = useFormik({
    initialValues: defaultVal,
    onSubmit: (values: any) => {
      const toSave = { ...values }
      toSave.active = active
      dispatch(createOrUpdate(toSave as IUser))
      if (onSave) {
        onSave()
      }
    },
  })

  const handleChangeActive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActive(event.target.checked)
  }

  const handleSelectRole = (role: IRole | undefined) => {
    formik.setFieldValue('role', role)
  }

  const handleSelectCompany = (company: ICompany | undefined) => {
    formik.setFieldValue('company', company)
  }

  useEffect(() => {
    formik.setValues(user || defaultVal)
  }, [user])

  return (
    <Box className={classes.root}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <TextField id="firstname" label="Firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" />
        {formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}

        <TextField id="lastname" label="Lastname" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" />
        {formik.errors.lastname ? <div>{formik.errors.lastname}</div> : null}

        <TextField id="email" label="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <TextField id="password" label="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <TextField id="job" label="Job" value={formik.values.job} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" />
        {formik.errors.job ? <div>{formik.errors.job}</div> : null}

        <CompanySelector value={formik.values.company} onSelect={handleSelectCompany} />

        <RoleSelector value={formik.values.role} onSelect={handleSelectRole} />

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
