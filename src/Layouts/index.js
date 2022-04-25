import React from "react";
import Footer from "./Footer/index";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        {children}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
