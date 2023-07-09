import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/header.css";

interface NavLinkItem {
  path: string;
  display: string;
}

const navLinks: NavLinkItem[] = [
  {
    path: "/home",
    display: "HOME",
  },
  {
    path: "/live",
    display: "LIVE",
  },

  {
    path: "/music",
    display: "MUSIC",
  },

  {
    path: "/merch",
    display: "MERCH",
  },
  {
    path: "/videos",
    display: "VIDEOS",
  },
  {
    path: "/updates",
    display: "UPDATES",
  },
  {
    path: "/members",
    display: "MEMBERS",
  },
  {
    path: "/follow",
    display: "FOLLOW",
  },
];

const Header = () => {
  const location = useLocation();

  const isSpecialRoute =
    location.pathname.startsWith("/updates/") ||
    location.pathname.startsWith("/videos");

  return (
    <div className={`header ${isSpecialRoute ? "hidden-header" : ""}`}>
      {navLinks.map((link, index) => (
        <div key={index} className="navLinkWrapper">
          <NavLink
            to={link.path}
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "navLink active" : "navLink"
            }
          >
            <div className="navLinkInner">{link.display}</div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
export default Header;
