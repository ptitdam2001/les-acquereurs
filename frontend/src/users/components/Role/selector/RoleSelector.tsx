import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { RootState } from '../../../../application/store'

import { fetchRoles, IRole } from '../../../features/roles'

type RoleSelectorProps = {
  onSelect: (role: IRole | undefined) => any
  value?: IRole
}

export const RoleSelector: React.FC<RoleSelectorProps> = (props: RoleSelectorProps) => {
  const { onSelect, value } = props
  const dispatch = useDispatch()

  const roleList = useSelector((state: RootState) => {
    const { roles } = state
    return roles.list
  })

  useEffect(() => {
    dispatch(fetchRoles())
  }, [dispatch])

  const handleChange = (event: React.ChangeEvent<any>) => {
    const id = parseInt(event.target.value, 0)
    const selected: IRole | undefined = roleList.find((item: IRole) => item._id && item._id === id)
    onSelect(selected)
  }

  return (
    <FormControl>
      <InputLabel id="role-label">Role</InputLabel>
      <Select labelId="role-label" id="value" value={value?._id} onChange={handleChange}>
        {roleList.map((role: IRole) => (
          <MenuItem value={role._id} key={`role-${role._id}`}>
            {role.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
