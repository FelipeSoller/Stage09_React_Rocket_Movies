import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 4rem 0;
  }
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 1.2rem;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 12rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > div:first-child {
    align-self: start;
    margin-bottom: 2rem;
  }

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;
    padding-top: 6.4rem;
  }

  > p {
    font-size: 1.6rem;
    margin-top: 1.6rem;
    text-align: justify;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`