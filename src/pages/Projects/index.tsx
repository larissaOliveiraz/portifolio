import { useEffect, useState } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { Title } from "../../components/Title";
import { Project } from "../../utils/Projects";
import ProjectsInfo from "../../utils/Projects";

import {
   Container,
   Content,
   TechTabContainer,
   TechTab,
   ProjectContainer,
} from "./styles";

export const Projects = () => {
   const [tech, setTech] = useState<"all" | "react" | "next">("all");
   const [projectData, setProjectData] = useState<Project[]>([]);

   useEffect(() => {
      setProjectData(ProjectsInfo);
   }, []);

   return (
      <Container>
         {/* CONTENT */}
         <Content>
            {/* TITLE */}
            <Title title="Projetos" />

            {/* TECH TAB NAVIGATION */}
            <TechTabContainer>
               <TechTab active={tech === "all"} onClick={() => setTech("all")}>
                  Todos
               </TechTab>
               <TechTab
                  active={tech === "react"}
                  onClick={() => setTech("react")}
               >
                  ReactJS
               </TechTab>
               <TechTab
                  active={tech === "next"}
                  onClick={() => setTech("next")}
               >
                  NextJS
               </TechTab>
            </TechTabContainer>

            {/* PROJECTS */}
            <ProjectContainer>
               {tech === "all" &&
                  projectData.map((item) => (
                     <ProjectCard
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        techs={[item.techs[0], item.techs[1], item.techs[2]]}
                        site={item.site}
                        github={item.repository}
                     />
                  ))}

               {projectData.map(
                  (item) =>
                     tech === item.techs[0] && (
                        <ProjectCard
                           key={item.id}
                           title={item.title}
                           image={item.image}
                           techs={[item.techs[0], item.techs[1], item.techs[2]]}
                           site={item.site}
                           github={item.repository}
                        />
                     )
               )}
            </ProjectContainer>
            <div id="contact"></div>
         </Content>
      </Container>
   );
};
