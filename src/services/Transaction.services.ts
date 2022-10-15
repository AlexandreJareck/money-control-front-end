import { SummaryModel, TransactionModel } from '@models'
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
