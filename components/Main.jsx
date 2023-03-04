import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Building in Progress
          </p>
          <h1 className="py-4 text-gray-700 dark:text-gray-100">
            Hi, I'm <span className="text-[#5651e5]"> Ayush</span>
          </h1>

          <h1 className="py-2 text-gray-700 dark:text-gray-100">
            A Front-end Web Developer
          </h1>
          <p className="py-4 text-gray-600 dark:text-gray-100 sm:max-w-[70%] m-auto">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." "There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain..."
          </p>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            "A New Generation Emerges from this point"
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 dark:text-white">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
