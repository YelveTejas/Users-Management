import React from "react";
import Adduser from "../pages/Adduser";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Adduser />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
