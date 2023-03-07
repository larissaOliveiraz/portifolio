import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Content = styled(Dialog.Content)`
  width: 35rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: rgba(0, 0, 17, 0.9);
  color: #e2e2e2;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 90%;
    padding: 2.5rem 1.5rem;
  }
`;

export const Title = styled(Dialog.Title)`
  width: fit-content;
  border-bottom: 1px solid #e2e2e2;
  font-family: "Bebas Neue", sans-serif;
  font-size: 2rem;
  font-weight: 40;
  letter-spacing: 5px;
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  color: #e2e2e2;
  opacity: 0.5;

  cursor: pointer;

  transition: all ease 0.2s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    right: 1rem;
  }
`;

export const TechInfo = styled.div`
  color: #e2e2e2;

  h3 {
    font-size: 1rem;
    font-weight: 500;

    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  div {
    img {
      width: 3rem;
      margin-right: 0.75rem;
    }
  }

  p {
    width: 100%;
    font-size: 1rem;
    opacity: 0.8;

    margin-bottom: 2rem;
  }

  span {
    a {
      background-color: rgba(226, 226, 226, 0.1);
      border-radius: 0.5rem;
      color: rgba(226, 226, 226, 0.7);

      font-weight: 600;
      text-transform: uppercase;
      text-decoration: none;

      cursor: pointer;

      padding: 0.5rem 0.75rem;
      margin-right: 1rem;

      transition: all ease 0.2s;

      &:hover {
        background-color: rgba(226, 226, 226, 0.3);
        color: #e2e2e2;
      }
    }
  }

  @media (max-width: 768px) {
    p {
      margin-bottom: 1.5rem;
    }

    a {
      display: block;
      margin-top: 0.5rem;
      text-align: center;
    }
  }
`;
