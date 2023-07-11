import Grupo from "../../assets/members/banda.jpeg";
import Chester from "../../assets/members/chester.jpeg";
import Mike from "../../assets/members/mike.jpeg";
import Brad from "../../assets/members/brad.jpeg";
import Joe from "../../assets/members/joe.jpeg";
import Phoenix from "../../assets/members/phoenix.jpeg";
import Rob from "../../assets/members/rob.jpeg";

export interface MembersInter {
  id: number;
  title: string;
  image: string;
  description: string;
}

const membersData: MembersInter[] = [
  {
    id: 1,
    title: "Linkin Park",
    image: Grupo,
    description:
      "Linkin Park is an outlier. The band’s risky creative choices—swinging wildly from song to song, album to album—are a hallmark of their career. Few artists effortlessly blend genres, emotions, and ideas with a voice as signature as Linkin Park's.  They are, after all, the architects of the inimitable “Hybrid Theory,” the only band proven to be as at-home on stage with Jay-Z as with Metallica, Steve Aoki, and Paul McCartney. ",
  },
  {
    id: 2,
    title: "Chester Bennington",
    image: Chester,
    description:
      "Chester Charles Bennington (March 20, 1976 – July 20, 2017) was an American singer, songwriter, musician, and actor. He was best known as the lead vocalist for Linkin Park and was also lead vocalist for the bands Grey Daze, Dead by Sunrise and, between 2013 and 2015, Stone Temple Pilots. Bennington has been credited by several publications as one of the greatest rock vocalists of his generation.",
  },
  {
    id: 3,
    title: "Mike Shinoda",
    image: Mike,
    description:
      "Michael Kenji Shinoda (born February 11, 1977) is an American musician, songwriter, rapper, singer, record producer and graphic designer. He co-founded Linkin Park in 1996 and is the band's rhythm guitarist, primary songwriter, keyboardist, producer, and lead vocalist. Shinoda later created a hip-hop-driven side project, Fort Minor, in 2004. He served as a producer for tracks and albums by Lupe Fiasco, Styles of Beyond and The X-Ecutioners.",
  },
  {
    id: 4,
    title: "Brad Delson",
    image: Brad,
    description:
      "Brad Delson is the lead guitarist for Linkin Park, he graduated from Agoura High School in 1995 and formed Xero with Mike Shinoda whom he knew since the seventh grade, which would later become Linkin Park. He graduated from the University of California, Los Angeles with a degree in communications, but decided to forget law school to pursue a career with Linkin Park.",
  },
  {
    id: 5,
    title: "Joe Hahn",
    image: Joe,
    description:
      "Joseph Hahn (born March 15, 1977) is an American musician, DJ, director, and visual artist best known as the DJ and creative director of the American rock band Linkin Park, doing the scratching, turntables, sampling, and programming for all seven of Linkin Park's albums. Hahn, along with bandmate Mike Shinoda, are responsible for most of Linkin Park's album artwork. Hahn also directed many of the band's music videos. ",
  },
  {
    id: 6,
    title: "Dave 'Phoenix'",
    image: Phoenix,
    description:
      "David Michael Farrell (born February 8, 1977), also known as 'Phoenix' is currently Linkin Park’s bassist and backup vocalist. Farrell was born in Plymouth, Massachusetts, but when he was five he moved to Mission Viejo, California where he attended Mission Viejo High School. He graduated in 1999 at the University of California, Los Angeles. He can play bass guitar, electric guitar, cello and violin. He has also been known to play an upright bass.",
  },
  {
    id: 7,
    title: "Rob Bourdon",
    image: Rob,
    description:
      "Robert Gregory Bourdon (born January 20, 1979) is an American musician, best known as the drummer and co-founding member of the American rock band Linkin Park. Bourdon served as Linkin Park's drummer for seven studio albums and many international tours. Beyond drums and percussion, he also handled the band's business operations with Delson and Dave Farrell.",
  },
];

export default membersData;
