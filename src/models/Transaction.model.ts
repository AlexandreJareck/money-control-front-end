export class Transaction {
  public id: string
  public description: string
  public category: string
  public type: string
  public price?: number
  public createdAt: string

  constructor(
    description: string = '',
    id: string = '',
    type: string = '',
    category: string = '',
    createdAt: string = ''
  ) {
    this.description = description
    this.price = 0
    this.id = id
    this.type = type
    this.category = category
    this.createdAt = createdAt
  }
}
