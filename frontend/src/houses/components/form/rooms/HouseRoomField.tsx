import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, FormControl, TextField, InputAdornment, Button } from '@material-ui/core'
import { IRoom } from '../../../models/Room'

type HouseRoomFieldProps = {
	onValidate: (room: IRoom) => void
	room ?: IRoom
}

export const HouseRoomField: React.FC<HouseRoomFieldProps> = (props: HouseRoomFieldProps) => {
	const { onValidate, room } = props
	const { t } = useTranslation()
	const [roomEntity, setRoomEntity] = useState(room)

	useEffect(() => {
		setRoomEntity(room)
	}, [room])

	const handleValidate = () => {
		if (roomEntity) {
			onValidate(roomEntity)
		}
	}

	const handleChangeField = (fieldname: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
		const updated = { ...roomEntity, [fieldname]: e.target.value } as IRoom
		setRoomEntity(updated)
	}

	return (
		<Box display="flex" flexDirection="column">
			<FormControl error>
				<TextField
					label={t('house:form.room.type')}
					value={roomEntity?.type}
					onChange={handleChangeField('type')}
					required
				/>
			</FormControl>
			<FormControl error>
				<TextField
					type="number"
					label={t('house:form.room.surface')}
					value={roomEntity?.surface}
					onChange={handleChangeField('surface')}
					required
					InputProps={{
						startAdornment: <InputAdornment position="end">m²</InputAdornment>,
					}}
				/>
			</FormControl>
			<FormControl error>
				<TextField
					type="number"
					label={t('house:form.room.windows')}
					onChange={handleChangeField('windows')}
					value={roomEntity?.windows}
					required
				/>
			</FormControl>
			<FormControl error>
				<TextField
					type="number"
					label={t('house:form.room.windowDoors')}
					onChange={handleChangeField('windowsDoors')}
					value={roomEntity?.surface}
				/>
			</FormControl>
			<Box display="flex" flexDirection="row" justifyContent="center">
				<Button onClick={handleValidate}>{t('actions.validate')}</Button>
			</Box>
		</Box>
	)
}