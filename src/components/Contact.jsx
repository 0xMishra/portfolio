import React from "react";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <main
      className="flex justify-center items-center m-8 "
      id="about"
      id="mail"
    >
      <div className=" text-white font-poppins w-[90vw] md:w-[750px] mt-20">
        <h3 className="text-xl  mt-2 font-semibold text-[#ccd6f6] md:text-2xl lg:text-3xl transition-all bg-[#001E3C] relative z-20 w-[10ch]">
          <span className="text-sm md:text-md text-[#66B2FF]">03. </span>{" "}
          Contact
        </h3>
        <div className="w-[90%] relative z-10 bg-[#66B2FF] h-[1px] bottom-3"></div>
        <p className="mt-4 text-[#8892b0]  transition-all ">
          I am looking for job opportunities, freelance projects etc. If you are
          looking for a web developer for your bussiness or for your personal
          projects and want to hire me feel free to contact.
        </p>
        <Fade bottom>
          <div className="flex justify-center items-center mt-4">
            <a href="mailto: mishrakundan073@gmail.com">
              <button className="border-[1px] border-solid border-[#66d2ff] pt-2 pb-2 pr-8 pl-8 text-[#66d2ff] font-semibold text-lg hover:bg-[#66d2ff] hover:text-blue-550 transition-all">
                CONTACT
              </button>
            </a>
          </div>
        </Fade>
        <p className="text-center text-gray-500 text-xs hover:text-[#66d2ff] transition-all font-sans mt-10">
          Built By Kundan Mishra
        </p>
      </div>
    </main>
  );
};

export default Contact;
