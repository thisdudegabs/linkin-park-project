import Update1 from "../updates/update1.jpeg";
import Update2 from "../updates/update2.jpeg";
import Update3 from "../updates/update3.jpeg";
import Update4 from "../updates/update4.jpeg";
import Update5 from "../updates/update5.jpeg";
import Update6 from "../updates/update6.jpeg";
import Update7 from "../updates/update7.jpeg";
import Update8 from "../updates/update8.jpeg";
import Update9 from "../updates/update9.jpeg";
import Update10 from "../updates/update10.jpeg";

export interface Updates {
  id: number;
  title: string;
  image: string;
  description: string;
}

const updatesData: Updates[] = [
  {
    id: 1,
    title: "Mike and Kailee live!",
    image: Update1,
    description: "...",
  },
  {
    id: 2,
    title: "A conversation with Mark Fiore!",
    image: Update2,
    description: "...",
  },
  {
    id: 3,
    title: "Did you found it?",
    image: Update3,
    description: "...",
  },
  {
    id: 4,
    title: "New Meteora 20th Merch!",
    image: Update4,
    description: "...",
  },
  {
    id: 5,
    title: "In My Head its out now!",
    image: Update5,
    description: "...",
  },
  {
    id: 6,
    title: "New Hybrid Theory 20th Merch!",
    image: Update6,
    description: "...",
  },
  {
    id: 7,
    title: "Mystery Bundles are BACK!",
    image: Update7,
    description: "...",
  },
  {
    id: 8,
    title: "Mike Shinoda 'Passenger' remix",
    image: Update8,
    description: "...",
  },
  {
    id: 9,
    title: "Hybrid Theory first drafts.",
    image: Update9,
    description: "...",
  },
  {
    id: 10,
    title: "One More Light ITS OUT!",
    image: Update10,
    description: "...",
  },
];

export default updatesData;
