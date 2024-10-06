import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

const RoutesProject = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesProject;
