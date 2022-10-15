export class DateFormatter {
  private static formatter: Intl.DateTimeFormat

  private constructor() {}

  private static getInstance(): Intl.DateTimeFormat {
    if (!DateFormatter.formatter) {
      DateFormatter.formatter = new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'UTC'
      })
    }

    return DateFormatter.formatter
  }

  public static format(value?: Date) {
    const date = value ? new Date(value.toString()) : new Date()

    return DateFormatter.getInstance().format(date)
  }
}
