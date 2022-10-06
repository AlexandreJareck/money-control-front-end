import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton
} from './Header.styles'

import logoImg from '@assets/Logo.svg'
import Image from 'next/image'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={logoImg} alt="Logo" />
        <NewTransactionButton>New Transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
