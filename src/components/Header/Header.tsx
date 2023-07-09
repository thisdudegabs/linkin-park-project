import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import HamburgerMenu from "../../pages/HamburgerMenu";
import "../../styles/header.css";

interface NavLinkItem {
  path: string;
  display: string;
  external?: boolean;
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
    path: "https://store.linkinpark.com/",
    display: "MERCH",
    external: true,
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
  const isMobile = useMediaQuery({ query: "(max-width: 953px)" });

  const location = useLocation();

  const isSpecialRoute =
    location.pathname.startsWith("/updates/") ||
    location.pathname.startsWith("/videos");

  if (isMobile) {
    return <HamburgerMenu />;
  }

  return (
    <div className={`header ${isSpecialRoute ? "hidden-header" : ""}`}>
      {navLinks.map((link, index) => (
        <div key={index} className="navLinkWrapper">
          {link.external ? (
            <a
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="navLink"
            >
              <div className="navLinkInner">{link.display}</div>
            </a>
          ) : (
            <NavLink
              to={link.path}
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "navLink active" : "navLink"
              }
            >
              <div className="navLinkInner">{link.display}</div>
            </NavLink>
          )}
        </div>
      ))}
    </div>
  );
};
export default Header;
