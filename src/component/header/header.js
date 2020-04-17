import React from "react";
import "./header.scss";
import { ReactComponent as Logo } from "../../crown.svg";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};
