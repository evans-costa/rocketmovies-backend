import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.4rem;

  padding: 2.4rem 12.3rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_BORDER};
  font-family: 'Roboto Slab', serif;

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > div {
    display: flex;
    flex-direction: column;

    font-size: 1.4rem;
    line-height: 1.8rem;

    strong {
      width: max-content;
      color: ${({ theme }) => theme.COLORS.WHITE_900};
      font-weight: 700;
    }

    a {
      text-align: end;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-weight: 400;
    }
  }

  > img {
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_BORDER};
    border-radius: 50%;

    width: 6.4rem;
    height: 6.4rem;
  }
`