import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Water from "../pages/water/Water";

const RoutesProject = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/water" element={<Water />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesProject;
