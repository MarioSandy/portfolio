import { useState } from "react";
import Scroll from "react-scroll";
import { ReactComponent as ScrollTop } from "../assets/svg/scroll-top.svg";

const ScrollTopButton = () => {
  const scroll = Scroll.animateScroll;
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      {visible ? (
        <button
          className="fixed bottom-5 right-10 z-10 aspect-square rounded-full bg-slate-500 p-3 md:bottom-10 lg:bottom-10"
          onClick={() => {
            scroll.scrollToTop({
              duration: 500,
              smooth: "easeInOutQuint",
            });
          }}
        >
          <ScrollTop />
        </button>
      ) : null}
    </>
  );
};

export default ScrollTopButton;
