import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home from "../Home/index";
import Item from "../Item/index";

export const Navigation = () => {
  return (
    <Routes>
      <Route exact path="/news" element={<Home name="Home" />} />
      <Route path="/item" element={<Item />} />
    </Routes>
  );
};
