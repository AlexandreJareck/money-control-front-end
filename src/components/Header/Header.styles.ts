import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
  `}
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    gap: 0.5rem;
    flex-direction: column;
  }
`

export const NewTransactionButton = styled.button`
  ${({ theme }) => css`
    height: 50px;
    border: 0;
    background: ${theme['green-500']};
    color: ${theme['gray-100']};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${theme['green-700']};
      transition: background 0.2s;
    }
  `}
`
