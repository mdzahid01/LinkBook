import React from 'react';

import { FaPlusSquare } from "react-icons/fa";

/**
 * Button Component
 *
 * A reusable and accessible button component for user interactions.
 *
 * @param {string} btnText - The text to display inside the button.
 * @param {function} func - The function to execute when the button is clicked.
 * @param {string} clsname - Additional class names for custom styling (optional).
 * @param {string} type - The type of button ('button', 'submit', or 'reset'). Default is 'button'.
 * @param {object} rest - Any additional props (e.g., disabled, aria-label) to be passed to the button.
 *
 * @returns {JSX.Element} A styled, accessible button element.
 */
const Button = ({ btnText, func, clsname = '', type = 'button', ...rest }) => {
  return (
    <button
      className={`btn ${clsname}`.trim()}
      onClick={func}
      type={type}
      {...rest}
    >
      <FaPlusSquare  />
    </button>
  );
};

export default Button;
