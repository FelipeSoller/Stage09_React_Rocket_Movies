import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 27.5rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: .8rem;
  border-radius: 1rem;
  padding: 1.6rem;

  &::placeholder {
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  }
`