import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoates";
import UserInfo from "../../UserInfo/UserInfo";
import NavItems from "./NavItems";
const Navigation = () => {
  return (
    <nav>
      <div>
        <NavLink
          to="/"
                  >
          Home
        </NavLink>
      </div>
      <ul>
        {mainRoutes.map((item) => (
          <NavItems item={item} key={item.path} />
        ))}
        <UserInfo />
      </ul>
    </nav>
  );
};

export default Navigation;
