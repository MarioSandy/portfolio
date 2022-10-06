import "./App.css";
import Navbar from "./components/Navbar";
import { ReactComponent as Facebook } from "./assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "./assets/svg/instagram.svg";
import { ReactComponent as Linkedin } from "./assets/svg/linkedin.svg";
import { useEffect, useState } from "react";

function App() {
  const skillsets = [
    {
      img: "html.png",
      tooltip: "HTML",
    },
    {
      img: "css.png",
      tooltip: "CSS",
    },
    {
      img: "javascript.png",
      tooltip: "Javascript",
    },
    {
      img: "typescript.png",
      tooltip: "Typescript",
    },
    {
      img: "bootstrap.png",
      tooltip: "Bootstrap",
    },
    {
      img: "tailwindcss.png",
      tooltip: "Tailwind CSS",
    },
    {
      img: "angular.png",
      tooltip: "Angular",
    },
    {
      img: "reactjs.png",
      tooltip: "React",
    },
    {
      img: "nodejs.png",
      tooltip: "Node Js",
    },
  ];
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  const handleMouseMove = (ev) => {
    setMousePosition({
      left: ev.clientX + 10,
      top: ev.clientY + 10,
    });
  };

  return (
    <div className="relative bg-gradient-radial from-[#252323] to-[#131313]">
      <Navbar />
      <div className="p-6">
        <div className="mx-auto max-w-screen-lg">
          <div className="mb-9 grid grid-cols-12 md:mb-14">
            <img
              src={require("./assets/img/me.png")}
              className="col-span-12 h-[350px] saturate-0 md:col-span-6 lg:col-span-5"
            />
            <div className="col-span-12 flex flex-col justify-center md:col-span-6 lg:col-span-7">
              <div className="mt-auto border-l-8 border-solid border-white pl-4">
                <p className="text-white">Hi, I am</p>
                <p className="text-6xl text-white">Mario Sandy</p>
                <p className="text-2xl text-white">Web Developer</p>
              </div>
              <div className="mt-auto ml-auto flex gap-2">
                <a
                  href="https://linkedin.com/in/mario-sandy-02469a1b6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/mariosandy123/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
                <a href="">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-20 gap-y-8 md:grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1">
              <p className="col-span-6 mb-4 text-3xl text-white md:col-span-6 lg:col-span-4">
                Skillset
              </p>
              <div className="flex gap-5 overflow-y-auto pb-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded md:overflow-y-visible lg:grid lg:grid-cols-4">
                {skillsets.map((skill) => (
                  <div
                    onMouseMove={(ev) => handleMouseMove(ev)}
                    className="group flex min-w-[60px] max-w-[60px] items-center rounded-lg bg-white bg-opacity-10 p-3.5 md:min-w-[50px]"
                  >
                    <img src={require(`./assets/img/${skill.img}`)} />
                    <span
                      className={`invisible fixed z-10 block
                                  rounded-md bg-slate-500 bg-opacity-50 py-1
                                  px-2 font-sans text-white backdrop-blur-sm group-hover:visible
                                `}
                      style={{
                        top: mousePosition.top + "px",
                        left: mousePosition.left + "px",
                      }}
                    >
                      {skill.tooltip}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <p className="mb-3 text-5xl text-white">About me</p>
              <div className="text-justify font-sans text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum id lacus cursus, placerat ligula et, mattis elit. Nam
                aliquam est id metus bibendum convallis. Aenean eu tortor justo.
                Ut luctus, felis non consequat sodales, libero ligula egestas
                nisi, nec vehicula felis elit sit amet eros. Nunc eu felis quis
                elit tempus dapibus vitae sed risus. Mauris tristique elit et
                arcu malesuada, tincidunt semper nisl dignissim. Suspendisse
                potenti. Quisque accumsan mauris at arcu elementum, sit amet
                cursus arcu eleifend. Quisque eget diam vestibulum, facilisis
                quam vitae, egestas ligula. Pellentesque in mi nec mi iaculis
                mattis. Nulla facilisi. Vivamus ac tristique massa. In risus
                metus, dignissim ut est eleifend, pulvinar molestie neque. Etiam
                sit amet viverra nunc.
              </div>
              {/* <div className="text-white text-justify font-sans px-4 py-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id lacus cursus, placerat ligula et, mattis elit. Nam aliquam est id metus bibendum convallis. Aenean eu tortor justo. Ut luctus, felis non consequat sodales, libero ligula egestas nisi, nec vehicula felis elit sit amet eros. Nunc eu felis quis elit tempus dapibus vitae sed risus. Mauris tristique elit et arcu malesuada, tincidunt semper nisl dignissim. Suspendisse potenti. Quisque accumsan mauris at arcu elementum, sit amet cursus arcu eleifend. Quisque eget diam vestibulum, facilisis quam vitae, egestas ligula. Pellentesque in mi nec mi iaculis mattis. Nulla facilisi. Vivamus ac tristique massa. In risus metus, dignissim ut est eleifend, pulvinar molestie neque. Etiam sit amet viverra nunc.
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
