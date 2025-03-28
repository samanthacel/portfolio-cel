"use client";
 
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="relative z-0 h-[65vh] w-[90%] mb-[20vh]">
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto h-full ">
        <motion.div
          initial={{ opacity: 0.0, y: 0 }}
          whileInView={{ opacity: 1, y: 40 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }} className="flex items-center justify-center w-[550px]">
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
          <div className="font-title xl:text-[75px] md:text-[55px] text-[40px] text-center md:text-left">Samantha Michelle</div>
          <div className="font-subtitle font-semibold text-[20px]">SOFTWARE ENGINEER</div>
          <Link href="https://drive.google.com/drive/folders/1_veSaA8iW7wsmHGeEl2y246ZnrM6OZLP">
            <button className="mt-[16px] shadow-[inset_0_0_0_2px_#796b61] px-6 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#796b61] hover:text-white text-[#796b61] transition duration-200 flex items-center gap-2">
              Download CV
            </button>
          </Link>
          
          
        </motion.div>
      </div>
    </div>
  )
}
