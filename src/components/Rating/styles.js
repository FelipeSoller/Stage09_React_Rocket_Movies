import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;