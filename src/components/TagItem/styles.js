import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_600}` : "none"};

  border-radius: 1rem;
  padding-right: 1.5rem;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }


  > input {
    height: 5.5rem;
    width: 100%;

    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`