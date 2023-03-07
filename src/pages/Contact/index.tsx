import {
   Container,
   Content,
   ContactContainer,
   ContentContainer,
} from "./styles";
import { Title } from "../../components/Title";
import {
   EnvelopeSimple,
   GithubLogo,
   LinkedinLogo,
   WhatsappLogo,
} from "phosphor-react";

export const Contact = () => {
   return (
      <Container>
         <ContentContainer>
            <Content>
               <Title title="Contatos" />

               <ContactContainer>
                  <div>
                     <EnvelopeSimple size={32} color="#4b67cc" />
                     <span>oliveira.larissa.dv@gmail.com</span>
                  </div>
                  <div>
                     <WhatsappLogo size={32} color="#4b67cc" />
                     <span>(11) 98129-6041</span>
                  </div>
                  <div>
                     <GithubLogo size={32} color="#4b67cc" />
                     <a
                        href="https://github.com/larissaOliveiraz"
                        target="_blank"
                        rel=" noreferrer"
                     >
                        <span>https://github.com/larissaOliveiraz</span>
                     </a>
                  </div>
                  <div>
                     <LinkedinLogo size={32} color="#4b67cc" />
                     <a
                        href="https://www.linkedin.com/in/larissa-oliveira-a04611238/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <span>
                           https://www.linkedin.com/in/larissa-oliveira-a04611238
                        </span>
                     </a>
                  </div>
               </ContactContainer>
            </Content>
         </ContentContainer>
      </Container>
   );
};
