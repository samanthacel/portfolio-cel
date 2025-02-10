import Navbar from "./sections/navbar";
import Header from "./sections/header";

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
      {/* <div className="bg-yellow">About Me</div> */}
    </>
  );
}

