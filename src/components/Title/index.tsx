import { Container } from "./styles";

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};
