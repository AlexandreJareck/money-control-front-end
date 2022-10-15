import { MoneyFormatter } from './../utils/MoneyFormat'
import { TransactionModel } from './Transaction.model'

export class SummaryModel {
  totalValue: number
  deposits: number
  withdraws: number
  totalValueFormat?: string
  depositsFormat?: string
  withdrawsFormat?: string
  transactions: TransactionModel[]

  constructor(transactions = [] as TransactionModel[]) {
    this.transactions = transactions
    this.totalValue = 0
    this.deposits = 0
    this.withdraws = 0

    transactions.forEach(transaction => {
      if (this.isDeposit(transaction.type)) this.calculateDeposit(transaction.price)
      else this.calculateWhitdraw(transaction.price)
    })
  }

  private isDeposit(type: string) {
    return type === 'income'
  }

  private calculateDeposit(price: number) {
    this.deposits += price
    this.totalValue += price
  }

  private calculateWhitdraw(price: number) {
    this.withdraws += price
    this.totalValue -= price
  }

  private moneyFormatter(value: number) {
    return MoneyFormatter.format(value)
  }

  get toJSON() {
    return {
      transactions: this.transactions,
      totalValue: this.totalValue,
      deposits: this.deposits,
      withdraws: this.withdraws,
      totalValueFormat: this.moneyFormatter(this.totalValue),
      depositsFormat: this.moneyFormatter(this.deposits),
      withdrawsFormat: this.moneyFormatter(this.withdraws)
    }
  }
}
