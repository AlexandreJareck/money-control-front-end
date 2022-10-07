import { SearchFormContainer } from './SearchForm.styles'
import { Search } from 'react-feather'
export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search transactions" />
      <button type="submit">
        <Search />
        Search
      </button>
    </SearchFormContainer>
  )
}
