import { SummaryModel } from 'models/Summary.model'
import { TransactionModel } from 'models/Transaction.model'
import { Api } from './Api'

type TransactionProps = {
  data: TransactionModel[]
  succes: boolean
}

export async function GetTransactions(): Promise<SummaryModel> {
  const { data } = await Api.get<TransactionProps>(`transaction/get-transactions`, {})

  const summary = new SummaryModel(data.data)

  const result = summary.toJSON as SummaryModel

  return result
}
