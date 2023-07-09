import React from "react";
import { RiCloseCircleLine, RiMenuLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "../styles/hamburgerMenu.css";

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

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <RiCloseCircleLine /> : <RiMenuLine />}
      </button>
      {isOpen && (
        <div className="hamburger-menu">
          <h1 className="menu-logo">LINKIN PARK</h1>
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.path} className="menu-item">
              {link.display}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
