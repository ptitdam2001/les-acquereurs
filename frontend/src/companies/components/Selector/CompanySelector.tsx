import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { RootState } from '../../../application/store'
import { fetchCompanies, ICompany } from '../../features'

type CompanySelectorProps = {
  onSelect: (role: ICompany | undefined) => any
  value?: ICompany
}

export const CompanySelector: React.FC<CompanySelectorProps> = (props: CompanySelectorProps) => {
  const { onSelect, value } = props
  const dispatch = useDispatch()

  const companyList = useSelector((state: RootState) => {
    const { companies } = state
    return companies.list
  })

  useEffect(() => {
    dispatch(fetchCompanies())
  }, [dispatch])

  const handleChange = (event: React.ChangeEvent<any>) => {
    const id = event.target.value
    const selected: ICompany | undefined = companyList.find((item: ICompany) => item._id && item._id === id)
    onSelect(selected)
  }

  return (
    <FormControl>
      <InputLabel id="company-label">Company</InputLabel>
      <Select labelId="company-label" id="value" value={value?._id} onChange={handleChange}>
        {companyList.map((company: ICompany) => (
          <MenuItem value={company._id} key={`company-${company._id}`}>
            {company.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
