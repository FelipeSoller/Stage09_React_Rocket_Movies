import styled from 'styled-components'

export const Container = styled.span`
  font-size: 1.2rem;
  padding: .5rem 1.4rem;
  border-radius: .5rem;
  margin-right: .6rem;
  color: ${({ theme }) => theme.COLORS.BEIGE_500};
  background-color: ${({ theme, detailsTag }) => (detailsTag ? theme.COLORS.BEIGE_500 : theme.COLORS.BACKGROUND_500)};
`