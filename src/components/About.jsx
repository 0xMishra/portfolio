import React from "react";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <Fade bottom>
      <main className="flex justify-center items-center m-8 " id="about">
        <div className=" text-white font-poppins w-[90vw] md:w-[750px] mt-20">
          <h3 className="text-xl  mt-2 font-semibold text-[#ccd6f6] md:text-2xl lg:text-3xl transition-all bg-[#001E3C] relative z-20 w-[10ch]">
            <span className="text-sm md:text-md text-[#66B2FF]">01. </span>{" "}
            About Me
          </h3>
          <div className="w-[90%] relative z-10 bg-[#66B2FF] h-[1px] bottom-3"></div>
          <p className="mt-4 text-[#8892b0]  transition-all ">
            Hello! My name is{" "}
            <span className=" text-[#66B2FF] transition-all border-b-[1px] border-solid border-transparent hover:border-[#66B2FF] cursor-pointer">
              Kundan
            </span>{" "}
            and I enjoy coding and creating things for the internet. I have keen
            interest in web development{" "}
            <span className=" text-[#66B2FF] transition-all border-b-[1px] border-solid border-transparent hover:border-[#66B2FF] cursor-pointer ">
              started back in 2020
            </span>{" "}
            when I decided to build my career in tech. So I started learning and
            hacking{" "}
            <span className=" text-[#66B2FF] transition-all border-b-[1px] border-solid border-transparent hover:border-[#66B2FF] cursor-pointer ">
              HTML & CSS
            </span>{" "}
            together.
          </p>
          <p className="mt-4 text-[#8892b0]  transition-all ">
            As of now I am{" "}
            <span className=" text-[#66B2FF] transition-all border-b-[1px] border-solid border-transparent hover:border-[#66B2FF] cursor-pointer ">
              student and a web developer.
            </span>{" "}
            I am currently in my Bachelors Of Science freshman year from
            University of Delhi . I am looking for job opportunities , freelance
            projects, internship etc.
          </p>
          <p className="mt-10 text-[#8892b0]  transition-all ">
            Here are a few{" "}
            <span className=" text-[#66B2FF] transition-all border-b-[1px] border-solid border-transparent hover:border-[#66B2FF] cursor-pointer ">
              technologies
            </span>{" "}
            I’ve been working with recently:
          </p>
          <section
            className="flex justify-between items-center mt-2"
            id="skills"
          >
            <ul>
              <li className="mt-1 text-[#8892b0] ">
                <span className="text-[#66b2ff]">{">>"}</span>
                JavaScript
              </li>
              <li className="mt-1 text-[#8892b0]  ">
                <span className="text-[#66b2ff]">{">>"}</span> Python
              </li>
              <li className="mt-1 text-[#8892b0]  ">
                <span className="text-[#66b2ff]">{">>"}</span> React
              </li>
              <li className="mt-1 text-[#8892b0]  ">
                <span className="text-[#66b2ff]">{">>"}</span> CSS3
              </li>
              <li className="mt-1 text-[#8892b0]  ">
                <span className="text-[#66b2ff]">{">>"}</span> Tailwind CSS
              </li>
            </ul>
            <ul>
              <li className="mt-1 text-[#8892b0]  ">
                <span className="text-[#66b2ff] ">{">>"}</span> ES6
              </li>
              <li className="mt-1 text-[#8892b0]  ">
                <span className="text-[#66b2ff] ">{">>"}</span> HTML5
              </li>
              <li className="mt-1 text-[#8892b0]  ">
                <span className="text-[#66b2ff]">{">>"}</span> Git (Version
                Control)
              </li>
              <li className="mt-1 text-[#8892b0]  ">
                <span className="text-[#66b2ff]">{">>"}</span> Redux
              </li>
              <li className="mt-1 text-[#8892b0]  ">
                <span className="text-[#66b2ff]">{">>"}</span> Django
              </li>
            </ul>
          </section>
        </div>
      </main>
    </Fade>
  );
};

export default About;
