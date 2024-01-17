import styled from 'styled-components'

export const Container = styled.section`
  margin: 4rem 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;

    > div {
      display: flex;
      align-items: center;
    }

    > h2 {
      color: ${({ theme}) => theme.COLORS.WHITE};
      font-size: 3.2rem;
      font-weight: 400;
      white-space: nowrap;
    }
  }
`


