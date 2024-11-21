import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { StyledInput } from './styled'

const SearchBerry = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 1000)

  useEffect(() => {
    onSearch(debouncedSearchTerm)
  }, [debouncedSearchTerm, searchTerm])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  return <StyledInput type='text' placeholder='Search by name...' value={searchTerm} onChange={handleChange} />
}

export default SearchBerry
