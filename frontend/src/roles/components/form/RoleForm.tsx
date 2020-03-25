import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { Box, TextField, FormControlLabel, Switch, Button } from '@material-ui/core'
import ChipInput from 'material-ui-chip-input'

import styles from './RoleForm.style'
import { createOrUpdate } from '../../redux/actions/roles'
import { IRole } from '../../models/Role'

const useStyles = makeStyles(styles)

const defaultVal: IRole = {
  forbidden: [],
  active: true,
  name: '',
  group: '',
}

type RoleFormProps = {
  role?: IRole
  onSave?: () => any
}

export const RoleForm: React.FC<RoleFormProps> = (props: RoleFormProps) => {
  const { role, onSave } = props
  const classes = useStyles()
  const dispatch = useDispatch()
  const [active, setActive] = useState(role?.active || true)

  const formik = useFormik({
    initialValues: defaultVal,
    onSubmit: (values: any) => {
      const toSave = { ...values }
      toSave.active = active
      dispatch(createOrUpdate(toSave as IRole))
      if (onSave) {
        onSave()
      }
    },
  })

  const handleChangeActive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActive(event.target.checked)
  }

  const handleChangeForbidden = (chips: string[]) => {
    formik.setFieldValue('forbidden', chips)
  }

  useEffect(() => {
    formik.setValues(role || defaultVal)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role])

  return (
    <Box className={classes.root}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <TextField id="name" label="Name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <TextField id="group" label="Group" value={formik.values.group} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" />
        {formik.errors.group ? <div>{formik.errors.group}</div> : null}

        <ChipInput label="Forbidden" defaultValue={formik.values.forbidden} onChange={handleChangeForbidden} />

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
