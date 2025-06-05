import React from "react";
import { IconType } from "react-icons";
import { FiBookOpen, FiCode, FiCpu, FiCreditCard, FiFigma, FiMail, FiUser, FiUsers } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <Card
          title="Software Engineer"
          subtitle=""
          href="#"
          Icon={FiCode}
        />
        <Card title="UI/UX Design" subtitle="" href="" Icon={FiFigma} />
        <Card title="Fullstack Development" subtitle="" href="" Icon={FiCpu} />
        <Card
          title="Web & Mobile Dev"
          subtitle=""
          href=""
          Icon={FiCreditCard}
        />
        <Card
          title="Tutoring"
          subtitle=""
          href=""
          Icon={FiBookOpen}
        />
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  href: string;
}

const Card = ({ title, subtitle, Icon, href }: CardType) => {
  return (
    <a
      href={href}
      className="w-full h-[120px] p-4 rounded-2xl border-[1px] border-slate-300 relative overflow-hidden group bg-[#fdfcf8] cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#fdfcf8] to-[#b6a9a3] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -bottom-8 -right-5 text-8xl text-slate-100 group-hover:rotate-12 transition-transform duration-300 opacity-80" />
      <Icon className="mb-2 text-2xl  transition-colors relative z-10 duration-300" />
      <h3 className="font-bold text-lg text-slate-950 relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;