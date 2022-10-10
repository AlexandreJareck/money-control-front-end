import * as Dialog from '@radix-ui/react-dialog'
import { XSquare } from 'react-feather'
import React from 'react'

import { CloseButton, Content, Overlay } from './styles'

export type ModalProps = {
  children: React.ReactNode
  title?: string
  button?: React.ReactNode
}

export function Modal({
  children,
  title = 'New Transaction3',
  button = <button>open</button>
}: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{button}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay>
          <Content>
            <CloseButton>
              <XSquare />
            </CloseButton>
            <Dialog.Title>{title}</Dialog.Title>
            {children}
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
