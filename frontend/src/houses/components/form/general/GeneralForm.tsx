import React from 'react'
import { Box, TextField, FormControl, InputLabel, InputAdornment, Button, makeStyles, Select, MenuItem, FormHelperText, TextareaAutosize, FormControlLabel, Switch } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import style from './HouseGeneralForm.style'
import { ConfigService } from '../../../../core/features/config'

const houseTypes: string[] = ConfigService.get('houseTypes.values')

const useStyle = makeStyles(style)

type GeneralFormProps = {
  handleSubmit: (e: React.FormEvent<any>) => void
  handleChange: (e: React.ChangeEvent<any>) => void
  handleBlur: (e: any) => void
  values: { [field: string]: any }
  errors?: any
  isSubmitting: boolean
}

export const GeneralForm: React.FC<GeneralFormProps> = (props: GeneralFormProps) => {
  const { handleSubmit, handleChange, values, errors, isSubmitting } = props

  const classes = useStyle()
  const { t } = useTranslation()

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <FormControl>
        <InputLabel id="house-type-label">{t('house:form.general.type')}</InputLabel>
        <Select labelId="house-type-label" id="type" value={values.type || houseTypes[0]} onChange={handleChange}>
          {houseTypes.map((typeH: string) => (
            <MenuItem value={typeH} key={`item-${typeH}`}>
              {t(`house:types.${typeH}`)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl error>
        <TextField required id="title" label={t('house:form.general.title')} value={values.title} onChange={handleChange} margin="normal" focused />
        {errors.title ? <FormHelperText>{errors.title}</FormHelperText> : null}
      </FormControl>

      <TextareaAutosize required id="comment" name="comment" aria-label="Comment" rowsMin={5} placeholder={t('house:form.general.comment')} value={values.comment} onChange={handleChange} />

      <Box display="flex" flexDirection="row" p={1}>
        <Box width={1 / 2} px={1}>
          <FormControl error>
            <TextField
              type="number"
              label={t('house:form.general.globalArea')}
              id="globalArea"
              value={values.globalArea}
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">m²</InputAdornment>,
              }}
            />
            {errors.globalArea ? <FormHelperText>{errors.globalArea}</FormHelperText> : null}
          </FormControl>
        </Box>
        <Box width={1 / 2} px={1}>
          <FormControl error>
            <TextField
              type="number"
              label={t('house:form.general.insideArea')}
              id="insideArea"
              value={values.insideArea}
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">m²</InputAdornment>,
              }}
            />
            {errors.insideArea ? <FormHelperText>{errors.insideArea}</FormHelperText> : null}
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
              value={values.price.price}
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">&euro;</InputAdornment>,
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
              value={values.price.notary_fees}
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">&euro;</InputAdornment>,
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
              value={values.price.commission}
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: <InputAdornment position="end">&euro;</InputAdornment>,
              }}
            />
          </FormControl>
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" p={1}>
        <Box width="50%" p={1}>
          <FormControlLabel control={<Switch checked={values.loaned} onChange={handleChange} name="loaned" />} label={t('house:form.general.loaned')} />
        </Box>
        <Box width="50%" p={1}>
          <FormControlLabel control={<Switch checked={values.furnished} onChange={handleChange} name="furnished" />} label={t('house:form.general.furnished')} />
        </Box>
      </Box>

      <FormControlLabel control={<Switch checked={values.active} onChange={handleChange} name="active" />} label={t('house:form.general.active')} />

      <Box flexGrow={1} />

      <Box display="flex" flexDirection="row" justifyContent="center">
        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
          {t('actions.save')}
        </Button>
      </Box>
    </form>
  )
}
