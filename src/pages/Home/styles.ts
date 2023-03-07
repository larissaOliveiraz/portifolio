import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
   overflow-x: hidden;
`;

export const ImgContainer = styled.div`
   img {
      position: fixed;
      width: 100vw;
      height: 100%;

      object-fit: cover;
   }
`;

export const HeaderContainer = styled.div`
   width: 100vw;

   position: absolute;
   top: 0;
   left: 0;
   right: 0;
`;

export const ContentContainer = styled.div`
   width: 100vw;
   height: 100%;
   margin: 0 auto;

   position: absolute;
   top: 4rem;
`;

export const HomeContainer = styled.div`
   padding-bottom: 4rem;

   border-bottom: 2px dashed #8f8f8f;

   p {
      font-family: "Bebas Neue", sans-serif;
      font-size: 4rem;
      color: #e2e2e2;
      opacity: 0.8;
      text-align: center;
      line-height: 2rem;
      margin-bottom: 4rem;
   }

   @media (max-width: 768px) {
      padding-bottom: 3rem;

      p {
         line-height: 3.25rem;
         font-size: 3rem;
         margin-top: -1.5rem;
      }
   }
`;

export const Content = styled.div`
   width: 1000px;
   height: fit-content;
   background-color: rgba(0, 0, 0, 0.9);

   display: flex;
   flex-direction: column;
   margin: 0 auto;
   padding: 3.75rem 5.25rem;

   @media (max-width: 768px) {
      width: 100vw;
      padding: 2rem 2rem;
   }

   @media (max-width: 1024px) and (min-width: 768px) {
      width: 90%;
   }
`;

export const TechContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   margin-top: 3rem;

   h2 {
      width: fit-content;
      color: #4b67cc;
      /* font-family: "Bebas Neue", sans-serif; */
      font-size: 2.5rem;
      /* letter-spacing: 3px; */
      line-height: 4rem;
      opacity: 0.8;
   }

   @media (max-width: 768px) {
      align-items: flex-start;

      h2 {
         font-size: 3rem;
         line-height: 3.5rem;
         text-align: center;
      }
   }
`;

export const Tech = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 1.25rem;

   @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
   }

   @media (min-width: 768px) and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
   }
`;

export const TechB = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 1.25rem;

   @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
   }

   @media (min-width: 768px) and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
   }
`;

export const ProjectContainer = styled.div`
   margin-top: 2rem;
`;
