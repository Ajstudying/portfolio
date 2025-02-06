const SkipNavigation = () => {
  return (
    <div className="absolute w-full h-0 z-50">
      <ul>
        <li>
          <a
            href="#home"
            className="block overflow-hidden w-px h-px bg-primary text-grayscaleF focus:w-auto focus:h-auto"
          >
            본문 바로가기
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="block overflow-hidden w-px h-px bg-primary text-grayscaleF focus:w-auto focus:h-auto"
          >
            포트폴리오 바로가기
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SkipNavigation;
