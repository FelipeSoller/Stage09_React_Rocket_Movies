import styled from 'styled-components'

export const Container = styled.div`
  > a {
    display: flex;
    justify-content: center;
    gap: .8rem;
    margin-top: 4.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.6rem;
  }

  > svg {
    margin-right: .8rem;
  }
`