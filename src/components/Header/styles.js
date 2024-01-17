import styled from "styled-components"

export const Container = styled.header`
  height: 10.5rem;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.5rem;
  gap: 6.5rem;

  > h1 {
    white-space: nowrap;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;

  > img {
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  }

  > div {
    display: flex;
    flex-direction: column;

    a {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_600};
      text-decoration: none;
    }

    strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`