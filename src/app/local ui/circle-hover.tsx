"use client";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export const CircleHover = ({
  items,
}: {
  items: {
    img: string;
    title: string;
  }[];
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
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
    <div ref={ref} className="md:flex md:flex-wrap grid grid-cols-3">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative group block p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, x: -50, filter: "blur(5px)" }}
          animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
        >
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
                className="absolute w-full -top-12 -left-0 items-center justify-center z-50"
              >
                <div className=" flex flex-col items-center justify-center rounded-md bg-[#796b61] px-4 py-2 z-50">
                  <div className="font-bold text-[#fdfcf8] text-[16px]">{item.title}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
            <div className="relative z-20">
              <img src={item.img} className="h-18 w-18 md:h-20 md:w-20" />
            </div>
        </motion.div>
      ))}
    </div>
  );
};
