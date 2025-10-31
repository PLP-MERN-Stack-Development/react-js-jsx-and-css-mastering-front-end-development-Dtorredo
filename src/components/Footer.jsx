import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-neutral-800 mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-700 dark:text-gray-200">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
