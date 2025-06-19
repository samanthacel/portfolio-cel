"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const flexBetween = "flex items-center justify-between";
  const [isOpen, setOpen] = useState(false);
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false); 
    }
  };

  return (
    <nav className="fixed top-0 z-30 w-full bg-[var(--color-offwhite)]/95 backdrop-blur-md">
      <div className={`${flexBetween} mx-auto w-[90%] py-2`}>
        <img src="/img/cel-logo.ico" alt="logo" className="w-[60px]"/>

        <div className="hidden md:flex items-center gap-8 font-body">
          <Link href="/" className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">
            Home
          </Link>
          <button onClick={() => handleScroll("about-me")} className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">
            About Me
          </button>
          <button onClick={() => handleScroll("projects")} className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">
            Projects
          </button>
          <button onClick={() => handleScroll("contacts")} className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">
            Contacts
          </button>
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
              <Link href="/" className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">
                Home
              </Link>
              <button onClick={() => handleScroll("about-me")} className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">
                About Me
              </button>
              <button onClick={() => handleScroll("projects")} className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">
                Projects
              </button>
              <button onClick={() => handleScroll("contacts")} className="cursor-pointer hover:text-[var(--color-medbeige)] transition-colors">
                Contacts
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
