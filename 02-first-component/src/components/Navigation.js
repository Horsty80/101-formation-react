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

function Navigation() {
  return (
    <div className="fixed w-[300px] h-full bg-primary border-l-[10px] border-l-primary transition-all duration-500 overflow-hidden">
      <ul className="absolute top-0 left-0 w-full">
        <li className="navItem mb-10 pointer-events-none">
          <a className="navLink" href="#logo">
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
        <li className="navItem">
          <a className="navLink" href="#dashboard">
            <span className="navIcon">
              <HomeIcon className="navSvg" />
            </span>
            <span className="navTitle">Dashboard</span>
          </a>
        </li>
        <li className="navItem">
          <a className="navLink" href="#customers">
            <span className="navIcon">
              <UserGroupIcon className="navSvg" />
            </span>
            <span className="navTitle">Customers</span>
          </a>
        </li>
        <li className="navItem">
          <a className="navLink" href="#messages">
            <span className="navIcon">
              <ChatIcon className="navSvg" />
            </span>
            <span className="navTitle">Messages</span>
          </a>
        </li>
        <li className="navItem">
          <a className="navLink" href="#help">
            <span className="navIcon">
              <SupportIcon className="navSvg" />
            </span>
            <span className="navTitle">Help</span>
          </a>
        </li>
        <li className="navItem">
          <a className="navLink" href="#settings">
            <span className="navIcon">
              <CogIcon className="navSvg" />
            </span>
            <span className="navTitle">Settings</span>
          </a>
        </li>
        <li className="navItem">
          <a className="navLink" href="#password">
            <span className="navIcon">
              <LockClosedIcon className="navSvg" />
            </span>
            <span className="navTitle">Password</span>
          </a>
        </li>
        <li className="navItem">
          <a className="navLink" href="#signout">
            <span className="navIcon">
              <LogoutIcon className="navSvg" />
            </span>
            <span className="navTitle">Signout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
