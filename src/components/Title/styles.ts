import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-self: center;

   h1 {
      color: #e2e2e2;
      font-family: "Bebas Neue", sans-serif;
      font-size: 8rem;
      letter-spacing: 4px;
      line-height: 7rem;
      opacity: 0.8;
      text-align: center;

      /* border-bottom: 2px solid #8f8f8f; */
      padding-bottom: 1.5rem;
   }

   @media (max-width: 768px) {
      justify-content: start;
      align-items: flex-start;

      h1 {
         font-size: 5rem;
         line-height: 5rem;
         text-align: center;
      }
   }

   @media (max-width: 1024px) and (min-width: 768px) {
      h1 {
         font-size: 5.5rem;

         line-height: 8rem;
      }
   }
`;
