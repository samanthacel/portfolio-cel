import Navbar from "./sections/navbar";
import Header from "./sections/header";
import { AboutMe } from "./sections/aboutme";
import { Projects } from "./sections/projects";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <Header />  
        <AboutMe />
        <Projects />
        <div className="mt-[120px]"></div>
        <Footer/>
      </div>
    </>
  );
}

