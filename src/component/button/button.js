import React from "react";
import "./button.scss";

export const Button = ({ children, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
