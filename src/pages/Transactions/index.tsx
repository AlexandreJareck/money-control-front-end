import { Header, Summary, Transaction } from '@components'
import React from 'react'
import { GetTransactions } from 'services'

export default function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <Transaction />
    </div>
  )
}

export async function getServerSideProps() {
  const transcations = await GetTransactions()
  return {
    props: {}
  }
}
