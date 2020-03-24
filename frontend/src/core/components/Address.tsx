import React from 'react'
import { IAddress } from '../models/Address'
import { Typography, Box } from '@material-ui/core'

type AddressProps = {
	address?: IAddress
}

export const Address: React.FC<AddressProps> = (props: AddressProps) => {
	const { address } = props

	return address ? (
		<Box>
			<Typography>{[address.way1, address.way2, address.way3,].join(' ')}</Typography>
			<Typography>{[address.postalCode, address.city, ',', address.country].join(' ')}</Typography>
		</Box>
	): null
}