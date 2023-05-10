import { Header } from "../../components/Header";
import {
   Container,
   Content,
   TechContainer,
   ImgContainer,
   HeaderContainer,
   ContentContainer,
   HomeContainer,
   Tech,
   TechB,
} from "./styles";
import bg1 from "../../assets/bg2.jpg";
import { Title } from "../../components/Title";
import { Techs } from "../../components/Techs";
import { Projects } from "../Projects";
import { Contact } from "../Contact";
const jsIcon: string = require("../../assets/javascript.svg").default;
const tsIcon: string = require("../../assets/typescript.svg").default;
const reactIcon: string = require("../../assets/react.svg").default;
const htmlIcon: string = require("../../assets/html.svg").default;
const nextIcon: string = require("../../assets/next.svg").default;
const cssIcon: string = require("../../assets/css.svg").default;
const tailIcon: string = require("../../assets/tailwind.svg").default;
const pythonIcon: string = require("../../assets/python.svg").default;
const javaIcon: string = require("../../assets/java.svg").default;
const brushIcon: string = require("../../assets/brush.svg").default;

export const Home = () => {
   return (
      <Container>
         <ImgContainer>
            <img src={bg1} alt="" />
         </ImgContainer>
         <HeaderContainer>
            <Header />
         </HeaderContainer>
         <ContentContainer>
            <Content id="home">
               <HomeContainer>
                  <Title title="Larissa Oliveira" />
                  <p>Front-end Developer</p>
                  <TechContainer>
                     <h2>Tecnologias Front-end:</h2>
                     <Tech>
                        <Techs techIcon={jsIcon} techName="Javascript" />
                        <Techs techIcon={reactIcon} techName="React" />
                        <Techs techIcon={htmlIcon} techName="HTML" />
                        <Techs techIcon={tailIcon} techName="TailwindCSS" />
                        <Techs techIcon={tsIcon} techName="Typescript" />
                        <Techs techIcon={nextIcon} techName="NextJS" />
                        <Techs techIcon={cssIcon} techName="CSS" />
                        <Techs
                           techIcon={brushIcon}
                           techName="Styled Components"
                        />
                     </Tech>
                  </TechContainer>
                  <TechContainer>
                     <h2>Tecnologias Back-end:</h2>
                     <TechB>
                        <Techs techIcon={javaIcon} techName="Java (Spring)" />
                        <Techs techIcon={nextIcon} techName="NextJS" />
                     </TechB>
                  </TechContainer>
               </HomeContainer>

               <div id="projects" style={{ marginBottom: 100 }}></div>
               <Projects />

               <Contact />
            </Content>
         </ContentContainer>
      </Container>
   );
};
