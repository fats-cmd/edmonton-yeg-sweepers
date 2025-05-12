import React from "react";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
