import { useEffect, useRef, useState } from "react";
import Nav from "../Nav/Nav";

const Header = ({ currentLocation }) => {
  const [toggleHeader, setToggleHeader] = useState(false);
  const headerRef = useRef();

  const handleHeader = () => {
    setToggleHeader((prev) => !prev);
  };

  const handleOutside = (e) => {
    if (headerRef.current && !headerRef.current.contains(e.target)) {
      setToggleHeader(false);
    }
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setToggleHeader(false);
      }
    };

    window.addEventListener("keydown", close);

    if (toggleHeader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [toggleHeader]);

  return (
    <>
      <button
        type="button"
        className={`fixed top-2 right-2 z-40 w-10 h-10 transition-all duration-400 rounded-full bg-center bg-8 bg-no-repeat shadow-lg lg:hidden ${
          toggleHeader
            ? "bg-[url('/images/nav/icon_close.svg')] bg-primary"
            : "bg-[url('/images/nav/icon_nav_toggle.svg')] bg-grayscaleF"
        }`}
        onClick={handleHeader}
      >
        <span className="a11y-hidden">
          {toggleHeader ? "사이드 네비게이션 닫기" : "사이드 네비게이션 열기"}
        </span>
      </button>

      <header
        ref={headerRef}
        className={`fixed top-0 bottom-0 left-[-100%] z-30 p-4 transition-all duration-500 overflow-y-auto bg-grayscaleF flex flex-col justify-center items-center border-r-[1px] border-solid border-grayscaleE animate-slide w-0 lg:left-0 lg:w-auto lg:border-0 lg:bg-grayscaleF/0 ${
          toggleHeader ? "open" : ""
        }`}
      >
        <Nav currentLocation={currentLocation} handleHeader={handleHeader} />
      </header>
    </>
  );
};

export default Header;
