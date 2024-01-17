import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: .6rem;
  margin-top: .8rem;
  margin-bottom: 1.5rem;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;