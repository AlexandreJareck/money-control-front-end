import { Header, Summary, Transaction } from '@components'
import { SummaryModel } from 'models/Summary.model'
import React from 'react'
import { GetTransactions } from 'services'

type TransactionsProps = {
  summary: SummaryModel
}

export default function Transactions({ summary }: TransactionsProps) {
  return (
    <div>
      <Header />
      <Summary summary={summary} />
      <Transaction transcations={summary.transactions} />
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
