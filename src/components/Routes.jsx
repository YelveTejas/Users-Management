import React from "react";
import Adduser from "../pages/Adduser";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Details from "../pages/Details";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Adduser />}></Route>
        <Route path='/details/:id' element={<Details/>} ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
