import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  max-width: 114rem;
  margin: 0 auto;
  

  .title {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 4rem;

    > h2 {
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 4.2rem;

      color: ${({ theme }) => theme.COLORS.WHITE}
    }
  }
`