import React from "react";
import { NavLink } from "react-router-dom";
import { useNav } from "../../hooks/useNav";
const NavItems = ({ item }) => {
  const { location, authToken } = useNav();
  return (
    <>
      {!item.private && !item.restricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}

            activeClassName="text-green-500"
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {authToken && item.private && !item.restricted && (
        <li>
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
      {!authToken && !item.private && item.restricted && (
        <li >
          <NavLink
            to={{
              pathname: item.path,
              state: { from: location.pathname },
            }}
            exact={item.exact}
          >
            {item.name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavItems;
