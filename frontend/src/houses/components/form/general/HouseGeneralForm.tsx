import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { makeStyles } from '@material-ui/styles'
import { Box, TextField, TextareaAutosize, FormControl, InputLabel, Select, MenuItem, FormHelperText, InputAdornment, FormControlLabel, Switch, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import * as ConfigService from '../../../../core/services/Config'
import { IHouse } from '../../../models/House'

import style from './HouseGeneralForm.style'
import { createOrUpdate } from '../../../redux/actions/houses'

const useStyle = makeStyles(style)
const houseTypes: string[] = ConfigService.get('houseTypes.values')

type HouseGeneralFormProps = {
  house?: IHouse
  onSave?: () => void
}

export const HouseGeneralForm: React.FC<HouseGeneralFormProps> = (props: HouseGeneralFormProps) => {
  const { house, onSave } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const classes = useStyle()

  const [loaned, setLoaned] = useState(house?.loaned)
  const [furnished, setFurnished] = useState(house?.furnished)
  const [active, setActive] = useState(house?.active || true)
  const [price, setPrice] = useState(house?.price || { price: 0, notary_fees: 0, commission: 0 })

  const formik = useFormik({
    initialValues: {} as IHouse,
    onSubmit: (values) => {
      const toSave = { ...values, active, price, furnished, loaned }
      console.log('_________________', toSave)
      dispatch(createOrUpdate(toSave as IHouse))
      if (onSave) {
        onSave()
      }
    },
  })

  const handleChangeLoaned = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoaned(event.target.checked)
  }

  const handleChangeFurnished = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFurnished(event.target.checked)
  }

  const handleChangeActive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActive(event.target.checked)
  }

  const handleChangePrice = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = { ...price, [field]: event.target.value }
    setPrice(newPrice)
  }

  useEffect(() => {
    formik.setValues(house || ({} as IHouse))
    setLoaned(house?.loaned)
    setFurnished(house?.furnished)

    if (house?.price) {
      setPrice(house.price)
    }
    if (house?.active) {
      setActive(house.active)
    }
  }, [house])

  return (
    <Box className={classes.root}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <FormControl>
          <InputLabel id="house-type-label">{t('house:form.general.type')}</InputLabel>
          <Select labelId="house-type-label" id="type" value={formik.values.type || houseTypes[0]} onChange={formik.handleChange}>
            {houseTypes.map((typeH: string) => (
              <MenuItem value={typeH} key={`item-${typeH}`}>
                {t(`house:types.${typeH}`)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl error>
          <TextField required id="title" label={t('house:form.general.title')} value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" />
          {formik.errors.title ? <FormHelperText>{formik.errors.title}</FormHelperText> : null}
        </FormControl>

        <TextareaAutosize required id="comment" name="comment" aria-label="Comment" rowsMin={5} placeholder={t('house:form.general.comment')} value={formik.values.comment} onChange={formik.handleChange} onBlur={formik.handleBlur} />

        <Box display="flex" flexDirection="row" p={1}>
          <Box width={1 / 2} px={1}>
            <FormControl error>
              <TextField
                type="number"
                label={t('house:form.general.globalArea')}
                id="globalArea"
                value={formik.values.globalArea}
                onChange={formik.handleChange}
                required
                InputProps={{
                  startAdornment: <InputAdornment position="end">m²</InputAdornment>,
                }}
              />
              {formik.errors.globalArea ? <FormHelperText>{formik.errors.globalArea}</FormHelperText> : null}
            </FormControl>
          </Box>
          <Box width={1 / 2} px={1}>
            <FormControl error>
              <TextField
                type="number"
                label={t('house:form.general.insideArea')}
                id="insideArea"
                value={formik.values.insideArea}
                onChange={formik.handleChange}
                required
                InputProps={{
                  startAdornment: <InputAdornment position="end">m²</InputAdornment>,
                }}
              />
              {formik.errors.insideArea ? <FormHelperText>{formik.errors.insideArea}</FormHelperText> : null}
            </FormControl>
          </Box>
        </Box>

        <Box display="flex" flexDirection="row" p={1}>
          <Box width={1 / 3} px={1}>
            <FormControl error>
              <TextField
                type="number"
                label={t('house:form.general.price')}
                id="price.price"
                value={price.price}
                onChange={handleChangePrice('price')}
                required
                InputProps={{
                  startAdornment: <InputAdornment position="end">&euro;</InputAdornment>,
                }}
              />
            </FormControl>
          </Box>
          <Box width={1 / 3} px={1}>
            <FormControl error>
              <TextField
                type="number"
                label={t('house:form.general.notaryFee')}
                id="price.notary_fees"
                value={price.notary_fees}
                onChange={handleChangePrice('notary_fees')}
                required
                InputProps={{
                  startAdornment: <InputAdornment position="end">&euro;</InputAdornment>,
                }}
              />
            </FormControl>
          </Box>
          <Box width={1 / 3} px={1}>
            <FormControl error>
              <TextField
                type="number"
                label={t('house:form.general.commission')}
                id="price.commission"
                value={price.commission}
                onChange={handleChangePrice('commission')}
                required
                InputProps={{
                  startAdornment: <InputAdornment position="end">&euro;</InputAdornment>,
                }}
              />
            </FormControl>
          </Box>
        </Box>

        <Box display="flex" flexDirection="row" p={1}>
          <Box width="50%" p={1}>
            <FormControlLabel control={<Switch checked={loaned} onChange={handleChangeLoaned} name="loaned" />} label={t('house:form.general.loaned')} />
          </Box>
          <Box width="50%" p={1}>
            <FormControlLabel control={<Switch checked={furnished} onChange={handleChangeFurnished} name="furnished" />} label={t('house:form.general.furnished')} />
          </Box>
        </Box>

        <FormControlLabel control={<Switch checked={active} onChange={handleChangeActive} name="active" />} label={t('house:form.general.active')} />

        <Box display="flex" flexDirection="row" justifyContent="center">
          <Button variant="contained" color="primary" type="submit" disabled={formik.isSubmitting}>
            {t('actions.save')}
          </Button>
        </Box>
      </form>
    </Box>
  )
}
