import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  h2 {
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.7rem;
    align-self: flex-start;

    margin-top: 2.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE_900};
  }
`