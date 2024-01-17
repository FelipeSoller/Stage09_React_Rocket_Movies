import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 12.5rem;
  overflow-y: auto;
`