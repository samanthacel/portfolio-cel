import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";


export const CircleHover = ({
  items,
}: {
  items: {
    img: string;
    title: string;
  }[];
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  return (
    <div className="flex flex-wrap">
      {items.map((item, idx) => (
        <div className="relative group block p-2"
          key={idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}> 

          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 10 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black text-white px-4 py-2 text-xs z-50 shadow-xl"
              >
                <div className="font-bold text-base">{item.title}</div>
              </motion.div>
            )}
            
          </AnimatePresence>
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