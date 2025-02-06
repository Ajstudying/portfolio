import { useEffect, useState, useRef } from "react";
import Loading from "../../components/Loading/Loading";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import History from "./component/History/History";
import Skillset from "./component/Skillset/Skillset";
import Contact from "./component/Contact/Contact";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const targetRef = useRef(null);

  const scrollToDown = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {loading && <Loading />}
      <main id="main">
        <Home id="home" scrollToDown={scrollToDown} />
        <About id="about" targetRef={targetRef} />
        <History id="history" />
        <Skillset id="skillset" />
        <Contact id="contact" />
      </main>
    </>
  );
};

export default Main;
