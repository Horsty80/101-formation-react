import React, { useState } from "react";
import logo from "../logo.svg";
import {
  ChatBubbleLeftIcon as ChatIcon,
  CogIcon,
  HomeModernIcon as HomeIcon,
  LockOpenIcon as LockClosedIcon,
  ArrowsRightLeftIcon as LogoutIcon,
  LifebuoyIcon as SupportIcon,
  UsersIcon as UserGroupIcon,
} from "@heroicons/react/24/outline";
import NavItem from "./NavItem";
import useToggleNavigation from "../hooks/useToggleNavigation";

const navItems = [
  { icon: HomeIcon, title: "Dashboard", uri: "#/" },
  { icon: UserGroupIcon, title: "Customers", uri: "#/customers" },
  { icon: ChatIcon, title: "Messages", uri: "#/messages" },
  { icon: SupportIcon, title: "Help", uri: "#/help" },
  { icon: CogIcon, title: "Settings", uri: "#/settings" },
  { icon: LockClosedIcon, title: "Password", uri: "#/password" },
];

function Navigation() {
  const [currentPath] = useState(window.location.pathname);
  const { isToggle } = useToggleNavigation();
  return (
    <div data-testid="navigation" className={`${isToggle ? "css-active" : ""} css-navigation`}>
      <ul className="absolute top-0 left-0 w-full">
        <li className="navItem mb-10 pointer-events-none">
          <span className="navLink">
            <span className="navIcon mt-4 mr-4">
              <img
                src={logo}
                className="rounded-full h-20 w-20 sm:h-full sm:w-full bg-white px-3 sm:rounded-lg"
                alt="logo"
                data-testid="app-logo"
              />
            </span>
          </span>
        </li>
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            Icon={navItem.icon}
            title={navItem.title}
            uri={navItem.uri}
            isActive={currentPath === navItem.uri}
          />
        ))}
        <li className="navItem">
          <button className={`navLink curverOutside`} onClick={() => alert("Bye bye")}>
            <span className="navIcon">
              <LogoutIcon className="navSvg" data-testid="svg" />
            </span>
            <span className="navTitle">Signout</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
