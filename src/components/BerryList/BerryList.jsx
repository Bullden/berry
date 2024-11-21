import { useState } from 'react'
import Berry from '../Berry/Berry'
import SearchBerry from '../SearchBerry/SearchBerry'
import { StyledBerryList } from './styled'

const BerryList = ({ berryList, filterName }) => {
  const [debouncedValue, setDebouncedValue] = useState('')
  const onSearch = query => {
    setDebouncedValue(query)
  }
  return (
    <StyledBerryList>
      <SearchBerry onSearch={onSearch} />
      {berryList.map(
        berry =>
          (debouncedValue === berry.name || !debouncedValue) && (
            <Berry key={berry.name} name={berry.name} filterName={filterName} debouncedValue={debouncedValue} />
          ),
      )}
    </StyledBerryList>
  )
}

export default BerryList
