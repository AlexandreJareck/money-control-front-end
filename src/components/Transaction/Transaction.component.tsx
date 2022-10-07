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
            <td width={'50%'}>Web Delepoment</td>
            <td>
              <PriceHighLigth variant="income">$ 12.000,00</PriceHighLigth>
            </td>
            <td>Sale</td>
            <td>01/10/2022</td>
          </tr>

          <tr>
            <td width={'50%'}>Fast Food</td>
            <td>
              <PriceHighLigth variant="outcome">- $ 59,00</PriceHighLigth>
            </td>
            <td>Sale</td>
            <td>03/10/2022</td>
          </tr>
        </tbody>
      </TransactionTable>
    </TransactionContainer>
  )
}
