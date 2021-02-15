import React from "react";
import "./Header.css";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">Chats</a>
        </li>
      </ul>
      {/* <Search /> */}
    </div>
  );
};
export default Header;
