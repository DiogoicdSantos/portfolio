import { AiFillGithub, AiFillLinkedin, AiFillRobot } from "react-icons/ai";
import { CiMedal } from "react-icons/ci";
import { DiVisualstudio } from "react-icons/di";
import { FaJava, FaLanguage, FaReact, FaUnity } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export type ToolsType = { icon: IconType; title: string; score: string };

export type SocialsIconsType = { Icon: IconType; url: string };

export type ProjectsInformationsType = {
  title: string;
  subtitle: string;
  text: string;
};

export const ToolsUsed: ToolsType[] = [
  { icon: FaReact, title: "ReactJS", score: "6/10" },
  { icon: FaJava, title: "JavaScript", score: "6/10" },
  { icon: DiVisualstudio, title: "C#", score: "4/10" },
  { icon: FaUnity, title: "Unity", score: "4/10" },
  { icon: AiFillRobot, title: "Chat bots", score: "4/10" },
];

export const Experience: ToolsType[] = [
  { icon: CiMedal, title: "Experience", score: "2.5 years" },
  { icon: FaLanguage, title: "English", score: "9/10" },
  { icon: FaLanguage, title: "Portuguese", score: "10/10" },
];

export const Socials: SocialsIconsType[] = [
  {
    Icon: AiFillLinkedin,
    url: "https://www.linkedin.com/in/diogo-santos-02336b177/",
  },
  { Icon: AiFillGithub, url: "https://github.com/DiogoicdSantos" },
];

export const ProjectsInformation: ProjectsInformationsType[] = [
  {
    title: "Farfetch",
    subtitle: "Fullstack developer",
    text: "Usage of ReactJS, NestJS and NextJS to build and maintain specific modules",
  },
  {
    title: "JIBO",
    subtitle: "Fullstack developer",
    text: "Usage of machine learning to create models to train a robots funcionalities and understanding. Also creating specific functionalities for the robot to perform, using Javascript",
  },
  {
    title: "TOMI",
    subtitle: "Fullstack developer",
    text: "Usage of .NET Framework to build a page for the platform",
  },
];
