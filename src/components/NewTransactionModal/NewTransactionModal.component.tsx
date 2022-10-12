import * as Dialog from '@radix-ui/react-dialog'
import { XSquare } from 'react-feather'
import { ArrowDown, ArrowUp } from 'react-feather'

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton
} from './NewTransactionModal.styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <CloseButton>
            <XSquare size={28} />
          </CloseButton>
          <Dialog.Title>New Transaction</Dialog.Title>

          <form action="">
            <input type="text" placeholder="Description" required />
            <input type="text" placeholder="Price" required />
            <input type="text" placeholder="Category" required />

            <TransactionType>
              <TransactionTypeButton variant="income" value="income">
                <ArrowUp size={24} color={'#00b37e'} />
                Input
              </TransactionTypeButton>
              <TransactionTypeButton variant="outcome" value="outcome">
                <ArrowDown size={24} color={'#f75a68'} />
                Output
              </TransactionTypeButton>
            </TransactionType>

            <button type="submit">Register</button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
