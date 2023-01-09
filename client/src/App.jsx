import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./pages/Header";
const App = () => {
  return (
    <div className="app w-full">
      <div className="app__container w-[1200px] container mx-auto">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
