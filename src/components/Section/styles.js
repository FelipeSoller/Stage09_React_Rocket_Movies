import styled from 'styled-components'

export const Container = styled.section`
  margin: 4rem 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;

    > a {
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      padding: 1.6rem 3.2rem;
      border-radius: .8rem;
    }

    > h2 {
      color: ${({ theme}) => theme.COLORS.WHITE};
      font-size: 3.2rem;
      font-weight: 400;
      white-space: nowrap;
    }
  }
`


