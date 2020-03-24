import React, { useState, useEffect } from 'react'

import styles from './AddressFormGroup.style'
import { makeStyles } from '@material-ui/styles'
import { TextField, FormGroup, Box, FormControl, InputLabel, Select, MenuItem, Avatar } from '@material-ui/core'
import { IAddress, Address } from '../../models/Address'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../../redux/actions/countries'
import { ICountry } from '../../models/Country'
import { RootState } from '../../../application/store'

const useStyles = makeStyles(styles)
const voidAddress = new Address()

type AddressFormGroupProps = {
	onChange: (address: IAddress) => void,
	address?: IAddress,
}

export const AddressFormGroup: React.FC<AddressFormGroupProps> = (props: AddressFormGroupProps) => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const countries = useSelector((state: RootState) => {
    const { countries } = state.countries
    return countries
  })
	const { onChange, address } = props
	const [state, setState] = useState(address || voidAddress.get())

	useEffect(() => {
    dispatch(fetchCountries())
  }, [])

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
        label="Way 1"
        value={state.way1 ? state.way1 : ''}
        onChange={e => handleChange('way1', e.target.value)}
        // onBlur={handleBlur}
        margin="normal"
      />

      <TextField
        id="way2"
        label="Way 2"
        value={state.way2 ? state.way2 : ''}
        onChange={e => handleChange('way2', e.target.value)}
        // onBlur={handleBlur}
        margin="normal"
      />

      <TextField
        id="way3"
        label="Way 3"
        value={state.way3 ? state.way3 : ''}
        onChange={e => handleChange('way3', e.target.value)}
        // onBlur={handleBlur}
        margin="normal"
      />

      <Box display="flex" flexDirection="row">
        <TextField
          id="postalCode"
          label="Postal code"
          value={state.postalCode ? state.postalCode : ''}
          onChange={e => handleChange('postalCode', e.target.value)}
          // onBlur={handleBlur}
          margin="normal"
        />

        <TextField
          id="city"
          label="City"
          value={state.city ? state.city : ''}
          onChange={e => handleChange('city', e.target.value)}
          // onBlur={handleBlur}
          margin="normal"
        />

        <FormControl fullWidth margin="dense">
          <InputLabel htmlFor="address-country">Country</InputLabel>
          <Select
            value={state.country ? state.country.toUpperCase() : ''}
            onChange={e => handleChange('country', e.target.value)}
            inputProps={{ name: 'country', id: 'address-country' }}
          >
            {
            countries.map((country: ICountry) =>
              <MenuItem value={country.alpha2Code} key={country.alpha2Code}>
                <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center">
                  <Avatar src={country.flag} alt={country.alpha2Code} className={classes.avatar} />
                  <Box flex="1" px={2}>{country.name}</Box>
                </Box>
              </MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
    </FormGroup>
	)
}