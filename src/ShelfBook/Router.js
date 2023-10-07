import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

const RouterBook = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default RouterBook;
