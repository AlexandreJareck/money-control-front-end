import { SearchFormContainer } from './SearchForm.styles'
import { Search } from 'react-feather'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useContext } from 'react'
import { TransactionContext } from '@contexts'

const seachFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof seachFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(seachFormSchema)
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input type="text" placeholder="Search transactions" {...register('query')} />
      <button type="submit" disabled={isSubmitting}>
        <Search />
        Search
      </button>
    </SearchFormContainer>
  )
}
