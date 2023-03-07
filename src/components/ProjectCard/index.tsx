import { Atom, FileTs, PaintBrush } from "phosphor-react";
import {
   Container,
   InfoContainer,
   ImageContainer,
   ButtonContainer,
   TechsContainer,
} from "./styles";

type Props = {
   title: string;
   image: string;
   techs: string[];
   site: string;
   github: string;
};

export const ProjectCard = ({ title, image, techs, site, github }: Props) => {
   return (
      <Container>
         <ImageContainer>
            <img src={image} alt="" />
         </ImageContainer>
         <InfoContainer>
            <h2>{title}</h2>
            <TechsContainer>
               <span>
                  <Atom size={14} /> <p>{techs[0]}</p>
               </span>
               <span>
                  <FileTs size={14} /> <p>{techs[1]}</p>
               </span>
               <span>
                  <PaintBrush size={14} /> <p>{techs[2]}</p>
               </span>
            </TechsContainer>
            <ButtonContainer>
               <button>
                  <a href={github}>Github</a>
               </button>
               <button>
                  <a href={site}>Site</a>
               </button>
            </ButtonContainer>
         </InfoContainer>
      </Container>
   );
};
