import { Transaction } from 'models/transaction.model'
import { Api } from './api'

export async function GetTransactions(): Promise<Transaction[]> {
  const { data } = await Api.get<Transaction[]>(`transaction/get-transactions`, {})

  console.log(data)

  return data
}
