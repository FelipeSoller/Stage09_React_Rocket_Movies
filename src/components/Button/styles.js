import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme, remove }) => remove ? theme.COLORS.BACKGROUND_800 : theme.COLORS.PINK};
  color: ${({ theme, remove }) => remove ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_400};
  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`