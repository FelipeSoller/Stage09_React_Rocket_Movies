import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  .wrapperTags {
    width: 100%;
    gap: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    margin-top: 2.4rem;
    padding: 1.6rem;
    border-radius: 10px;
  }
`

export const BackButton = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
`

export const Form = styled.form`
  margin: 38px auto;
  padding: 0 12.5rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100}
    }
  }
`

export const Wrap = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 4rem;
`
