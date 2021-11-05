import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import ComputerIcon from "@mui/icons-material/Computer";
import FolderIcon from "@mui/icons-material/Folder";
import EmailIcon from "@mui/icons-material/Email";
const Sidebar = () => {
  return (
    <div className="hidden md:block w-60 border-r-[1px] border-solid border-r-[#173A5E] fixed top-0 left-0 z-40 h-screen bg-[#001E3C] ">
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
        <p className="text-[#ccd6f6] pl-6 pr-6 pb-6">Django || CSS || React</p>
      </div>
      <div className=" text-[#a8b2d1] relative bottom-52">
        <ul>
          <a href="#about" className="">
            <li className="text-lg font-semibold w- hover:bg-blue-550 transition-all hover:text-[#66b2ff] pt-2 pb-2 border-b-[1px] border-solid border-[#173A5E] border-t-[1px]">
              <span className="pl-10 pr-4">
                <InfoIcon className="" />
              </span>
              About me
            </li>
          </a>
          <a href="#about" className="">
            <li className="text-lg font-semibold w- hover:bg-blue-550 transition-all hover:text-[#66b2ff] pt-2 pb-2 border-b-[1px] border-solid border-[#173A5E] border-t-[1px]">
              <span className="pl-10 pr-4">
                <ComputerIcon className="" />
              </span>
              Skills
            </li>
          </a>
          <a href="#skills" className="">
            <li className="text-lg font-semibold w- hover:bg-blue-550 transition-all hover:text-[#66b2ff] pt-2 pb-2 border-b-[1px] border-solid border-[#173A5E] border-t-[1px]">
              <span className="pl-10 pr-4">
                <FolderIcon className="" />
              </span>
              Projects
            </li>
          </a>
          <a href="#mail" className="">
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
  );
};

export default Sidebar;
