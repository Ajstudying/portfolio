import { useEffect, useRef, useState } from "react";
import { customAxios } from "../../../../API/API";

const Skillset = () => {
  const [skillsetData, setSkillsetDataData] = useState([]);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const getSkillsetData = async () => {
    try {
      const request = await customAxios.get("skillsetData.json");
      setSkillsetDataData(request.data.result);
    } catch (error) {
      alert("skillsetData.json(Skillset.js)에서 에러가 발생했습니다.");
    }
  };

  useEffect(() => {
    getSkillsetData();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "all 1s",
      }}
      id="skillset"
      className="mt-5 lg:mt-40 lg:pt-40"
    >
      <h2 tabIndex={0}>Skillset</h2>
      <ul>
        {skillsetData?.map(
          ({ techStackName, techStackImage, description }, index) => (
            <>
              <li
                key={index}
                className="flex items-start gap-2 py-4 first:pt-16 flex-col lg:flex-row lg:gap-0"
              >
                <h3
                  className="inline-flex items-center gap-2 basis-0 lg:basis-72"
                  tabIndex={0}
                >
                  <img
                    src={techStackImage}
                    alt={`${techStackName} 로고`}
                    className="w-6 h-6"
                  />
                  {techStackName}
                </h3>
                <ul className="flex flex-col lg:flex-2 w-full">
                  {description.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="relative block font-omyu text-lg lg:text-2xl pl-3 lg:pl-6 before:content-[''] before:block before:w-1 lg:before:w-2 before:h-px before:absolute before:top-3 before:left-1 before:bg-[#000]"
                        tabIndex={0}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </li>
              <hr
                className="hidden lg:block"
                style={{ border: "0.5px solid rgba(128, 128, 128, 0.5)" }}
              />
            </>
          )
        )}
      </ul>
    </section>
  );
};

export default Skillset;
