import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  grid-area: button;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4.8rem;
  padding: 1.6rem;

  background-color: ${({ theme, isDelete }) =>
		isDelete ? theme.COLORS.BACKGROUND_SECONDARY : theme.COLORS.PINK};
  border-radius: 8px;

  color: ${({ theme, isDelete }) =>
		isDelete ? theme.COLORS.PINK : theme.COLORS.GRAY_BUTTON};
  font-size: 1.6rem;
  
  > svg {
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_BUTTON};
  }
`;
