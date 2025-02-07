import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkipNavigation from "./components/SkipNavigation/SkipNavigation";
import CommonLayout from "./components/Layout/CommonLayout";
import Main from "./pages/Main/Main";
import InitializeScroll from "./components/InitializeScroll/InitializeScroll";

const Router = () => {
  return (
    <BrowserRouter basename="/portfolio">
      {/* <SkipNavigation /> */}
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<InitializeScroll />} />
        </Route>

        {/* 404 Error */}
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
      {/* <InitializeScroll /> */}
    </BrowserRouter>
  );
};

export default Router;
