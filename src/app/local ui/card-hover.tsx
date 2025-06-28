"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export const CardHover = ({
  items,
}: {
  items: {
    img: string;
    title: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative group block p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: -50, filter: "blur(5px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#796b61] bg-opacity-70 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                opacity: 1,
                transition: { duration: 0.15 },
                }}
                exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
            <div className="relative z-20 h-full w-full bg-[var(--color-offwhite)] rounded-2xl justify-center items-center flex flex-col py-4 px-2">
              <img src={item.img} className="w-[150px]" />
              <div className="mt-[10px] text-[20px] font-bold text-[var(--color-deepbrown)] text-center">{item.title}</div>
            </div>
        </motion.div>
      ))}
    </div>
  );
};
