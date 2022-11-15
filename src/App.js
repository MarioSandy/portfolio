import "./App.css";
import Navbar from "./components/Navbar";
import { ReactComponent as Facebook } from "./assets/svg/facebook.svg";
import { ReactComponent as Github } from "./assets/svg/github.svg";
import { ReactComponent as Instagram } from "./assets/svg/instagram.svg";
import { ReactComponent as Linkedin } from "./assets/svg/linkedin.svg";
import { ReactComponent as Linkout } from "./assets/svg/link-out.svg";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import skillsets from "./data/skillsets";
import projects from "./data/projects";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
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

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className="relative bg-gradient-radial from-[#252323] to-[#131313]">
      <Navbar />
      <ScrollTopButton />
      <div className="p-6">
        <div className="mx-auto max-w-screen-lg">
          <div className="mb-9 grid grid-cols-12 md:mb-14" id="home">
            <img
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-once={true}
              src={require("./assets/img/me.png")}
              className="col-span-12 h-[350px] saturate-0 md:col-span-6 lg:col-span-5"
            />
            <div className="col-span-12 flex flex-col justify-center md:col-span-6 lg:col-span-7">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once={true}
                className="mt-auto mb-4 border-l-8 border-solid border-white pl-4 lg:mb-0"
              >
                <p className="text-white">Hi, I am</p>
                <p className="text-6xl text-white">Mario Sandy</p>
                <p className="text-2xl text-white">Web Developer</p>
              </div>
              <div className="mt-auto flex items-center">
                <button className="rounded-md bg-white px-2 py-1 text-black">
                  <a
                    href="https://docs.google.com/document/d/1ojzc_QRjAQ0CeM8fSQNA1ksFX6igeciYRY8kU3xHp64/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check My CV
                  </a>
                </button>
                <div className="ml-auto flex gap-2">
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
                  <a
                    href="https://github.com/MarioSandy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                  {/* <a
                  href="https://www.facebook.com/mario.sandy.90/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a> */}
                </div>
              </div>
            </div>
            <p className="absolute top-[270px] right-0 rotate-90 transform text-2xl text-white">
              Portofolio
            </p>
          </div>
          <div
            className="grid grid-cols-1 gap-x-20 gap-y-8 md:grid-cols-1 lg:grid-cols-3"
            id="about"
          >
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
            <div className="col-span-1 mb-4 lg:col-span-2">
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once={true}
                className="mb-1 text-5xl text-white"
              >
                About me
              </p>
              <div
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="300"
                data-aos-once={true}
                className="mb-3 h-1 w-12 bg-white"
              ></div>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="600"
                data-aos-once={true}
                className="text-justify font-sans text-white"
              >
                Hi, Mario here. I'm currently studying as an information system
                student in Bina Nusantara University. In my spare time, I help
                my father in building websites for the company he is currently
                working at. I've also worked as an associate member for a year
                in 2021 in one of Bina Nusantara group which is Sokrates System,
                a group which develop a school information management system
                application. It gave me a lot of experience working with them. I
                love designing and building website (both frontend and backend
                side) therefore it is my dream to become a web developer.
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-3"
            id="project"
          >
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once={true}
              className="col-span-1 mb-1 text-5xl text-white md:col-span-2 lg:col-span-3"
            >
              Projects
            </p>
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once={true}
              className="col-span-1 mb-4 h-1 w-12 bg-white md:col-span-2 lg:col-span-3"
            ></div>
            {projects.map((project) => (
              <div
                className="mb-4 flex h-[420px] 
                           w-full flex-col
                           rounded-lg bg-slate-500
                           bg-opacity-50 px-4
                            py-6 text-white backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
                data-aos-once={true}
              >
                <img
                  src={require(`./assets/img/${project.preview}`)}
                  className="mb-4 max-h-[50%] w-full rounded-lg object-contain"
                />
                <p className="text-2xl">{project.title}</p>
                <p className="mb-3 font-sans text-sm font-semibold text-slate-400">
                  {project.stack}
                </p>
                <p className="text-ellipsis text-justify font-sans text-sm text-slate-300">
                  {project.description}
                </p>
                <div className="mt-auto flex">
                  <p className="mr-auto text-slate-400">{project.status}</p>
                  {project.github_link.length < 1 ? (
                    <p>Private</p>
                  ) : (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkout />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
