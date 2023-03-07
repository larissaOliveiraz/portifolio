import React from "react";
import { Container } from "./styles";

type Props = {
   techIcon: string;
   techName: string;
};

export const Techs = ({ techIcon, techName }: Props) => {
   return (
      <Container>
         <img src={techIcon} alt="" />
         <span>{techName}</span>
      </Container>
   );
};
