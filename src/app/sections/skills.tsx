import { CardHover } from "../local ui/card-hover";
import HoverDevCards from "../local ui/hover-dev-card";

export default function Skills() {
  return (
    <>
      <div className="mt-[20px] font-subtitle font-bold text-[35px] md:text-[40px]">SKILLS</div>
      <HoverDevCards />
      <CardHover items={projects} />
    </>
  )
}

export const projects = [
  {
    img: "./img/skills/se.png",
    title: "Software Engineer"
  },
  {
    img: "./img/skills/ui ux.png",
    title: "UI/UX Design"
  },
  {
    img: "./img/skills/frontend.png",
    title: "Frontend Development"
  },
  {
    img: "./img/skills/web mobile.png",
    title: "Web & Mobile Development"
  },
  {
    img: "./img/skills/tutor.png",
    title: "Tutoring"
  },
];