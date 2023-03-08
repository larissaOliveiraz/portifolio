import todoImg from "../assets/to-do-app-img.png";
import airbnbImg from "../assets/airbnb-clone-img.png";
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
      title: "Airbnb-cln",
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
      techs: ["react", "Typescript", "Css-Modules"],
      description:
         "Sistema de gerenciamento de tarefas. Veja, adicione, altere e delete suas tarefas.",
      image: todoImg,
      icons: [reactIcon, tsIcon, brushIcon],
      repository: "https://github.com/larissaOliveiraz/to-do-react",
      site: "https://to-do-app-sandy-kappa.vercel.app",
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
