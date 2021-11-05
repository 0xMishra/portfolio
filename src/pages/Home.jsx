import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <main>
      <section className="md:ml-64  lg:ml-72 lg:mr-10 md:mr-7 lg:w-[750px] ">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </section>
      <aside>
        <Sidebar />
      </aside>
    </main>
  );
};

export default Home;
