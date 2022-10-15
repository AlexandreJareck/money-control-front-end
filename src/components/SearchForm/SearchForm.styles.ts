import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${_ => _.theme['gray-900']};
    color: ${_ => _.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${_ => _.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${_ => _.theme['green-300']};
    color: ${_ => _.theme['green-300']};
    border-radius: 6px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:dislabled):hover {
      background: ${_ => _.theme['green-500']};
      border-color: ${_ => _.theme['green-500']};
      color: ${_ => _.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
