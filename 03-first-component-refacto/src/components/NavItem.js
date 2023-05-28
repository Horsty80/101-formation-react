import React from "react";

const NavItem = ({ Icon, title }) => {
  return (
    <li className="navItem">
      <a className="navLink" href={`${title.toLowerCase()}`}>
        <span className="navIcon">{Icon && <Icon className="navSvg" data-testid="svg" />}</span>
        <span className="navTitle">{title}</span>
      </a>
    </li>
  );
};

export default NavItem;
