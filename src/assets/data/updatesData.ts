import Update1 from "../updates/update1.jpeg";
import Update2 from "../updates/update2.jpeg";
import Update3 from "../updates/update3.jpeg";
import Update4 from "../updates/update4.jpeg";
import Update5 from "../updates/update5.jpeg";
import Update6 from "../updates/update6.jpeg";
import Update7 from "../updates/update7.jpeg";
import Update8 from "../updates/update8.jpeg";
import Update9 from "../updates/update10.jpeg";

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
    description:
      "Listen to Kailee (@morguemami) and I on ALTCTRL Radio with @HanumanWelch on @applemusic- Tune in now and on demand after: https://apple.co/3CjRiVP",
  },
  {
    id: 2,
    title: "A conversation with Mark Fiore!",
    image: Update2,
    description:
      "Join a conversation on @Discord Stage this Thursday, May 18th at 6pm PDT, with long-time Linkin Park content producer Mark Fiore to discuss ‘Work In Progress’ from Meteora20. Join our Discord server: https://discord.gg/linkinpark",
  },
  {
    id: 3,
    title: "Your Art!",
    image: Update3,
    description:
      "The final MeteoraMonday round up. Thank you to everyone who submitted their art and continue to celebrate Meteora20 with us",
  },
  {
    id: 4,
    title: "New Meteora 20th Merch!",
    image: Update4,
    description:
      "Who's repping the Meteora20 merch? Click on Merch and enjoy are new stuff!",
  },
  {
    id: 5,
    title: "In My Head its out now!",
    image: Update5,
    description:
      "In My Head (ft. @morguemami). Out Now. 🔪 http://mshnd.co/inmyhead",
  },
  {
    id: 6,
    title: "New Hybrid Theory 20th Merch!",
    image: Update6,
    description:
      "IT'S OFFICIALLY BLACK FRIDAY WEEKEND. Take 20% off storewide and get a free crawling sticker with each purchase at our merch section!",
  },
  {
    id: 7,
    title: "Happy Birdthay to Brad!",
    image: Update7,
    description: "Happy Birthday @BradDelson🎉",
  },
  {
    id: 8,
    title: "Mike Shinoda 'Passenger' remix",
    image: Update8,
    description:
      "'Passenger' has always been one of Mike's favorite tracks from @deftones’ White Pony. In celebration of its 20th anniversary, here’s his remix of the track: http://Deftones.lnk.to/PassengerRemix WhitePony / BlackStallion 20th Anniversary Reissue out 12/11/2020",
  },
  {
    id: 9,
    title: "We miss you Chester!",
    image: Update9,
    description:
      "Three years ago today, we lost an incredible talent.A father, a husband, a bandmate, a very talented musician, and an important part of many of our lives. We are grateful for his impact in the world and today we celebrate him. We miss you, Chester Bennington. ❤️",
  },
];

export default updatesData;
