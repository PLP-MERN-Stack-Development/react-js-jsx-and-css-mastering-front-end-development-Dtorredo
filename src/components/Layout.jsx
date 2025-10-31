import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const Layout = ({ children }) => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <Navbar onToggleTheme={toggleTheme} isDark={isDark} />
      <main className="flex-1 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
