import React from 'react'
import { IHouse } from '../../models/House'

type HouseFormProps = {
  house?: IHouse
  onSave?: () => void
}

export const HouseForm: React.FC<HouseFormProps> = (props: HouseFormProps) => {
  const { house } = props

  return <div>House Form - {house?.title}</div>
}
