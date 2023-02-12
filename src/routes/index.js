import { Routes, Route } from "react-router-dom";
import Article1 from "../article/Article%201";
import Home from "../Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:title" element={<Article1 />} />
    </Routes>
  );
}

export default Router;
