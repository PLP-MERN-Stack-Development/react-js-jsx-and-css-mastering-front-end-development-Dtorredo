import React from "react";
import PropTypes from "prop-types";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white dark:bg-neutral-900 overflow-hidden shadow-sm rounded-xl border border-gray-200 dark:border-neutral-800 p-6 ${className}`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
