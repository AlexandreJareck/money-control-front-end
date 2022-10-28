import { TransactionContext } from '@contexts'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionModel } from '@models'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateTransaction } from '@services'
import { useContext } from 'react'
import { XSquare } from 'react-feather'
import { ArrowDown, ArrowUp } from 'react-feather'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton
} from './NewTransactionModal.styles'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { fetchSummary } = useContext(TransactionContext)
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { category, description, price, type } = data

    const transaction = new TransactionModel(description, type, category, price)
    const summary = await CreateTransaction(transaction)

    await fetchSummary(summary)

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <CloseButton>
            <XSquare size={28} />
          </CloseButton>
          <Dialog.Title>New Transaction</Dialog.Title>

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="text"
              placeholder="Description"
              required
              {...register('description')}
            />
            <input
              type="text"
              placeholder="Price"
              required
              {...register('price', { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Category"
              required
              {...register('category')}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionType onValueChange={field.onChange} value={field.value}>
                    <TransactionTypeButton variant="income" value="income">
                      <ArrowUp size={24} color={'#00b37e'} />
                      Input
                    </TransactionTypeButton>
                    <TransactionTypeButton variant="outcome" value="outcome">
                      <ArrowDown size={24} color={'#f75a68'} />
                      Output
                    </TransactionTypeButton>
                  </TransactionType>
                )
              }}
            />

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
