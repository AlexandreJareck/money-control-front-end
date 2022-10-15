import { SummaryCard, SummaryContainer } from './Summary.styles'
import { ArrowDown, ArrowUp, DollarSign } from 'react-feather'
import { SummaryModel } from 'models/Summary.model'

type SummaryProps = {
  summary: SummaryModel
}

export function Summary({ summary }: SummaryProps) {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Input</span>
          <ArrowUp size={32} color={'#00b37e'} />
        </header>
        <strong>{summary.depositsFormat}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Output</span>
          <ArrowDown size={32} color={'#f75a68'} />
        </header>
        <strong>{summary.withdrawsFormat}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <DollarSign size={32} color={'#fff'} />
        </header>
        <strong>{summary.totalValueFormat}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
