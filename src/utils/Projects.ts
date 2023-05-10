import todoImg from "../assets/to-do-app-img.png";
import bookNextImg from "../assets/book-next-site.png";
import streamNextImg from "../assets/stream-next-site.png";
import portifolioImg from "../assets/portifolio-img.png";
import financeImg from "../assets/finance-app-image.png";

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
      title: "Finance Control",
      techs: ["next", "Typescript", "TailwindCSS"],
      description:
         "Sistema de controle financeiro, cadastre seus ganhos e gastos do mês.",
      image: financeImg,
      icons: [reactIcon, tsIcon, brushIcon],
      repository: "https://github.com/larissaOliveiraz/finance-next",
      site: "https://finance-next-delta.vercel.app",
   },
   {
      id: "5",
      title: "TO-DO",
      techs: ["react", "Typescript", "Css-Modules"],
      description:
         "Sistema de gerenciamento de tarefas. Veja, adicione, altere e delete suas tarefas.",
      image: todoImg,
      icons: [reactIcon, tsIcon, brushIcon],
      repository: "https://github.com/larissaOliveiraz/to-do-react",
      site: "https://to-do-app-sandy-kappa.vercel.app",
   },
   {
      id: "2",
      title: "Book-Next",
      techs: ["next", "Typescript", "Css-Modules"],
      description: "Sistema e-commerce de compra de livros",
      image: bookNextImg,
      icons: [nextIcon, tsIcon, brushIcon],
      repository: "https://github.com/larissaOliveiraz/book-next",
      site: "https://book-next-nine.vercel.app",
   },
   {
      id: "3",
      title: "Stream",
      techs: ["next", "Typescript", "Css-Modules"],
      description:
         "Website para consultar informações sobre filmes, séries e atores",
      image: streamNextImg,
      icons: [nextIcon, tsIcon, brushIcon],
      repository: "https://github.com/larissaOliveiraz/stream-next",
      site: "",
   },
   {
      id: "4",
      title: "Portifolio",
      techs: ["react", "Typescript", "Styled-Components"],
      description: "Meu portifolio front-end",
      image: portifolioImg,
      icons: [reactIcon, tsIcon, brushIcon],
      repository: "https://github.com/larissaOliveiraz/portifolio",
      site: "https://larissa-portifolio.vercel.app",
   },
];

export default ProjectsInfo;
