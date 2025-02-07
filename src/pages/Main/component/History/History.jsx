import { useEffect, useState } from "react";
import { customAxios } from "../../../../API/API";

const History = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  const getPortfolioData = async () => {
    try {
      const request = await customAxios.get("portfolioData.json");
      setPortfolioData(request.data.result);
    } catch (error) {
      alert("portfolioData.json(Portfolio.js)에서 에러가 발생했습니다.");
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  return (
    <section id="portfolio">
      <h2 className="pb-5 lg:pb-20" tabIndex={0}>
        History
      </h2>
      <ol className="flex flex-col gap-16">
        {portfolioData?.map(
          (
            {
              company,
              logo,
              url,
              period,
              description,
              workSummary,
              techStackSummary,
            },
            index
          ) => (
            <li
              key={index}
              className="flex gap-8 py-2 first:pt-8 flex-col lg:flex-row lg:gap-0"
            >
              <img
                src={logo}
                alt={`${company} 로고`}
                className="block w-60 h-20 lg:w-auto lg:h-10 rounded-md"
              />
              <h3 className="flex flex-col gap-1 basis-0 lg:basis-72">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 text-xl lg:text-2xl "
                >
                  {company}
                </a>
                <span className="text-base pl-2 font-thin text-[#717171] opacity-60">
                  {period}
                </span>
              </h3>
              <div className="flex flex-col gap-8 lg:flex-1 lg:gap-8 w-full">
                {description && (
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl lg:text-2xl">설명</h4>
                    <span
                      className="relative block font-omyu text-xl lg:text-2xl pl-3 lg:pl-6 before:content-[''] before:block before:w-1 lg:before:w-2 before:h-px before:absolute before:top-3 before:left-1 before:bg-[#000]"
                      tabIndex={0}
                    >
                      {description}
                    </span>
                  </div>
                )}

                {workSummary && (
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl lg:text-2xl" tabIndex={0}>
                      주요 프로젝트
                    </h4>
                    <ul className="flex flex-col">
                      {workSummary?.map((item, index) => (
                        <li
                          key={index}
                          className="relative font-omyu text-xl lg:text-2xl pl-3 lg:pl-6 before:content-[''] before:block before:w-1 lg:before:w-2 before:h-px before:absolute before:top-3 before:left-1 before:bg-[#000]"
                          tabIndex={0}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {techStackSummary && (
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl lg:text-2xl" tabIndex={0}>
                      기술 스택
                    </h4>
                    <span
                      className="relative block font-omyu text-xl lg:text-2xl pl-3 lg:pl-6 before:content-[''] before:block before:w-1 lg:before:w-2 before:h-px before:absolute before:top-3 before:left-1 before:bg-[#000]"
                      tabIndex={0}
                    >
                      {techStackSummary}
                    </span>
                  </div>
                )}
              </div>
            </li>
          )
        )}
      </ol>
    </section>
  );
};

export default History;
