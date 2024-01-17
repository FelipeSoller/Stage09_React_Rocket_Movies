import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.2rem;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;

  > svg {
    margin-right: .8rem;
  }
`