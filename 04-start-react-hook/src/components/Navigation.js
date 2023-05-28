import React, { useEffect, useState } from "react";
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
import useToggleNavigation from "../hooks/useToggleNavigation";

const navItems = [
  { icon: HomeIcon, title: "Dashboard", uri: "/" },
  { icon: UserGroupIcon, title: "Customers", uri: "/customers" },
  { icon: ChatIcon, title: "Messages", uri: "/messages" },
  { icon: SupportIcon, title: "Help", uri: "/help" },
  { icon: CogIcon, title: "Settings", uri: "/settings" },
  { icon: LockClosedIcon, title: "Password", uri: "/password" },
  { icon: LogoutIcon, title: "Signout", uri: "/signout" },
];

function Navigation() {
  const [currentPath, setCurrentPath] = useState("/");
  useEffect(() => {
    const pathname = window.location.pathname;
    setCurrentPath(pathname);
  }, [setCurrentPath]);

  const { isToggle } = useToggleNavigation();
  const activeStyle = isToggle ? "w-[80px]" : "w-[300px]";
  return (
    <div
      className={`${activeStyle} fixed h-full bg-primary border-l-[10px] border-l-primary transition-all duration-500 overflow-hidden`}
    >
      <ul className="absolute top-0 left-0 w-full">
        <li className="navItem mb-10 pointer-events-none">
          <a className="navLink" href="home">
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
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            Icon={navItem.icon}
            title={navItem.title}
            uri={navItem.uri}
            isActive={currentPath === navItem.uri}
          />
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
