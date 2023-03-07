import styled from "styled-components";

export const Container = styled.div``;

export const ContentContainer = styled.div``;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 4rem;
   height: calc(100vh - 7rem);

   @media (max-width: 768px) {
      padding: 4.5rem 0;
      text-align: left;
   }

   @media (max-width: 1024px) and (min-width: 768px) {
      padding: 3.75rem 0;
   }
`;

export const ContactContainer = styled.div`
   margin-top: 3rem;

   color: #e2e2e2;
   opacity: 0.9;
   font-size: 1.25rem;

   div {
      display: flex;
      align-items: center;

      margin-bottom: 1.5rem;
      background-color: rgba(226, 226, 226, 0.1);
      padding: 0.25rem 0.5rem;

      border-radius: 0.5rem;
   }

   a {
      text-decoration: none;
   }

   span {
      margin-left: 1rem;
      color: #e2e2e2;
      opacity: 0.9;
   }

   @media (max-width: 768px) {
      font-size: 1rem;
   }

   @media (max-width: 1024px) and (min-width: 768px) {
      width: 80%;
   }
`;
