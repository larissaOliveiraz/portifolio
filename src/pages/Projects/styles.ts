import styled, { css } from "styled-components";

type TechTabProps = {
   active: boolean;
};

export const Container = styled.div``;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   border-bottom: 2px dashed #8f8f8f;

   @media (max-width: 768px) {
      margin-top: -1.5rem;
   }

   @media (max-width: 1024px) and (min-width: 768px) {
      margin-top: -2rem;
   }
`;

export const TechTabContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1.75rem;

   margin-top: 2rem;

   @media (max-width: 768px) {
      justify-content: space-around;
      gap: 1rem;
      margin-top: 0.5rem;
   }
`;

export const TechTab = styled.div<TechTabProps>`
   color: rgba(226, 226, 226, 0.8);
   font-size: 1.25rem;

   border: 2px solid transparent;
   border-radius: 0.5rem;
   padding: 0.5rem 0.75rem;

   /* background-color: rgba(226, 226, 226, 0.1); */

   cursor: pointer;

   &:hover {
      color: #4b67cc;
   }

   ${({ active }) =>
      active &&
      css`
         border: 2px solid #4b67cc;
         color: #4b67cc;
      `}
`;

export const ProjectContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 0.25rem;
   padding: 3rem 0;

   @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 0.25rem 0;
      margin-top: 2rem;
   }

   @media (min-width: 768px) and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
   }
`;

export const ImgContainer = styled.div``;

export const Trigger = styled.div``;

export const HeaderContainer = styled.div``;

export const ContentContainer = styled.div``;
