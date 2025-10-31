import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ onToggleTheme, isDark }) => {
  return (
    <nav className="bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-xl font-bold text-black dark:text-white"
            >
              PLP
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link
                to="/"
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Home
              </Link>
              <Link
                to="/tasks"
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Tasks
              </Link>
              <Link
                to="/posts"
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
              >
                Posts
              </Link>
            </div>
          </div>
          <button
            onClick={onToggleTheme}
            className="px-3 py-1.5 text-sm rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
            aria-label="Toggle dark mode"
          >
            {isDark ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
};

export default Navbar;
