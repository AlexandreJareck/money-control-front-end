import { Header, Summary, Transaction } from '@components'
import { TransactionsProvider } from '@contexts'
import { SummaryModel } from '@models'
import React from 'react'
import { GetTransactions } from 'services'

type TransactionsProps = {
  summary: SummaryModel
}

export default function Transactions({ summary }: TransactionsProps) {
  return (
    <div>
      <Header />
      <TransactionsProvider summary={summary}>
        <Summary />
        <Transaction />
      </TransactionsProvider>
    </div>
  )
}

export async function getServerSideProps() {
  const summary = await GetTransactions()
  return {
    props: {
      summary
    }
  }
}
