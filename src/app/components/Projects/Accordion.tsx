import { AccordionModal } from "./AccordianModal"
import image1 from "@/app/images/1.jpg"
import image2 from "@/app/images/2.jpg"
import image3 from "@/app/images/3.jpg"
import image4 from "@/app/images/4.jpg"
import image5 from "@/app/images/5.jpg"

interface Image {
  header: string;
  image: string;
  text: string;
}

const projectImages: Image[] = [
  {
    header: "stuco.com",
    image: image1.src,
    text: `A web app where you can study forever will all the tools you'll ever need.`,
  },

  {
    header: "religions.com",
    image: image2.src,
    text: `The web app that teaches you about your religion, its values, and importance.`,
  },

  {
    header: "me2.com",
    image: image3.src,
    text: `A web chat app for students. The place for you!`,
  },

  {
    header: "universities.com",
    image: image4.src,
    text: `Stuck on choosing where to study? Go to universities.com!`,
  },
  {
    header: "careers.com",
    image: image5.src,
    text: `Find a problem to solve, then find a career to help that problem.`,
  },
];

export const Accordion = () => {
  return (
    <section>
      <AccordionModal items={projectImages} />
    </section>
  )
}