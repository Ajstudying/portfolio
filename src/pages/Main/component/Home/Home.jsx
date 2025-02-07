import { useState } from "react";

const Home = ({ scrollToDown }) => {
  return (
    <section
      id="home"
      className="relative gap-16 bg-[url('/images/about/bg-wallpaper.avif')] bg-right-top bg-cover before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-grayscaleF/80 dark:before:bg-grayscaleA/20"
      // style={{ border: "solid 2px crimson" }}
    >
      <h2
        className="relative z-20 font-omyu text-4xl lg:text-6xl text-right font-black leading-snug -top-20 pr-4"
        tabIndex={0}
      >
        사용자의 편의에 맞춘 <br className="block lg:hidden" /> 프로그램을
        개발하는 개발자
      </h2>
      <div className="relative z-20 flex flex-col gap-4">
        <span
          className="text-base font-omyu text-xl lg:text-4xl period-mark small"
          tabIndex={0}
        >
          사용자 친화적인 프로그램, <br className="block lg:hidden" /> 사용자가
          요청하는 바를 구현할 수 있도록 공부하고 있는 개발자입니다
        </span>
      </div>
      <button
        type="button"
        onClick={scrollToDown}
        tabIndex={-1}
        className="absolute z-10 right-0 bottom-0 flex self-center w-20 h-40 lg:w-24 lg:h-48 bg-[url('/images/common/icon_mouse.gif')] bg-center bg-no-repeat bg-30% text-[1px] text-grayscaleA/0"
      >
        버튼
      </button>
    </section>
  );
};

export default Home;
