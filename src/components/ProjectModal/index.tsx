import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import { CloseButton, Content, Title, Overlay, TechInfo } from "./styles";

type Props = {
  name: string;
  images: string[];
  description: string;
  site: string;
  repository: string;
};

export function ProjectModal({
  name,
  images,
  description,
  site,
  repository,
}: Props) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title>{name}</Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <TechInfo>
          <h3>Tecnologias utilizadas :</h3>
          <div>
            <img src={images[0]} alt="" />
            <img src={images[1]} alt="" style={{ color: "#fff" }} />
            <img src={images[2]} alt="" />
          </div>
          <h3>Descrição :</h3>
          <p>{description}</p>

          <span>
            <a href={repository} target="_blank" rel="noreferrer">
              Repositório Github
            </a>
            <a href={site} target="_blank" rel="noreferrer">
              Ver site
            </a>
          </span>
        </TechInfo>
      </Content>
    </Dialog.Portal>
  );
}
