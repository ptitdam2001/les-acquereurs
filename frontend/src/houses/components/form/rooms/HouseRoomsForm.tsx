import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { IHouse } from '../../../models/House'
import styles from './HouseRoomsForm.style'
import { IRoom } from '../../../models/Room'
import { HouseRoomField } from './HouseRoomField'

type HouseRoomsFormProps = {
  house?: IHouse
}

const useStyle = makeStyles(styles)

export const HouseRoomsForm: React.FC<HouseRoomsFormProps> = (props: HouseRoomsFormProps) => {
  const { house } = props
  const [rooms, setRooms] = useState<IRoom[]>([])

  useEffect(() => {
    if (house) {
      setRooms(house.rooms)
    }
  }, [house])

  const classes = useStyle()

  const onValidateRoom = (entity: IRoom) => {
    console.log('_______validate: ', entity)
  }

  return <div className={classes.root}>
    {
      rooms.map((roomItem, idx) => <HouseRoomField room={roomItem} onValidate={onValidateRoom} key={`roomField-${idx}`} />)
    }
  </div>
}
