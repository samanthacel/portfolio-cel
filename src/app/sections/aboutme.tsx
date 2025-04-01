"use client";
import React from "react";
 
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Skills from "./skills";
import { TechStack } from "./techstack";

const words = `Undergraduate Computer Science student
at BINUS University, specializing in
Software Engineering. Passionate about
technology, software development, design,
and music. A quick learner with strong
communication and teamwork skills, always
eager to grow and contribute to innovative
projects.`;

export function AboutMe() {
  return (
    <>
      <section id="about-me" className="w-[90%] bg-[var(--color-beige)] rounded-[16px] p-[40px]">
        <div className="font-subtitle font-bold text-[40px] md:text-[50px]">ABOUT ME</div>
        <TextGenerateEffect words={words} />
        <Skills/>
        <TechStack/>
      </section>
    </>
    
  )
}
