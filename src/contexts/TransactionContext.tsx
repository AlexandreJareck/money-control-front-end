import { GetTransactions, GetTransactionsByQuery } from '@services'
import { SummaryModel } from 'models/Summary.model'
import React, { createContext, useState } from 'react'

interface TransactionsContextType {
  summary: SummaryModel
  // eslint-disable-next-line no-unused-vars
  fetchTransactions: (q: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode
  summary: SummaryModel
}

export const TransactionContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children, summary }: TransactionsProviderProps) {
  const [_summary, setSummary] = useState(summary)

  async function fetchTransactions(q?: string) {
    if (q) {
      setSummary(await GetTransactionsByQuery(q))
      return
    }

    setSummary(await GetTransactions())
  }

  return (
    <TransactionContext.Provider value={{ summary: _summary, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
