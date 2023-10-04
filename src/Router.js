import { Routes, Route } from "react-router-dom";
import HomeBookComponent from "./HomeBook";
import SearchBookComponent from "./SearchBook";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeBookComponent />} />
      <Route path="/search" element={<SearchBookComponent />} />
    </Routes>
  );
};

export default RouterComponent;
