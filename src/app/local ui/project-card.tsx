"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import AppleCardsCarouselDemo from "@/components/example/apple-cards-carousel-demo-2";

export type Card = {
  title: string;
  src: string;
  role: string;
  link?: string;
  content: any[];
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative overflow-hidden h-full w-full transition-all duration-300 ease-out flex justify-center items-center shadow-black/30 shadow-xl bg-[linear-gradient(to_bottom,_white_0%,_var(--color-offwhite)_80%)]",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img src={card.src} alt={card.title} className="object-cover h-[90%]"/>
      <div
        className={cn(
          "absolute inset-0 flex items-end py-8 px-4 transition-opacity duration-300",
          "xs:bg-black/50", 
          "phone:bg-gradient-to-t phone:from-black/60 phone:to-transparent", 
          hovered === index ? "xs:opacity-100" : "xs:opacity-0" 
        )}
      >

        <div className="flex-col">
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
          <div className="text-white">{card.role}</div>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function ProjectCard({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div key={card.title} onClick={() => setSelectedCardIndex(index)}>
            <Card
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          </div>
        ))}
      </div>
      {selectedCardIndex !== null && (
        <ProjectDetail
          onClose={() => setSelectedCardIndex(null)}
          content={cards[selectedCardIndex].content}
        />
      )}

    </>
  );
}

const ProjectDetail = ({
  onClose,
  content,
}: {
  onClose: () => void;
  content: any[];
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / content.length);
    const closest = breakpoints.reduce((acc, bp, i) => {
      return Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc;
    }, 0);
    setActiveCard(closest);
  });


  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-[var(--color-offwhite)] rounded-xl w-[90vw] h-[90vh] relative p-8 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[20px] text-gray-700 hover:text-gray-900 z-10"
          >
            <FiX />
          </button>

          <motion.div
            ref={scrollRef}
            className="relative flex h-[85vh] justify-between space-x-10 rounded-md overflow-y-auto scrollbar-transparent pr-2"
          >
            <div className="relative flex flex-col items-start w-full">
              <div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === 0? 1 : 0.3 }}
                  className="mb-20"
                >
                  <div className="font-subtitle font-bold md:text-[60px] text-[40px]">{content[0]?.title}</div>
                  <div className="font-subtitle font-bold md:text-[24px] text-[var(--color-darkbeige)]">{content[0]?.project}</div>
                  <div className="md:mt-[40px] mt-[20px] md:text-[20px]">{content[0].description}</div>
                  <div className="md:mt-[60px] mt-[40px] flex md:gap-20 gap-5 md:flex-row flex-col rounded-3xl">
                    <div>
                      <div className="text-[12px]">Project Timeline</div>
                      <div className="font-semibold text-[16px]">{content[0].timeline}</div>
                    </div>
                    <div>
                      <div className="text-[12px]">Role</div>
                      <div className="font-semibold text-[16px]">{content[0].role}</div>
                    </div>
                    <div>
                      <div className="text-[12px]">Tech</div>
                      <div className="font-semibold text-[16px]">{content[0].tech}</div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5">
                    <a href={content[0].link}>
                      <button className="mt-[40px] shadow-[inset_0_0_0_2px_#796b61] px-6 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[var(--color-darkbeige)] hover:text-white text-[var(--color-darkbeige)] transition duration-200 flex items-center gap-2">
                        Project Link
                      </button>
                    </a>
                    {content[0]?.report &&(
                      <a href={content[0].report}>
                        <button className="mt-[40px] shadow-[inset_0_0_0_2px_#796b61] px-6 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[var(--color-darkbeige)] hover:text-white text-[var(--color-darkbeige)] transition duration-200 flex items-center gap-2">
                          Report
                        </button>
                      </a>
                    )}
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === 1? 1 : 0.3 }}
                  className="mb-20"
                >
                  <div className="text-2xl font-bold">Problem</div>
                  <div className="mt-5 mb-5">{content[1].problem}</div>
                  <div className="text-2xl font-bold">Solution</div>
                  <div className="mt-5 mb-5">{content[1].solution}</div>
                  <div className="text-2xl font-bold">Features</div>
                  <div className="mt-5 mb-5">{content[1].solution}</div>
                  <div className="text-2xl font-bold">Development</div>
                  <div className="mt-5">{content[1].solution}</div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === 2? 1 : 0.3 }}
                  className="mb-20"
                >
                  {/* <AppleCardsCarouselDemo/> */}
                </motion.div>

              </div>
            </div>

          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const images = [
  "/img/projects/planescaper/planescaper-cover.png",
  "/img/projects/planescaper/planescaper-cover.png",
  "/img/projects/planescaper/planescaper-cover.png",
  "/img/projects/planescaper/planescaper-cover.png",
  "/img/projects/planescaper/planescaper-cover.png",
  "/img/projects/planescaper/planescaper-cover.png",
  "/img/projects/planescaper/planescaper-cover.png",
  "/img/projects/planescaper/planescaper-cover.png",
  "/img/projects/planescaper/planescaper-cover.png",
]
