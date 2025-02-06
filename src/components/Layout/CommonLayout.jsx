import { useEffect, useState, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import TopButton from "../TopButton/TopButton";
import Footer from "../Footer/Footer";
import InitializeScroll from "../InitializeScroll/InitializeScroll";

/**
 * CommonLayout.js logics
 * 이 컴포넌트는 스크롤 및 뷰포트 추적 로직이 담긴 공통 레이아웃 컴포넌트입니다.
 * @property {function} handleScroll        - 스크롤 시 히어로 섹션(빅배너 슬라이드 배너 영역)을 기준으로 넘어갔는지를 확인하여 상태값을 바꾸는 함수입니다. 여기서 바뀐 상태값은 Header 컴포넌트로 전달됩니다.
 * @property {function} resizeListener      - 뷰포트 리사이징을 감지하는 함수입니다.
 */

const CommonLayout = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [isTopButton, setIsTopButton] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Home");
  const { pathname } = useLocation();

  const scrollSpy = () => {
    let home = document.querySelector("#home");
    let about = document.querySelector("#about");
    let portfolio = document.querySelector("#portfolio");
    let skillset = document.querySelector("#skillset");
    let contact = document.querySelector("#contact");

    if (window.scrollY >= home.offsetTop && window.scrollY < about.offsetTop) {
      setCurrentLocation("Home");
    } else if (
      window.scrollY >= about.offsetTop &&
      window.scrollY < portfolio.offsetTop
    ) {
      setCurrentLocation("About");
    } else if (
      window.scrollY >= portfolio.offsetTop &&
      window.scrollY < skillset.offsetTop
    ) {
      setCurrentLocation("Portfolio");
    } else if (
      window.scrollY >= skillset.offsetTop &&
      window.scrollY < contact.offsetTop
    ) {
      setCurrentLocation("Skillset");
    } else {
      setCurrentLocation("Contact");
    }

    window.scrollY > innerHeight ? setIsTopButton(true) : setIsTopButton(false);
  };

  //   useEffect(() => {
  //     const resizeSpy = () => {
  //       setInnerWidth(window.innerWidth);
  //       setInnerHeight(window.innerHeight);
  //     };

  //     window.addEventListener("resize", resizeSpy);

  //     const timer = setInterval(() => {
  //       window.addEventListener("scroll", scrollSpy);
  //     }, 100);

  //     return () => {
  //       clearInterval(timer);
  //       window.removeEventListener("scroll", scrollSpy);
  //     };
  //     //   eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [innerWidth, innerHeight, pathname]);
  const resizeSpy = () => {
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);
  };

  const handleScroll = () => {
    scrollSpy(); // 스크롤 이벤트 발생 시 scrollSpy 호출
  };

  useEffect(() => {
    window.addEventListener("resize", resizeSpy); // 리사이즈 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 리스너 추가

    return () => {
      window.removeEventListener("resize", resizeSpy); // 리스너 제거
      window.removeEventListener("scroll", handleScroll); // 리스너 제거
    };
  }, [pathname]); // 의존성 배열

  // useEffect(() => {
  //   const handleScroll = () => {
  //     scrollSpy();
  //   };

  //   window.addEventListener("resize", resizeSpy);
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("resize", resizeSpy);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // 빈 배열로 설정하여 컴포넌트가 마운트될 때만 리스너를 추가

  // const [xy, setXY] = useState({ x: 0, y: 0 });
  // const xyHandler = (e) => {
  //   const mouseX = e.clientX;
  //   const mouseY = e.clientY;
  //   setXY({ x: mouseX, y: mouseY });
  // };

  // const toggleTheme = () => {
  //     const htmlEl = document.querySelector("html");
  //     if (!htmlEl) return;

  //     const enabledDarkMode = htmlEl.classList.contains("dark");
  //     if (enabledDarkMode) {
  //         htmlEl.classList.remove("dark");
  //     } else {
  //         htmlEl.classList.add("dark");
  //     }
  // };

  return (
    <div
    // onMouseMove={xyHandler}
    >
      <Header currentLocation={currentLocation} />
      <Outlet />
      <TopButton isTopButton={isTopButton} />
      <Footer />

      {/* Outlet props 전달 시 받는 쪽에서 useOutletContext hook 필요 */}
      {/* <Outlet context={{ currentLocation }} /> */}

      {/* <div
        className="fixed z-10 w-2 h-2 -left-2 -top-2 rounded-full bg-secondary/80 text-[1px] text-grayscaleA/0  "
        style={{
          transform: `translate(${xy.x}px, ${xy.y}px)`,
        }}
      >
        마우스 커서 따라다니는 요소
      </div> */}

      {/* <button
                onClick={toggleTheme}
                className="btn-theme-changer fixed top-0 right-0 z-50 lg:w-14 lg:h-14 bg-cover bg-no-repeat bg-center rounded-full text-[1px] text-grayscaleF/0"
            >
                테마 토글 버튼
            </button> */}
    </div>
  );
};

export default CommonLayout;
