"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FiX } from "react-icons/fi";

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
        "rounded-lg relative overflow-hidden h-80 w-full transition-all duration-300 ease-out flex justify-center items-center shadow-black/30 shadow-xl bg-[linear-gradient(to_bottom,_white_0%,_var(--color-offwhite)_80%)]",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img src={card.src} alt={card.title} className="object-cover h-[90%]"/>

      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
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

type Card = {
  title: string;
  src: string;
};

import { motion, AnimatePresence } from "framer-motion";
import { ProjectDesc } from "@/app/local ui/project-desc";
import AppleCardsCarouselDemo from "../example/apple-cards-carousel-demo-2";

const Modal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
          <div
            ref={scrollRef}
            className="max-h-[75vh]  pr-2"
          >
            {React.isValidElement(children)
              ? React.cloneElement(children as React.ReactElement, {
                  scrollContainerRef: scrollRef,
                })
              : children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export function FocusCards({ cards }: { cards: Card[] }) {
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
        <Modal onClose={() => setSelectedCardIndex(null)}>
          <DummyContent card={cards[selectedCardIndex]} />
        </Modal>
      )}

    </>
  );
}


const DummyContent = ({ card }: { card: any }) => {
  return (
    <>
      <div>
        <div className="font-subtitle font-bold text-[60px]">{card.title}</div>
        <div className="mt-[-8px] font-subtitle font-bold text-[24px] text-[var(--color-darkbeige)]">{card.project}</div>
      </div>

      <div className="mt-[60px]  text-[20px]">
        {card.description}
      </div>

      <div className="mt-[32px] mb-[32px] flex gap-20">
        <div className="mt-[20px]">
          <div className="text-[12px]">Project Timeline</div>
          <div className="font-semibold text-[18px]">{card.timeline}</div>
        </div>
        <div className="mt-[20px]">
          <div className="text-[12px]">Role</div>
          <div className="font-semibold text-[18px]">{card.role}</div>
        </div>
        <div className="mt-[20px]">
          <div className="text-[12px]">Tech</div>
          <div className="font-semibold text-[18px]">{card.tech}</div>
        </div>
      </div>

      <ProjectDesc content={card.content}/>
      
    </>
  );
};

