"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const flexBetween = "flex items-center justify-between";
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-30 w-full bg-[var(--color-offwhite)]">
      <div className={`${flexBetween} mx-auto w-[90%] py-2`}>
        {/* <div className="font-title text-xl">cel</div> */}
        <img src="/img/cel-logo.ico" alt="logo" className="w-[60px]"/>

        <div className="hidden md:flex items-center gap-8 font-body">
          <p className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors ">Home</p>
          <p className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">About Me</p>
          <p className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">Projects</p>
          <p className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">Contacts</p>
        </div>


        <div className="md:hidden">
          <button onClick={() => setOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="w-8 h-8 text-[var(--color-blueblack)] transition-transform duration-300" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-[var(--color-blueblack)] transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full shadow-md md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-4 z-30 bg-[var(--color-offwhite)]">
              <li className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">Home</li>
              <li className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">About Me</li>
              <li className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">Projects</li>
              <li className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">Contacts</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
