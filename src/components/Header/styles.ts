import styled, { css } from "styled-components";

type ContainerProps = {
   roll: boolean;
};

type TabLinkProps = {
   active: boolean;
};

export const Container = styled.div<ContainerProps>`
   display: flex;
   align-items: center;
   justify-content: center;

   width: 100vw;
   margin: 0 auto;

   position: fixed;
   top: 0;

   z-index: 99;

   padding: 0.25rem 1.5rem;
   padding-top: 1rem;

   transition: all ease 0.5s;

   background-color: #000;
   opacity: 0.9;

   ${({ roll }) =>
      roll &&
      css`
         background-color: #000;
         opacity: 0.9;
      `}
`;

export const TabLink = styled.a<TabLinkProps>`
   text-decoration: none;

   color: #e2e2e2;
   border: 1.5px solid transparent;
   border-radius: 0.5rem;

   font-weight: 500;
   font-size: 1.15rem;

   cursor: pointer;

   padding: 0.5rem 0.75rem;
   margin: 0 0.75rem;

   transition: all ease 0.2s;

   &:hover:not(.active) {
      color: #4b67cc;
      transform: scale(1.05);
   }

   ${({ active }) =>
      active &&
      css`
         color: #4b67cc;
         transform: scale(1.1);
         border: 1px solid #4b67cc;
         font-weight: 600;
      `}
`;
