import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   text-align: left;
   width: 18rem;
   height: 10rem;
   color: transparent;

   /* padding: 0.75rem 0.75rem 0.5rem 0.75rem; */
   border-radius: 0.5rem;
   margin-bottom: 3.75rem;

   transition: all ease 0.2s;

   &:hover {
      transform: scale(1.02);
      color: rgba(226, 226, 226, 1);

      img {
         filter: brightness(0.3);
      }

      button {
         opacity: 1;
      }
   }

   @media (max-width: 768px) {
      align-items: center;
      width: 100%;
      height: auto;
      margin-bottom: 2rem;

      color: rgba(226, 226, 226, 1);
   }

   @media (max-width: 1024px) and (min-width: 768px) {
      align-items: center;
      color: rgba(226, 226, 226, 1);
   }
`;

export const InfoContainer = styled.div`
   width: calc(100% - 2.3rem);
   height: 100%;
   position: relative;
   top: 0;
   left: 0;

   margin-left: 0.75rem;

   h2 {
      /* font-family: "Bebas Neue", sans-serif; */
      text-transform: uppercase;
      font-size: 2.1rem;
      letter-spacing: 0.05rem;

      cursor: pointer;
   }

   @media (max-width: 768px) {
      margin-left: 0;

      h2 {
         font-size: 1.5rem;
         line-height: 2rem;
      }
   }

   @media (max-width: 1024px) and (min-width: 768px) {
      h2 {
         font-size: 2rem;
      }
   }
`;

export const TechsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;

   span {
      display: flex;
      align-items: center;
      margin-top: 0.35rem;

      p {
         font-size: 0.9rem;

         text-transform: capitalize;

         margin-left: 0.5rem;
      }
   }

   @media (max-width: 768px) {
      display: none;
   }

   @media (max-width: 1024px) and (min-width: 768px) {
      display: none;
   }
`;

export const ButtonContainer = styled.div`
   transition: all ease 0.2s;
   margin-top: 1rem;
   display: flex;

   button {
      display: inline-block;
      font-size: 1.15rem;
      background-color: rgba(226, 226, 226, 0.2);
      border: 0;
      opacity: 0;
      padding: 0.25rem 0.5rem;
      margin-right: 0.25rem;
      text-transform: uppercase;

      border: 2px solid transparent;
      border-radius: 0.5rem;

      cursor: pointer;

      a {
         color: #e2e2e2;
         text-decoration: none;
      }

      &:hover {
         border: 2px solid #e2e2e2;
      }
   }

   @media (max-width: 768px) {
      button {
         padding: 0.15rem 0.35rem;
         opacity: 1;
      }
   }

   @media (min-width: 768px) and (max-width: 1024px) {
      button {
         opacity: 1;
      }
   }
`;

export const ImageContainer = styled.div`
   position: absolute;
   width: 17rem;

   img {
      width: 100%;
      height: 12.5rem;
      object-fit: cover;

      opacity: 0.8;
      border-radius: 0.5rem;
      cursor: pointer;
   }

   @media (max-width: 768px) {
      position: relative;

      img {
         width: 9rem;
         height: 6rem;
      }
   }

   @media (min-width: 768px) and (max-width: 1024px) {
      filter: brightness(0.3);
   }
`;
