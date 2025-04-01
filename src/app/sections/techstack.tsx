import { CircleHover } from "../local ui/circle-hover";

export function TechStack() {
  return (
    <>
      <div className="font-subtitle font-bold text-[30px] mt-[40px]">TECH STACK</div>
      <CircleHover items={techstack} />
    </>
  )
}

export const techstack = [
    {
      img: "./img/techstack/java.png",
      title: "Java"
    },
    {
      img: "./img/techstack/c++.png",
      title: "C/C++"
    },
    {
      img: "./img/techstack/mysql.png",
      title: "MySQL"
    },
    {
      img: "./img/techstack/python.png",
      title: "Python"
    },
    {
      img: "./img/techstack/swiftui.png",
      title: "SwiftUI"
    },
    {
      img: "./img/techstack/react.png",
      title: "React.js"
    },
    {
      img: "./img/techstack/typescript.png",
      title: "Typescript"
    },
    {
      img: "./img/techstack/html.png",
      title: "HTML"
    },
    {
      img: "./img/techstack/css.png",
      title: "CSS"
    },
    {
      img: "./img/techstack/js.png",
      title: "Javascript"
    },
    {
      img: "./img/techstack/figma.png",
      title: "Figma"
    },
    {
      img: "./img/techstack/android.png",
      title: "Android"
    },
    {
      img: "./img/techstack/firebase.png",
      title: "Firebase"
    },
  ];