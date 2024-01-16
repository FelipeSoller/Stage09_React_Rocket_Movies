import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4.2rem;
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  font-size: 16px;

  > svg {
    margin-right: .8rem;
  }
`