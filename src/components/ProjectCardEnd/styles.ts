import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 3rem;
  text-align: right;

  padding: 0.75rem 0.75rem 0.5rem 0.75rem;
  border-radius: 0.5rem;

  transition: all ease 0.2s;

  &:hover {
    transform: scale(1.07);
    background-color: rgba(143, 143, 143, 0.1);
  }
`;

export const InfoContainer = styled.div`
  margin-right: 0.75rem;

  h2 {
    color: #e2e2e2;
    font-family: "Bebas Neue", sans-serif;
    font-size: 3rem;
    letter-spacing: 0.25rem;

    margin-bottom: 0.25rem;

    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: end;

    span {
      display: flex;
      align-items: center;
      color: #e2e2e2;
      margin-bottom: 0.35rem;

      p {
        font-size: 0.9rem;
        opacity: 0.7;

        text-transform: capitalize;

        margin-right: 0.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;

      line-height: 2rem;
    }

    div {
      display: none;
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 12rem;
    opacity: 0.4;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    img {
      width: 8rem;
    }
  }
`;
