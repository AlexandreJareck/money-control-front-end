import { SearchForm } from 'components/SearchForm'
import { TransactionModel } from 'models/Transaction.model'
import {
  PriceHighLigth,
  TransactionContainer,
  TransactionTable
} from './Transaction.styles'

export type TransactionProps = {
  transcations: TransactionModel[]
}

export function Transaction({ transcations }: TransactionProps) {
  return (
    <TransactionContainer>
      <SearchForm />
      <TransactionTable>
        <tbody>
          {transcations.map(transaction => (
            <tr key={transaction.id}>
              <td width={'50%'}>{transaction.description}</td>
              <td>
                <PriceHighLigth variant={transaction.type}>
                  {transaction.price}
                </PriceHighLigth>
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  )
}
