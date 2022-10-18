import { TransactionContext } from '@contexts'
import { SearchForm } from 'components/SearchForm'
import { TransactionModel } from 'models/Transaction.model'
import { useContext } from 'react'
import {
  PriceHighLigth,
  TransactionContainer,
  TransactionTable
} from './Transaction.styles'

export type TransactionProps = {
  transcations: TransactionModel[]
}

export function Transaction() {
  const { transactions } = useContext(TransactionContext).summary

  return (
    <TransactionContainer>
      <SearchForm />
      <TransactionTable>
        <tbody>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Cteated At</th>
          </tr>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td width={'50%'}>{transaction.description}</td>
              <td>
                <PriceHighLigth variant={transaction.type}>
                  {transaction.priceFormat}
                </PriceHighLigth>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAtFormat}</td>
            </tr>
          ))}
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  )
}
