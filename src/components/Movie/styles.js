import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  border: none;
  border-radius: 10px;

  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    text-align: left;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`