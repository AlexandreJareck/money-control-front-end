import { SummaryModel, TransactionModel } from '@models'
import { Api } from './Api'

type TransactionProps = {
  data: TransactionModel[]
  succes: boolean
}

export async function GetTransactions(): Promise<SummaryModel> {
  const { data: model } = await Api.get<TransactionProps>(`transaction/get-transactions`)

  const summary = createSummary(model.data)

  return summary
}

export async function GetTransactionsByQuery(q: string): Promise<SummaryModel> {
  const { data: model } = await Api.get<TransactionProps>(
    `transaction/get-transactions-query?q=${q}`
  )
  const summary = createSummary(model.data)

  return summary
}

export async function CreateTransaction(
  transaction: TransactionModel
): Promise<SummaryModel> {
  const { data: model } = await Api.post<TransactionProps>('transaction', {})
  const summary = createSummary(model.data)

  return summary
}

function createSummary(data: TransactionModel[]) {
  const summary = new SummaryModel(data)
  const summaryJson = summary.toJSON as SummaryModel

  return summaryJson
}
