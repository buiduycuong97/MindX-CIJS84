import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeClass = (params) => {
    return params.isActive ? "ok" : "";
  };

  return (
    <div>
      Header
      <ul>
        <li>
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/todolist" className={activeClass}>
            Todolist
          </NavLink>
        </li>
        <li>
          <NavLink to="/useeffect" className={activeClass}>
            UseEffect
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
