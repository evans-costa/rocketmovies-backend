import styled from "styled-components";

export const Container = styled.section`
  > h3 {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 4.2rem;
    align-self: flex-start;

    color: ${({ theme }) => theme.COLORS.WHITE}
  }
`