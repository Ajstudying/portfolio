const TopButton = ({ isTopButton }) => {
  const goToTop = () => {
    window.scroll({
      top: 0,
    });
  };

  return (
    <button
      type="button"
      onClick={goToTop}
      className={`btn-top fixed z-20 bottom-2 right-2 lg:bottom-3 lg:right-3 w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-center bg-12 bg-[url('/images/common/icon_top.png')] bg-primary opacity-0 translate-y-2 transition-all duration-300 shadow-lg text-[1px] text-grayscaleA/0 ${
        isTopButton ? "scrolled" : ""
      }`}
    >
      화면 최상단 이동
    </button>
  );
};

export default TopButton;
