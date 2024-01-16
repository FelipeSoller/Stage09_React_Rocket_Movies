import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;



  > a {
    margin-top: 12.5rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center/cover;
`
