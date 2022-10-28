export class TransactionModel {
  public id: string
  public description: string
  public category: string
  public type: string
  public price: number
  public priceFormat?: string
  public createdAt?: Date
  public createdAtFormat?: string

  constructor(
    description: string = '',
    type: string = '',
    category: string = '',
    price: number = 0,
    id: string = ''
  ) {
    this.description = description
    this.price = price
    this.id = id
    this.type = type
    this.category = category
  }

  get toJSON() {
    return {
      id: this.id,
      description: this.description,
      type: this.type,
      category: this.category,
      price: this.price
    }
  }
}
