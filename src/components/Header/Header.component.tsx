import { HeaderContainer, HeaderContent, NewTransactionButton } from './Header.styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '@assets/Logo.svg'
import Image from 'next/image'
import { NewTransactionModal } from 'components/NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={logoImg} alt="Logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
