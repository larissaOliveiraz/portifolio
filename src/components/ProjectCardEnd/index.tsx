import { Atom, FileTs, PaintBrush } from "phosphor-react";
import { Container, InfoContainer, ImageContainer } from "./styles";

type Props = {
  title: string;
  image: string;
};

export const ProjectCardEnd = ({ title, image }: Props) => {
  return (
    <Container>
      <InfoContainer>
        <h2>{title}</h2>
        <div>
          <span>
            <p>react</p>
            <Atom size={14} />
          </span>
          <span>
            <p>typescript</p>
            <FileTs size={14} />
          </span>
          <span>
            <p>styled-components</p>
            <PaintBrush size={14} />
          </span>
        </div>
      </InfoContainer>
      <ImageContainer>
        <img src={image} alt="" />
      </ImageContainer>
    </Container>
  );
};
