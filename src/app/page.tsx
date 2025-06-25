import Navbar from "./sections/navbar";
import Header from "./sections/header";
import { AboutMe } from "./sections/aboutme";
import { Projects } from "./sections/projects";
import Footer from "./sections/footer";

export default function Home() {
  const navItems = [
    { name: "Home", link: "/", icon: "/img/cel-logo.ico" },
    { name: "About", link: "/about", icon: "/img/cel-logo.ico"  },
    { name: "Projects", link: "/projects", icon: "/img/cel-logo.ico"  },
  ];
  return (
    <>
      <Navbar />
      <Header />  
      <AboutMe />
      <Projects />
      <div className="mt-[120px]"></div>
      <Footer/>
    </>
  );
}

