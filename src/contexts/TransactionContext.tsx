import { SummaryModel } from 'models/Summary.model'
import React, { createContext } from 'react'

interface TransactionsContextType {
  summary: SummaryModel
}

interface TransactionsProviderProps {
  children: React.ReactNode
  summary: SummaryModel
}

export const TransactionContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children, summary }: TransactionsProviderProps) {
  return (
    <TransactionContext.Provider value={{ summary: summary }}>
      {children}
    </TransactionContext.Provider>
  )
}
