import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import TopBar from "../components/TopBar";
import useToggleNavigation from "../hooks/useToggleNavigation";

const MainLayout = () => {
  const { isToggle } = useToggleNavigation();
  return (
    <div>
      <Navigation />
      <div className={`${isToggle ? "css-active" : ""} css-main`}>
        <div className="top-0 bg-white">
          <TopBar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
