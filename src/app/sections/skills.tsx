import { CircleHover } from "../local ui/circle-hover";

export function Skills() {
  return (
    <>
      <div className="font-subtitle font-bold text-[30px] mt-[40px]">TECH STACK</div>
      <CircleHover items={projects} />
    </>
  )
}

export const projects = [
    {
      img: "./img/skills/java.png",
      title: "Java"
    },
    {
      img: "./img/skills/c++.png",
      title: "C/C++"
    },
    {
      img: "./img/skills/mysql.png",
      title: "MySQL"
    },
    {
      img: "./img/skills/python.png",
      title: "Python"
    },
    {
      img: "./img/skills/swiftui.png",
      title: "SwiftUI"
    },
    {
      img: "./img/skills/react.png",
      title: "React.js"
    },
    {
      img: "./img/skills/typescript.png",
      title: "Typescript"
    },
    {
      img: "./img/skills/html.png",
      title: "HTML"
    },
    {
      img: "./img/skills/css.png",
      title: "CSS"
    },
    {
      img: "./img/skills/js.png",
      title: "Javascript"
    },
    {
      img: "./img/skills/figma.png",
      title: "Figma"
    },
    {
      img: "./img/skills/android.png",
      title: "Android"
    },
  ];