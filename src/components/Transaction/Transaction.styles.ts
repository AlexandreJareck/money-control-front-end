import styled, { css } from 'styled-components'

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  th {
    text-align: justify;
    padding: 0rem 2rem;
  }

  td {
    padding: 1.25rem 2rem;
    text-align: justify;
    background: ${props => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media (max-width: 760px) {
    thead,
    tbody,
    td,
    tr {
      display: block;
    }

    th {
      display: none;
    }

    thead tr {
      position: absolute;
    }

    tr {
      padding: 0 0 2rem 0;
    }

    td {
      border: none;
      width: 100%;
      align-items: center;
    }

    td:nth-of-type(1):before {
      content: 'Description: ';
    }
    td:nth-of-type(2):before {
      content: 'Amount: ';
    }
    td:nth-of-type(3):before {
      content: 'Categoty: ';
    }
    td:nth-of-type(4):before {
      content: 'Created At: ';
    }
  }
`

interface PriceHighLigthProps {
  variant: string
}

export const PriceHighLigth = styled.span<PriceHighLigthProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'income' ? theme['green-300'] : theme['red-300']};
  `}
`
