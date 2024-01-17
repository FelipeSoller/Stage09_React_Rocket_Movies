import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 14.5rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    padding: 0 12.5rem;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -12.5rem auto 3.2rem;
  width: 18.5rem;
  height: 18.5rem;

  > img {
    border-radius: 50%;
    width: 18.5rem;
    height: 18.5rem;
  }

  > label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    position: absolute;
    bottom: .7rem;
    right: .7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    }
  }
`