import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/styles'
import { TextField, FormGroup, Box, FormControl, InputLabel, Select, MenuItem, Avatar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { IAddress, Address } from '../../models/Address'
import styles from './AddressFormGroup.style'
import { fetchCountries, ICountry } from '../../features/countries'
import { RootState } from '../../../application/store'

const useStyles = makeStyles(styles)
const voidAddress = new Address()

type AddressFormGroupProps = {
  onChange: (address: IAddress) => void
  address?: IAddress
}

export const AddressFormGroup: React.FC<AddressFormGroupProps> = (props: AddressFormGroupProps) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const countryList = useSelector((state: RootState) => {
    const { countries } = state.countries
    return countries
  })
  const { onChange, address } = props
  const [state, setState] = useState(address || voidAddress.get())

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  useEffect(() => {
    if (address) {
      setState(address)
    }
  }, [address])

  const handleChange = (field: string, value: any) => {
    const update = { ...state, [field]: value }
    setState(update)
    onChange(update)
  }

  return (
    <FormGroup>
      <TextField
        id="way1"
        label={t('address.way1')}
        value={state.way1 ? state.way1 : ''}
        onChange={(e) => handleChange('way1', e.target.value)}
        // onBlur={handleBlur}
        margin="normal"
      />

      <TextField
        id="way2"
        label={t('address.way2')}
        value={state.way2 ? state.way2 : ''}
        onChange={(e) => handleChange('way2', e.target.value)}
        // onBlur={handleBlur}
        margin="normal"
      />

      <TextField
        id="way3"
        label={t('address.way3')}
        value={state.way3 ? state.way3 : ''}
        onChange={(e) => handleChange('way3', e.target.value)}
        // onBlur={handleBlur}
        margin="normal"
      />

      <Box display="flex" flexDirection="row">
        <TextField
          id="postalCode"
          label={t('address.postalcode')}
          value={state.postalCode ? state.postalCode : ''}
          onChange={(e) => handleChange('postalCode', e.target.value)}
          // onBlur={handleBlur}
          margin="normal"
        />

        <TextField
          id="city"
          label={t('address.city')}
          value={state.city ? state.city : ''}
          onChange={(e) => handleChange('city', e.target.value)}
          // onBlur={handleBlur}
          margin="normal"
        />

        <FormControl fullWidth margin="dense">
          <InputLabel htmlFor="address-country">{t('address.country')}</InputLabel>
          <Select value={state.country ? state.country.toUpperCase() : ''} onChange={(e) => handleChange('country', e.target.value)} inputProps={{ name: 'country', id: 'address-country' }}>
            {countryList.map((country: ICountry) => (
              <MenuItem value={country.alpha2Code} key={country.alpha2Code}>
                <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center">
                  <Avatar src={country.flag} alt={country.alpha2Code} className={classes.avatar} />
                  <Box flex="1" px={2}>
                    {country.name}
                  </Box>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </FormGroup>
  )
}
