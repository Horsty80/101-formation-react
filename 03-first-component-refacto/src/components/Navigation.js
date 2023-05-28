import React from "react";
import logo from "../logo.svg";
import {
  ChatBubbleLeftIcon as ChatIcon,
  CogIcon,
  HomeModernIcon as HomeIcon,
  LockOpenIcon as LockClosedIcon,
  ArrowsRightLeftIcon as  LogoutIcon,
  LifebuoyIcon as SupportIcon,
  UsersIcon as UserGroupIcon,
} from "@heroicons/react/24/outline";
import NavItem from "./NavItem";

function Navigation() {
  return (
    <div className="fixed w-[300px] h-full bg-primary border-l-[10px] border-l-primary transition-all duration-500 overflow-hidden">
      <ul className="absolute top-0 left-0 w-full">
        <li className="navItem mb-10 pointer-events-none">
          <a className="navLink" href="#home">
            <span className="navIcon mt-4 mr-4">
              <img
                src={logo}
                className="h-full w-full bg-white px-3 rounded-lg"
                alt="logo"
                data-testid="app-logo"
              />
            </span>
          </a>
        </li>
        <NavItem Icon={HomeIcon} title={"Dashboard"} />
        <NavItem Icon={UserGroupIcon} title={"Customers"} />
        <NavItem Icon={ChatIcon} title={"Messages"} />
        <NavItem Icon={SupportIcon} title={"Help"} />
        <NavItem Icon={CogIcon} title={"Settings"} />
        <NavItem Icon={LockClosedIcon} title={"Password"} />
        <NavItem Icon={LogoutIcon} title={"Signout"} />
      </ul>
    </div>
  );
}

export default Navigation;
