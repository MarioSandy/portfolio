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
                I'm Mario Sandy, an enthusiastic Information Systems student at
                Bina Nusantara University, where I am building a solid
                foundation in technology and business systems. I'm currently
                gaining hands-on experience through an internship as an
                application developer at PT Mayora Indah Tbk, a leading FMCG
                company. In this role, I build web applications using Java
                Spring, Bootstrap, Node.js, Oracle Database, and PostgreSQL. I
                collaborate closely with IT developers and users to develop
                application modules, and I interact with multiple applications,
                connecting them through Apache Kafka.
                <br />
                <br />
                Simultaneously, I work part-time as a Frontend Developer at
                Technovative, an IT Services and Consulting company, where I
                design and implement user-friendly interfaces that enhance user
                experience. Recently, I completed an enriching internship at PT
                Nusa Kreasi Cemerlang, a software solution company under the
                Salim Group. In this role, I enhanced a microservice supply
                chain application with over 5 services using Java Spring Boot,
                Kafka, and Google Cloud Platform services. I collaborated with
                multiple third-party applications and actively participated in
                production support, handling tasks such as checking logs and
                applying hotfixes. This experience significantly sharpened my
                backend development skills and deepened my understanding of
                microservices architecture.
                <br />
                <br />
                My journey in the realm of technology extends beyond the
                classroom and professional internships. In 2021, I served as an
                associate member at Sokrates System, a Bina Nusantara group
                dedicated to developing a cutting-edge school information
                management system application. This experience allowed me to
                thrive in a collaborative environment and reinforced my passion
                for full-stack web development.
                <br />
                <br />
                Working alongside talented teams in these diverse roles, I've
                honed my abilities and acquired a wealth of knowledge in the
                ever-evolving field of web development. I am excited to leverage
                these experiences to contribute innovative solutions to future
                projects and continue my growth as a well-rounded full-stack
                developer professional.
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
