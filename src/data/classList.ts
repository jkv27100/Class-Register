import {
  ChemistryImg,
  BiologyImg,
  PhyscicsImg,
  DSAImg,
  DataAnalysticsImg,
  EnglishImg,
  FrontendDevImg,
  MLImg,
  MathsImg,
  StatisticsImg,
} from "../assets";
import { IClassList } from "../types";

export const classList: IClassList[] = [
  {
    id: 1,
    name: "Chemistry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sapien ac neque fermentum tincidunt",
    attendees: 25,
    classImg: ChemistryImg,
  },
  {
    id: 2,
    name: "Physcics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sapien ac neque fermentum tincidunt",
    attendees: 15,
    classImg: PhyscicsImg,
  },

  {
    id: 3,
    name: "Mathematics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sapien ac neque fermentum tincidunt",
    attendees: 5,
    classImg: MathsImg,
  },
  {
    id: 4,
    name: "Data Structure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sapien ac neque fermentum tincidunt",
    attendees: 30,
    classImg: DSAImg,
  },
  {
    id: 5,
    name: "Machine Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sapien ac neque fermentum tincidunt",
    attendees: 10,
    classImg: MLImg,
  },
  {
    id: 6,
    name: "Biology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sapien ac neque fermentum tincidunt",
    attendees: 45,
    classImg: BiologyImg,
  },
  {
    id: 7,
    name: "Statistics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sapien ac neque fermentum tincidunt",
    attendees: 35,
    classImg: StatisticsImg,
  },
  {
    id: 8,
    name: "English",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sapien ac neque fermentum tincidunt",
    attendees: 18,
    classImg: EnglishImg,
  },
  {
    id: 9,
    name: "Data Analytics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sapien ac neque fermentum tincidunt",
    attendees: 27,
    classImg: DataAnalysticsImg,
  },
  {
    id: 10,
    name: "Frontend Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sapien ac neque fermentum tincidunt",
    attendees: 21,
    classImg: FrontendDevImg,
  },
];
