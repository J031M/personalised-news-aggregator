import { Routes, Route } from "react-router-dom";
import Article1 from "../article/Article%201";
import Home from "../Home";
import Login from "../Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:title" element={<Article1 />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
