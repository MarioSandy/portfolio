import Scroll, { Link } from "react-scroll";

const Navbar = () => {
  const scroll = Scroll.animateScroll;
  return (
    <div className="flex px-10 py-8">
      <p className="mr-auto text-2xl text-white">M</p>
      <div className="flex gap-5">
        {/* <Link
          className="text-lg text-white"
          activeClass="active"
          to="/"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link> */}
        <p
          className="cursor-pointer text-lg text-white"
          onClick={() => {
            scroll.scrollToTop({
              duration: 500,
              smooth: "easeInOutQuint",
            });
          }}
        >
          Home
        </p>
        <Link
          className="cursor-pointer text-lg text-white"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
        >
          About
        </Link>
        <Link
          className="cursor-pointer text-lg text-white"
          activeClass="active"
          to="project"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
        >
          Project
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
