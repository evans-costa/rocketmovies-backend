import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  border-radius: 1rem;

  > input {
    width: 100%;
    height: 5.6rem;

    padding: 0 2.4rem;

    background: transparent;
    border: none;
    outline: none;

    font-family: 'Roboto Slab', serif;
    color: ${({ theme }) => theme.COLORS.WHITE_900}; 

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`