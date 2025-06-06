import { FocusCards } from "@/components/ui/focus-cards"

export function Projects() {
  return (
    <>
      <section id="projects" className="mt-[60px] w-[90%] justify-center items-center">
        <div className="font-subtitle font-bold text-[40px] md:text-[50px] text-center mb-[20px]">PROJECTS</div>
        <FocusCards cards={cards} />
      </section>
    </>
    
  )

}

const cards = [
  {
    title: "Planescaper",
    src: "/img/projects/planescaper-cover.png",
    project: "Mobile Programming Final Project",
    description: "An android-based application to help user plan their trips, search for tour tickets, book trips, and explore destinations effortlessly",
    timeline: "December 2024",
    role: "Designer, Developer",
    tech: "Figma, Android Studio"
  },
  {
    title: "C-Link",
    src: "/img/projects/clink-cover.png",
    project: "Mobile Programming Final Project",
    description: "Android app to help you plan trips",
    timeline: "December 2024",
    role: "Designer, Developer",
    tech: "Figma, Android Studio"
  },
  {
    title: "Inventory Management System",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "DOOIT",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AMN Karoseri",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dialert",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Comet",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
];