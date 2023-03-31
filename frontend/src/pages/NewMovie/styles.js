import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  max-width: 114rem;
  margin: 0 auto;

  .input-wrapper {
    display: flex;
    gap: 4rem;
    width: 100%;
  }
`