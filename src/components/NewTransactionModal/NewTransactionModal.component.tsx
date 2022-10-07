import * as Dialog from '@radix-ui/react-dialog'
import { XSquare } from 'react-feather'

import { CloseButton, Content, Overlay } from './NewTransactionModal.styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <CloseButton>
            <XSquare />
          </CloseButton>
          <Dialog.Title>New Transaction</Dialog.Title>

          <form action="">
            <input type="text" placeholder="Description" required />
            <input type="text" placeholder="Price" required />
            <input type="text" placeholder="Category" required />

            <button type="submit">Register</button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
