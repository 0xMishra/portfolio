import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoutIcon from "@mui/icons-material/Logout";
import projectArr from "./../data";

import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <>
      <main className="flex justify-center items-center m-8 " id="projects">
        <div className=" text-white font-poppins w-[90vw] md:w-[750px] mt-20">
          <h3 className="text-xl  mt-2 font-semibold text-[#ccd6f6] md:text-2xl lg:text-3xl transition-all bg-[#001E3C] relative z-20 w-[10ch]">
            <span className="text-sm md:text-md text-[#66B2FF]">02. </span>{" "}
            Projects
          </h3>
          <div className="w-[90%] relative z-10 bg-[#66B2FF] h-[1px] bottom-3"></div>
        </div>
      </main>
      <footer className="m-10">
        {projectArr.map((item) => {
          const { id } = item;
          return (
            <div key={id}>
              {item.motion === "left" ? (
                <Fade left>
                  <Card {...item} />;
                </Fade>
              ) : (
                <Fade right>
                  <Card {...item} />;
                </Fade>
              )}
            </div>
          );
        })}
      </footer>
    </>
  );
};

const Card = ({ img, title, para, gitLink, proLink, tech }) => {
  return (
    <header className="flex justify-center items-center pb-4 mb-10 mt-2 ">
      <article className="flex justify-center items-center w-[80vw] max-w-[450px] flex-col md:flex-row">
        <div className="hidden lg:flex lg:justify-center lg:items-center">
          <a href={proLink} target="_blank">
            <img src={img} alt="" className="proImage" />
          </a>
        </div>
        <div className="relative z-20 w-[80vw] max-w-[450px] h-96 object-cove ">
          <img
            src={img}
            alt=""
            className="relative z-10 w-[80vw] max-w-[450px] h-96 object-cover lg:hidden shadow-2xl"
          />

          <section className="relative -top-96 z-20 r bg-blue-650 w-[80vw] max-w-[450px] h-96 lg:top-0 lg:right-40 lg:h-64 lg:w-[75vw] lg:mr-10 lg:shadow-2xl">
            <p className="text-[#66b2ff] pl-4 text-lg lg:text-sm pt-4 lg:pt-2 pb-2">
              Featured Project
            </p>
            <h2 className="text-[#ccd6f6] text-3xl pl-4 font-semibold hover:text-[#66b2ff] cursor-pointer lg:text-2xl">
              <a href={proLink} target="_blank">
                {title}
              </a>
            </h2>
            <p className="text-[#a8b2d1]   pl-4  pt-4 pb-2 pr-4 lg:text-sm lg:pt-2">
              {para}
            </p>
            <p className="text-[#a8b2d1]   pl-4  pt-4 pb-2 pr-4 lg:pt-2">
              Tech used: <br />
              {tech}
            </p>

            <div className="flex items-center">
              <div className=" pl-4 pt-5 text-[#ccd6f6] lg:pt-1 l">
                <a href={gitLink} target="_blank">
                  <GitHubIcon className="lg:scale-[0.8]" />
                </a>
              </div>
              <div className="pl-10  pt-5 text-[#ccd6f6] lg:pt-1">
                <a href={proLink} target="_blank">
                  <LogoutIcon className="lg:scale-[0.8]" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </header>
  );
};
export default Projects;
