import Image from "next/image";
import React from "react";
import Tilt from 'react-tilt'

const Skills = () => {
  return (
    <div id="skills" className="w-full h-[150vh] p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/*HTML*/}
          <Tilt options={{speed:3000,reverse:false,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1.1}} className="p-6 shadow-xl h-96 rounded-xl flex flex-col justify-center hover:scale-105 ease-in duration-300" data-tilt>
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/html.png"
                  width="70"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </Tilt>

          {/*CSS*/}
          <Tilt options={{speed:3000,reverse:false,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1.1}} className="p-6 shadow-xl h-96 flex flex-col justify-center rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/css-alt.png"
                  width="70"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </Tilt>
          {/*Javascript*/}
          <Tilt options={{speed:3000,reverse:false,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1.1}} className="p-6 shadow-xl h-96 flex flex-col justify-center rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/javascript.png"
                  width="70"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </Tilt>
          {/*Next.JS*/}
          <Tilt options={{speed:3000,reverse:false,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1.1}} className="p-6 shadow-xl rounded-xl flex flex-col justify-center hover:scale-105  ease-in duration-300 h-96 self-center">
            <div className="flex gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/nextjs.png"
                  width="80"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJs</h3>
              </div>
            </div>
          </Tilt>
          {/*Tailwind*/}
          <Tilt options={{speed:3000,reverse:false,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1.1}} className="p-6 shadow-xl h-96 flex flex-col justify-center rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/tailwind.png"
                  width="75"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </Tilt>
          {/*Github*/}
          <Tilt options={{speed:3000,reverse:false,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1.1}} className="p-6 shadow-xl rounded-xl h-96 flex flex-col justify-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/github.png"
                  width="100"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Skills;
