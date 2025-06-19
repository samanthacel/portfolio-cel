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
  {title: "Planescaper",
    src: "/img/projects/planescaper/planescaper-cover.png",
    project: "Mobile Programming Final Project",
    description: "An android-based application to help user plan their trips, search for tour tickets, book trips, and explore destinations effortlessly",
    timeline: "December 2024",
    role: "UI/UX Designer, Fullstack Developer",
    tech: "Figma, Android Studio, Firebase",
    content: [
      {
        title: "Problem Definition",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="flex align-center justify-center">
            <img src="/img/projects/planescaper/planescaper-home.png" className="w-[100px]"/>
          </div>
        ),
      },
      {
        title: "Solution",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
          <div className="flex h-full w-full items-center justify-center text-white">
            <img
              src="/linear.webp"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Features",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Development",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Running out of content
          </div>
        ),
      }
    ]
  },
  {title: "Hearmony",
    src: "/img/projects/planescaper/planescaper-cover.png",
    project: "Mobile Programming Final Project",
    description: "An android-based application to help user plan their trips, search for tour tickets, book trips, and explore destinations effortlessly",
    timeline: "December 2024",
    role: "UI/UX Designer, Fullstack Developer",
    tech: "Figma, Android Studio, Firebase",
    content: [
      {
        title: "Problem Definition",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="flex align-center justify-center">
            <img src="/img/projects/planescaper/planescaper-home.png" className="w-[100px]"/>
          </div>
        ),
      },
      {
        title: "Solution",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
          <div className="flex h-full w-full items-center justify-center text-white">
            <img
              src="/linear.webp"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Features",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Development",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Running out of content
          </div>
        ),
      }
    ]
  },
  {title: "C-Link",
    src: "/img/projects/planescaper/planescaper-cover.png",
    project: "Mobile Programming Final Project",
    description: "An android-based application to help user plan their trips, search for tour tickets, book trips, and explore destinations effortlessly",
    timeline: "December 2024",
    role: "UI/UX Designer, Fullstack Developer",
    tech: "Figma, Android Studio, Firebase",
    content: [
      {
        title: "Problem Definition",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="flex align-center justify-center">
            <img src="/img/projects/planescaper/planescaper-home.png" className="w-[100px]"/>
          </div>
        ),
      },
      {
        title: "Solution",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
          <div className="flex h-full w-full items-center justify-center text-white">
            <img
              src="/linear.webp"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Features",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Development",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Running out of content
          </div>
        ),
      }
    ]
  },
  {title: "Inventory Management System",
    src: "/img/projects/planescaper/planescaper-cover.png",
    project: "Mobile Programming Final Project",
    description: "An android-based application to help user plan their trips, search for tour tickets, book trips, and explore destinations effortlessly",
    timeline: "December 2024",
    role: "UI/UX Designer, Fullstack Developer",
    tech: "Figma, Android Studio, Firebase",
    content: [
      {
        title: "Problem Definition",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="flex align-center justify-center">
            <img src="/img/projects/planescaper/planescaper-home.png" className="w-[100px]"/>
          </div>
        ),
      },
      {
        title: "Solution",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
          <div className="flex h-full w-full items-center justify-center text-white">
            <img
              src="/linear.webp"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Features",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Development",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Running out of content
          </div>
        ),
      }
    ]
  },
  {title: "DOOIT",
    src: "/img/projects/planescaper/planescaper-cover.png",
    project: "Mobile Programming Final Project",
    description: "An android-based application to help user plan their trips, search for tour tickets, book trips, and explore destinations effortlessly",
    timeline: "December 2024",
    role: "UI/UX Designer, Fullstack Developer",
    tech: "Figma, Android Studio, Firebase",
    content: [
      {
        title: "Problem Definition",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="flex align-center justify-center">
            <img src="/img/projects/planescaper/planescaper-home.png" className="w-[100px]"/>
          </div>
        ),
      },
      {
        title: "Solution",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
          <div className="flex h-full w-full items-center justify-center text-white">
            <img
              src="/linear.webp"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Features",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Development",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Running out of content
          </div>
        ),
      }
    ]
  },
  {title: "AMN Karoseri",
    src: "/img/projects/planescaper/planescaper-cover.png",
    project: "Mobile Programming Final Project",
    description: "An android-based application to help user plan their trips, search for tour tickets, book trips, and explore destinations effortlessly",
    timeline: "December 2024",
    role: "UI/UX Designer, Fullstack Developer",
    tech: "Figma, Android Studio, Firebase",
    content: [
      {
        title: "Problem Definition",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="flex align-center justify-center">
            <img src="/img/projects/planescaper/planescaper-home.png" className="w-[100px]"/>
          </div>
        ),
      },
      {
        title: "Solution",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
          <div className="flex h-full w-full items-center justify-center text-white">
            <img
              src="/linear.webp"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Features",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Development",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Running out of content
          </div>
        ),
      }
    ]
  },
  {title: "ERamen",
    src: "/img/projects/planescaper/planescaper-cover.png",
    project: "Mobile Programming Final Project",
    description: "An android-based application to help user plan their trips, search for tour tickets, book trips, and explore destinations effortlessly",
    timeline: "December 2024",
    role: "UI/UX Designer, Fullstack Developer",
    tech: "Figma, Android Studio, Firebase",
    content: [
      {
        title: "Problem Definition",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="flex align-center justify-center">
            <img src="/img/projects/planescaper/planescaper-home.png" className="w-[100px]"/>
          </div>
        ),
      },
      {
        title: "Solution",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
          <div className="flex h-full w-full items-center justify-center text-white">
            <img
              src="/linear.webp"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Features",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Development",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Running out of content
          </div>
        ),
      }
    ]
  },
  {title: "Dialert",
    src: "/img/projects/planescaper/planescaper-cover.png",
    project: "Mobile Programming Final Project",
    description: "An android-based application to help user plan their trips, search for tour tickets, book trips, and explore destinations effortlessly",
    timeline: "December 2024",
    role: "UI/UX Designer, Fullstack Developer",
    tech: "Figma, Android Studio, Firebase",
    content: [
      {
        title: "Problem Definition",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="flex align-center justify-center">
            <img src="/img/projects/planescaper/planescaper-home.png" className="w-[100px]"/>
          </div>
        ),
      },
      {
        title: "Solution",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
          <div className="flex h-full w-full items-center justify-center text-white">
            <img
              src="/linear.webp"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Features",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Development",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Running out of content
          </div>
        ),
      }
    ]
  },
  {title: "Comet",
    src: "/img/projects/planescaper/planescaper-cover.png",
    project: "Mobile Programming Final Project",
    description: "An android-based application to help user plan their trips, search for tour tickets, book trips, and explore destinations effortlessly",
    timeline: "December 2024",
    role: "UI/UX Designer, Fullstack Developer",
    tech: "Figma, Android Studio, Firebase",
    content: [
      {
        title: "Problem Definition",
        description:
          "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
          <div className="flex align-center justify-center">
            <img src="/img/projects/planescaper/planescaper-home.png" className="w-[100px]"/>
          </div>
        ),
      },
      {
        title: "Solution",
        description:
          "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
          <div className="flex h-full w-full items-center justify-center text-white">
            <img
              src="/linear.webp"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: "Features",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
            Version control
          </div>
        ),
      },
      {
        title: "Development",
        description:
          "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
          <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
            Running out of content
          </div>
        ),
      }
    ]
  },
  
];