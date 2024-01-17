import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
  margin-top: 2.4rem;
`
export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  > img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  strong {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`
