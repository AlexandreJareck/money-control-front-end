import { SearchForm } from 'components/SearchForm'
import {
  PriceHighLigth,
  TransactionContainer,
  TransactionTable
} from './Transaction.styles'

export function Transaction() {
  return (
    <TransactionContainer>
      <SearchForm />
      <TransactionTable>
        <tbody>
          <tr>
            <td width={'50%'}>Desenvolvimento de site</td>
            <td>
              <PriceHighLigth variant="income">R$ 12.000,00</PriceHighLigth>
            </td>
            <td>Venda</td>
            <td>01/10/2022</td>
          </tr>

          <tr>
            <td width={'50%'}>Almoço</td>
            <td>
              <PriceHighLigth variant="outcome">- R$ 59,00</PriceHighLigth>
            </td>
            <td>Venda</td>
            <td>03/10/2022</td>
          </tr>
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  )
}
