import React from "react";
import Fade from "react-reveal/Fade";
const Intro = () => {
  return (
    <Fade top>
      <main
        className="flex  items-center ml-8 mr-8 mb-8 mt-32 relative z-10"
        id="me"
      >
        <div className=" text-white font-poppins w-[90vw] md:w-full">
          <p className="text-[#66B2FF] text-lg font-new font-sans">
            Hi my name is ,
          </p>
          <h1 className="text-3xl  mt-2 font-semibold text-[#ccd6f6] md:text-4xl lg:text-5xl transition-all">
            Kundan Mishra
          </h1>
          <h2 className="text-3xl  mt-2 font-semibold text-[#a8b2d1] md:text-4xl lg:text-5xl transition-all">
            I build things for the web.
          </h2>
          <p className="mt-4 text-[#8892b0]  md:text-lg transition-all md:w-[38ch] lg:w-[45ch]">
            I am a web developer who loves to code and create web
            experiences.Currently, I’m focused on building websites that are
            easy to access and provide exceptional digital experiences.
          </p>
        </div>
      </main>
    </Fade>
  );
};

export default Intro;
