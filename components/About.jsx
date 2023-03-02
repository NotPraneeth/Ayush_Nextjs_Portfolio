import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am just a passerby Developer
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            laudantium molestiae. Perspiciatis ullam omnis itaque recusandae sed
            et doloribus exercitationem reprehenderit!
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            incidunt amet? Corrupti natus magnam quia modi odit eius! Eius,
            corporis quam? Praesentium, tenetur.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/favicon.ico"
            alt="/"
            width="200"
            height="50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
