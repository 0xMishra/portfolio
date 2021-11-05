import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import React from "react";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import ComputerIcon from "@mui/icons-material/Computer";
import FolderIcon from "@mui/icons-material/Folder";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <nav className="flex justify-between  items-center p-4 border-b-[1px] border-solid border-[#173A5E]  fixed top-0 left-0 md:left-60 w-[100%] z-30  backdrop-filter backdrop-blur-lg">
      <Msidebar
        attrs={sidebar ? "showSidebar" : "hideSidebar"}
        sidebar={sidebar}
        setSidebar={setSidebar}
      />
      <div
        className={sidebar ? "hidden" : "md:hidden absolute"}
        onClick={() => setSidebar(true)}
      >
        <Icons
          icon={<MenuIcon className=" text-white scale-120 relative " />}
          margin="ml-0 md:hidden"
        />
      </div>
      <div className={sidebar ? "absolute" : "md:block hidden absolute "}>
        <div className="md:flex md:justify-center md:items-center w-10 h-10 border-[1px] border-[#173A5E] border-solid rounded-lg  bg-blue-550 hover:bg-[#001E3C] hidden relative ">
          <h1 className=" text-white md:block hidden font-bold cursor-pointer ">
            <a href="#me">K. </a>
          </h1>
        </div>
      </div>
      <div className="flex  items-center justify-center md:mr-64">
        <Icons
          icon={
            <GitHubIcon
              className=" text-white scale-120"
              margin="ml-[20px] md:ml-[30px] lg:ml-[40px]"
            />
          }
          link="https://github.com/mishra811"
        />
        <Icons
          icon={<LinkedInIcon className=" text-white scale-120" />}
          margin="  ml-[20px] md:ml-[30px] lg:ml-[40px]"
          link="https://www.linkedin.com/in/kundan-mishra-83a7991bb/"
        />
        <Icons
          icon={<EmailIcon className=" text-white scale-120" />}
          margin="ml-[20px] md:ml-[30px] lg:ml-[40px]"
          link="mailto: mishrakundan073@gmail.com"
        />

        <Icons
          icon={<TelegramIcon className=" text-white scale-120" />}
          margin=" ml-[20px] md:ml-[30px] lg:ml-[40px]"
          link="https://t.me/mishra811"
        />
      </div>
    </nav>
  );
};

const Icons = ({ icon, margin, link }) => {
  return (
    <a href={link} target="_blank">
      <div
        className={`w-10 h-10 border-[1px] border-[#173A5E] border-solid rounded-lg flex ${margin} justify-center items-center bg-blue-550 hover:bg-[#001E3C] `}
      >
        {icon}
      </div>
    </a>
  );
};
const Msidebar = ({ attrs, sidebar, setSidebar }) => {
  return (
    <section className="flex justify-center items-center">
      <div className={attrs}>
        <h1
          className="text-3xl text-[#66b2ff] font-bold relative left-52 top-2 right-10 cursor-pointer"
          onClick={() => setSidebar(false)}
        >
          X
        </h1>
        <div className="mt-2 p-10">
          <img
            src="https://avatars.githubusercontent.com/u/76939349?v=4"
            alt=""
            className="profile"
          />
          <div className="relative w-44 h-48 border-[1px] border-solid border-[transparent] z-10 bottom-44"></div>
        </div>
        <div className="relative bottom-52 text-center  ">
          <h3 className="text-[#66B2FF] text-lg pb-4">Kundan Mishra</h3>
          <p className="text-[#ccd6f6] pl-6 pr-6">web developer</p>
          <p className="text-[#ccd6f6] pl-6 pr-6 pb-6">
            Django || CSS || React
          </p>
        </div>
        <div className=" text-[#a8b2d1] relative bottom-52">
          <ul>
            <a href="#about" className="" onClick={() => setSidebar(false)}>
              <li className="text-lg font-semibold w- hover:bg-blue-550 transition-all hover:text-[#66b2ff] pt-2 pb-2 border-b-[1px] border-solid border-[#173A5E] border-t-[1px]">
                <span className="pl-10 pr-4">
                  <InfoIcon className="" />
                </span>
                About me
              </li>
            </a>
            <a href="#about" className="" onClick={() => setSidebar(false)}>
              <li className="text-lg font-semibold w- hover:bg-blue-550 transition-all hover:text-[#66b2ff] pt-2 pb-2 border-b-[1px] border-solid border-[#173A5E] border-t-[1px]">
                <span className="pl-10 pr-4">
                  <ComputerIcon className="" />
                </span>
                Skills
              </li>
            </a>
            <a href="#skills" className="" onClick={() => setSidebar(false)}>
              <li className="text-lg font-semibold w- hover:bg-blue-550 transition-all hover:text-[#66b2ff] pt-2 pb-2 border-b-[1px] border-solid border-[#173A5E] border-t-[1px]">
                <span className="pl-10 pr-4">
                  <FolderIcon className="" />
                </span>
                Projects
              </li>
            </a>
            <a href="#mail" className="" onClick={() => setSidebar(false)}>
              <li className="text-lg font-semibold w- hover:bg-blue-550 transition-all hover:text-[#66b2ff] pt-2 pb-2 border-b-[1px] border-solid border-[#173A5E] border-t-[1px]">
                <span className="pl-10 pr-4">
                  <EmailIcon className="" />
                </span>
                Contact Me
              </li>
            </a>
          </ul>
        </div>
      </div>
      {sidebar ? (
        <div
          className={"relative z-40 w-screen h-screen bg-gray-750 md:hidden"}
          onClick={() => setSidebar(false)}
        ></div>
      ) : (
        ""
      )}
    </section>
  );
};
export default Navbar;
