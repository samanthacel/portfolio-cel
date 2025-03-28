import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const CircleHover = ({
  items,
}: {
  items: {
    img: string;
  }[];
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap">
      {items.map((item, idx) => (
        <div className="relative group block p-2"
          key={idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}> 

          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-24 w-24 bg-white block rounded-full"
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
          <div className="relative z-20">
            <img src={item.img} className="h-20 w-20"/>
          </div>
        </div>
      ))}
    </div>
  );
};