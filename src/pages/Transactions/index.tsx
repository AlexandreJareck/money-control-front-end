import { Header, Summary } from '@components'
import { Transaction } from 'components/Transaction'
import React from 'react'

export default function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <Transaction />
    </div>
  )
}
