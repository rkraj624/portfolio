import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import {  AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode,MdLibraryBooks } from "react-icons/md";

import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Problem Solving ",
    about: "A daily problem solver   ",
  },
  {
    Icon: MdLibraryBooks,
    title: "Reading ",
    about:
      "I like to read books on daily basis. ",
  },
  // {
  //   Icon: RiComputerLine,
  //   title: "Whatever",
  //   about:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  // },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
,
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Mongo",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Premiere Pro",
    level: "60",
  },
 
];

export const projects: IProject[] = [
  { id:1,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "",
    github_url: "https://github.com/rkraj624/COVID-19_TRACKER_HTML_CSS_JAVASCRIPT",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  { 
    id:2,
    name: "Administration Portal",
    image_path: "/images/algoVisual.png",
    deployed_url: "",
    github_url: "",
    category: ["react"],
    description:
      "An web app which shows the stores the details of college.",
    key_techs: ["React", "Mongo", "Framer Motion"],
  },

  {
    id:3,
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "",
    github_url: "",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id:4,
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "",
    github_url: "",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id:5,
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "",
    github_url: "",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    id:6,
    name: "Note Making App",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["React","Express", "Mongo", "Node", "Bootstrap"],
  },

];
