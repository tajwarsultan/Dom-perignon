import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/index";
import Item from "../Item/index";
import Account from "../Account/index";
import FAQ from "../Faq/index";

export const Navigation = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home name="Home" />} />
      <Route path="/account" element={<Account />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/item" element={<Item />} />
    </Routes>
  );
};
