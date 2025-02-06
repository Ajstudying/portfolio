import { ReactComponent as IconGmail } from "../../../../assets/svg/contact/icon_gmail.svg";
import { ReactComponent as IconGithub } from "../../../../assets/svg/contact/icon_github.svg";
import { ReactComponent as IconPortfolio } from "../../../../assets/svg/contact/icon_portfolio.svg";
import { ReactComponent as IconGitbook } from "../../../../assets/svg/contact/icon_gitbook.svg";
import { ReactComponent as IconCertification } from "../../../../assets/svg/contact/icon_certification.svg";
import { ReactComponent as IconVelog } from "../../../../assets/svg/contact/icon_velog.svg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="justify-start lg:flex-row lg:justify-between lg:items-center"
    >
      <h2
        className="relative basis-0 lg:basis-72 before:hidden lg:before:block before:content-[''] before:h-px before:absolute before:top-1/2 before:-translate-y-1/2 before:left-48 before:w-24 before:bg-grayscaleA/10"
        tabIndex={0}
      >
        Contact
      </h2>
      <ul className="flex flex-row justify-center items-center gap-6 flex-1 lg:justify-end lg:pt-40 lg:pr-40">
        <li>
          <a
            href="https://drive.google.com/file/d/1fG4p4_pphptuGhQCPw86-_wEPkicQYRr/view"
            title="포트폴리오 바로 가기"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl transition-all ease-linear duration-200 hover:scale-110 hover:shadow-lg focus:scale-110 focus:shadow-lg"
          >
            <IconPortfolio className="color-b w-10 h-10 lg:w-14 lg:h-14" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Ajstudying"
            title="https://github.com/Ajstudying 깃허브 바로 가기"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl transition-all ease-linear duration-200 hover:scale-110 hover:shadow-lg focus:scale-110 focus:shadow-lg"
          >
            <IconGithub className="w-10 h-10 lg:w-14 lg:h-14" />
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1Gsx4SaONbK3BH1PKOA-HwE194tX7BdzM/view?usp=sharing"
            title="certification 바로 가기"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl transition-all ease-linear duration-200 hover:scale-110 hover:shadow-lg focus:scale-110 focus:shadow-lg"
          >
            <IconCertification className="w-10 h-10 lg:w-14 lg:h-14" />
          </a>
        </li>
        <li>
          <a
            href="mailto:aws1kaj@gmail.com"
            title="aws1kaj@gmail.com 이메일"
            className="block rounded-xl transition-all ease-linear duration-200 hover:scale-110 hover:shadow-lg focus:scale-110 focus:shadow-lg"
          >
            <IconGmail className="w-10 h-10 lg:w-14 lg:h-14" />
          </a>
        </li>
        {/* <li>
          <a
            href="https://your_id.gitbook.io/"
            title="your_id 깃북 바로 가기"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl transition-all ease-linear duration-200 hover:scale-110 hover:shadow-lg focus:scale-110 focus:shadow-lg"
          >
            <IconGitbook className="w-10 h-10 lg:w-14 lg:h-14" />
          </a>
        </li>
        <li>
          <a
            href="https://velog.io/your_id"
            title="your_id 벨로그 바로 가기"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl transition-all ease-linear duration-200 hover:scale-110 hover:shadow-lg focus:scale-110 focus:shadow-lg"
          >
            <IconVelog className="w-10 h-10 lg:w-14 lg:h-14" />
          </a>
        </li> */}
      </ul>
    </section>
  );
};

export default Contact;
