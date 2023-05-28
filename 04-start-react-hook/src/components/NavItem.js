import React from "react";

const NavItem = ({ Icon, title, isActive, uri }) => {
  const activeListItemStyle = isActive ? "bg-white" : "";
  const activeLinkStyle = isActive ? "text-primary curverOutsideBis" : "";
  return (
    <li className={`navItem ${activeListItemStyle}`}>
      <a className={`navLink curverOutside ${activeLinkStyle}`} href={`${uri}`}>
        <span className="navIcon">
          {Icon && <Icon className="navSvg" data-testid="svg" />}
        </span>
        <span className="navTitle">{title}</span>
      </a>
    </li>
  );
};

export default NavItem;
