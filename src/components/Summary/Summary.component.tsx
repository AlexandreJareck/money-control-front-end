import { SummaryCard, SummaryContainer } from './Summary.styles'
import { ArrowDown, ArrowUp, DollarSign } from 'react-feather'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Input</span>
          <ArrowUp size={32} color={'#00b37e'} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Output</span>
          <ArrowDown size={32} color={'#f75a68'} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <DollarSign size={32} color={'#fff'} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
