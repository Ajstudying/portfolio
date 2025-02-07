import { ReactComponent as IconPerson } from "../../../../assets/svg/about/icon_person.svg";
import { ReactComponent as IconMail } from "../../../../assets/svg/about/icon_mail.svg";
import { ReactComponent as IconPhone } from "../../../../assets/svg/about/icon_phone.svg";
import { ReactComponent as IconThumb } from "../../../../assets/svg/about/icon_thumb.svg";
import { ReactComponent as IconCertification } from "../../../../assets/svg/about/icon_certification.svg";
import { ReactComponent as IconLightbulb } from "../../../../assets/svg/about/icon_lightbulb.svg";

const About = ({ targetRef }) => {
  return (
    <section
      id="about"
      ref={targetRef}
      //  lg:pb-80 lg:mb-40
      className="lg:flex-col lg:mb-40 "
    >
      <div className="pb-5 lg:pb-10">
        <h2 className="relative basis-0 lg:basis-72 before:hidden lg:before:block before:content-[''] before:h-px before:absolute before:top-1/2 before:-translate-y-1/2 before:left-48 before:w-24 before:bg-grayscaleA/10">
          About
        </h2>
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between rounded-lg lg:p-8 ">
        <article className="flex flex-col gap-5 lg:gap-20 w-full lg:w-4/5 p-4 lg:p-8">
          <div className="about-div">
            <div className="flex flex-col w-20">
              <span className="flex justify-center">
                <IconPerson className="w-10 h-10 lg:w-12 lg:h-14" />
              </span>
              <span className="flex justify-center font-bold text-grayscaleG">
                Me
              </span>
            </div>
            <p className="about-p">강애진, Ae-Jin Kang</p>
          </div>
          <div className="about-div">
            <div className="flex flex-col w-20">
              <span className="flex justify-center">
                <IconMail className="w-10 h-10 lg:w-12 lg:h-14" />
              </span>
              <span className="flex justify-center font-bold text-grayscaleG">
                Mail
              </span>
            </div>
            <p className="about-p">aws1kaj@gmail.com</p>
          </div>
          <div className="about-div">
            <div className="flex flex-col w-20">
              <span className="flex justify-center">
                <IconCertification className="w-10 h-10 lg:w-12 lg:h-14" />
              </span>
              <span className="flex justify-center font-bold text-grayscaleG">
                Certification
              </span>
            </div>
            <p className="about-p">
              SQL 개발자
              <br />
              Advanced certification of Automation anywhere
            </p>
          </div>
        </article>
        <hr className="h-auto lg:m-8" style={{ border: "solid 1px gray" }} />
        <article className="flex flex-col gap-5 w-full lg:w-4/5 p-4 lg:p-8">
          <div className="about-div">
            <div className="flex flex-col w-20">
              <span className="flex justify-center">
                <IconThumb className="w-10 h-10 lg:w-12 lg:h-14" />
              </span>
              <span className="flex justify-center font-bold text-grayscaleG">
                Education
              </span>
            </div>
            <div className="flex items-center">
              <p className="about-p">
                AWS클라우드 활용 자바 풀스택 개발자(React&Springboot)
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <ul className="w-full lg:w-4/5 list-custom pl-5 lg:pl-5">
              <li className="about-p">Java 프로그래밍과 데이터베이스</li>
              <li className="about-p">프레임워크 중심의 웹프로그래밍</li>
              <li className="about-p">
                Java, JavaScript, Spring Boot 개인프로젝트
              </li>
              <li className="about-p">
                Kotlin, React, 서비스 통합 CI/CD 협업도구
              </li>
              <li className="about-p">
                Kotlin, React, Spring Boot의 팀프로젝트
              </li>
              <li className="about-p">Aws 클라우드 배포</li>
            </ul>
          </div>
          <div className="about-div">
            <div className="flex flex-col w-20">
              <span className="flex justify-center">
                <IconLightbulb className="w-10 h-10 lg:w-12 lg:h-14" />
              </span>
              <span className="flex justify-center font-bold text-grayscaleG">
                Stack
              </span>
            </div>
            <p className="font-omyu flex items-center lg:text-lg">
              HTML, CSS, Java, Typescript, Javascript, Kotlin, React, Spring
              Boot, node.js, MySQL, Redis, RabbitMQ, styled-component, emotion,
              tailwind
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
