import { useEffect, useState } from "react";
import { Container, TabLink } from "./styles";

export const Header = () => {
   const [headerScroll, setHeaderScroll] = useState(false);
   const [activeTab, setActiveTab] = useState<"home" | "projects" | "contact">(
      "home"
   );

   useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("scroll", () =>
            setHeaderScroll(window.pageYOffset > 75)
         );
      }
   }, []);

   useEffect(() => {
      if (typeof window !== "undefined") {
         window.addEventListener("scroll", () => {
            if (window.scrollY > 1500) {
               setActiveTab("contact");
            } else if (window.scrollY >= 800 && window.scrollY < 1800) {
               setActiveTab("projects");
            } else if (window.scrollY >= 0 && window.screenY < 800) {
               setActiveTab("home");
            }
         });
      }
   }, []);

   const handleHome = () => {
      setActiveTab("home");
   };

   const handleProjects = () => {
      setActiveTab("projects");
      let divSelect = document.getElementById("projects");
      divSelect?.scrollIntoView();
   };

   const handleContact = () => {
      setActiveTab("contact");
      let divSelect = document.getElementById("contact");
      divSelect?.scrollIntoView();
   };

   return (
      <div>
         <Container roll={headerScroll}>
            <TabLink
               href="#"
               active={activeTab === "home"}
               onClick={handleHome}
            >
               Home
            </TabLink>

            <TabLink active={activeTab === "projects"} onClick={handleProjects}>
               Projetos
            </TabLink>

            <TabLink active={activeTab === "contact"} onClick={handleContact}>
               Contato
            </TabLink>
         </Container>
      </div>
   );
};
