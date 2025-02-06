import { useEffect, useState } from "react";
import { customAxios } from "../../API/API";

const Nav = ({ handleHeader, currentLocation }) => {
  const [menuData, setMenuData] = useState([]);

  const getMenuData = async () => {
    try {
      const request = await customAxios.get("menuData.json");
      setMenuData(request.data.result);
    } catch (error) {
      alert("menuData.json(Nav.js)에서 에러가 발생했습니다.");
    }
  };

  const moveToSection = (e) => {
    e.preventDefault();

    let target = e.currentTarget.hash;
    let offset = document.querySelector(target).offsetTop;

    window.scrollTo({
      top: offset,
      // 추후 쓰로틀링과 디바운스 스터디 후 적용하기
      // behavior: "smooth",
    });

    if (window.innerWidth < 1024) {
      handleHeader();
    }
  };

  useEffect(() => {
    getMenuData();
  }, []);

  return (
    <nav className="w-full">
      <ul className="nav-list flex flex-col gap-4">
        {menuData.map(({ path, name, image }, index) => (
          <li
            key={index}
            className={`relative whitespace-nowrap ${
              currentLocation.toLowerCase() ===
              path.replace("#", "").toLowerCase()
                ? "selected"
                : ""
            }`}
          >
            <a
              onClick={moveToSection}
              href={path}
              className="inline-flex justify-start items-center gap-2 text-grayscaleA py-3 px-5 rounded-full bg-grayscaleE h-[56px] w-full overflow-hidden duration-300 lg:shadow-lg lg:text-grayscaleF hover:bg-primary hover:text-grayscaleF  lg:hover:w-auto lg:hover:px-5 lg:justify-center lg:w-14 lg:h-14 lg:p-0 group"
            >
              <img
                src={image}
                alt={name}
                className="w-6 h-6 group-hover:invert"
              />
              <span className="lg:hidden lg:group-hover:block">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
