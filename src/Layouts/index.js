import React from "react";
import Header from "../Components/Header/index";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
}

export default Layout;
