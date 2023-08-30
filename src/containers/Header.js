import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>FakeShop</Link>
        </li>

        <li>
          <Link to={"/allusers"}>All Users</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
