import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.1rem;
  text-align: center;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 1rem;
  }
`