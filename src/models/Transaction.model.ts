export class TransactionModel {
  public id: string
  public description: string
  public category: string
  public type: string
  public price: number
  public priceFormat?: string
  public createdAt: string

  constructor(
    description: string = '',
    id: string = '',
    type: string = '',
    category: string = '',
    createdAt: string = '',
    price: number = 0
  ) {
    this.description = description
    this.price = price
    this.id = id
    this.type = type
    this.category = category
    this.createdAt = createdAt
  }
}
