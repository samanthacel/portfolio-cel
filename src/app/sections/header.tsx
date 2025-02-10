"use client";
 
import { motion } from "framer-motion";
import React from "react";

export default function Header() {
  return (
    <div className="relative z-0 h-[640px] w-full">
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto h-full ">
        <motion.div
          initial={{ opacity: 0.0, y: 0 }}
          whileInView={{ opacity: 1, y: 40 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }} className="flex items-center justify-center md:w-[500px]">
          <img src="/img/profile-picture.png" alt="profile picture" className="w-[80%]"/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center md:items-start md:justify-center mt-[50px] mx-auto h-full"
        >
          <div className="font-title md:text-[70px] text-[40px]">Samantha Michelle</div>
          <div className="font-subtitle font-normal text-400">SOFTWARE ENGINEER</div>
        </motion.div>
      </div>
    </div>
  )
}
