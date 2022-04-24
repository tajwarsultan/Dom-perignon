import React from "react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>{children}</div>
    </div>
  );
}

export default Layout;
