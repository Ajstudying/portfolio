import { useEffect, useState } from "react";
import { customAxios } from "../../../../API/API";

const Skillset = () => {
  const [skillsetData, setSkillsetDataData] = useState([]);

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
  }, []);

  return (
    <section id="skillset" className="lg:mt-20">
      <h2 tabIndex={0}>Skillset</h2>
      <ul>
        {skillsetData?.map(
          ({ techStackName, techStackImage, description }, index) => (
            <li
              key={index}
              className="flex items-start gap-2 py-8 first:pt-16 flex-col lg:flex-row lg:gap-0"
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
              <ul className="flex flex-col lg:flex-1 w-full">
                {description.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="relative block font-omyu text-lg lg:text-xl pl-3 lg:pl-6 before:content-[''] before:block before:w-1 lg:before:w-2 before:h-px before:absolute before:top-3 before:left-1 before:bg-[#000]"
                      tabIndex={0}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Skillset;
