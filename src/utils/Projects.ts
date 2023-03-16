import todoImg from "../assets/to-do-app-img.png";
import bookNextImg from "../assets/book-next-site.png";
import portifolioImg from "../assets/portifolio-img.png";

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
