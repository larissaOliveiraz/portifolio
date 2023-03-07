import deliveryImg from "../assets/delivery.jpg";
import bookImg from "../assets/book.jpg";
import airbnbImg from "../assets/airbnb-clone-img.png";

const jsIcon: string = require("../assets/javascript.svg").default;
const tsIcon: string = require("../assets/typescript.svg").default;
const reactIcon: string = require("../assets/react.svg").default;
const nextIcon: string = require("../assets/next.svg").default;
const brushIcon: string = require("../assets/brush.svg").default;

export type Project = {
   id: string;
   title: string;
   techs: string[];
   description: string;
   image: string;
   icons: string[];
   repository: string;
   site: string;
};

const ProjectsInfo: Project[] = [
   {
      id: "1",
      title: "Airbnb-clone",
      techs: ["next", "Javascript", "Tailwind"],
      description: "Clone simples do front-end do site da Airbnb",
      image: airbnbImg,
      icons: [nextIcon, jsIcon, brushIcon],
      repository: "https://github.com/larissaOliveiraz/airbnb-cl",
      site: "https://airbnb-clone-ten-pi.vercel.app",
   },
   {
      id: "2",
      title: "TO-DO",
      techs: ["react", "Typescript", "Tailwind"],
      description: "Sistema de gerenciamento de tarefas.",
      image: bookImg,
      icons: [reactIcon, tsIcon, brushIcon],
      repository: "/",
      site: "/",
   },
   {
      id: "3",
      title: "Finanças",
      techs: ["react", "Typescript", "Styled-Components"],
      description:
         "Sistema de controle financeiro. Controle e organização de ganhos e gastos.",
      image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
      icons: [reactIcon, tsIcon, brushIcon],
      repository: "/",
      site: "/",
   },
   {
      id: "4",
      title: "Finanças",
      techs: ["react", "Typescript", "Styled-Components"],
      description:
         "Sistema de controle financeiro. Controle e organização de ganhos e gastos.",
      image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
      icons: [reactIcon, tsIcon, brushIcon],
      repository: "/",
      site: "/",
   },
   {
      id: "5",
      title: "NextDelivery",
      techs: ["next", "Typescript", "Css-Modules"],
      description:
         "Sistema de delivery que pode ser customizado com informações dinâmicas de cada cliente",
      image: deliveryImg,
      icons: [nextIcon, tsIcon, brushIcon],
      repository: "/",
      site: "/",
   },
   {
      id: "6",
      title: "TO-DO",
      techs: ["react", "Typescript", "Tailwind"],
      description: "Sistema de gerenciamento de tarefas.",
      image: bookImg,
      icons: [reactIcon, tsIcon, brushIcon],
      repository: "/",
      site: "/",
   },
];

export default ProjectsInfo;
