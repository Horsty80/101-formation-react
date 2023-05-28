import { ListBulletIcon as MenuIcon, MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import React from "react";
import profilePicture from "../assets/user.jpg";
import useToggleNavigation from "../hooks/useToggleNavigation";

// const DummyComp = memo(({ toggleNavigation }) => {
//   console.log("i am dummy render");
//   return <>I am dummy</>;
// });

const TopBar = () => {
  const { toggleNavigation } = useToggleNavigation();
  return (
    <div className="w-full h-[60px] flex justify-between items-center py-0 px-[10px]">
      <div className="relative w-[60px] h-[60px] flex justify-center items-center text-lg ">
        <MenuIcon
          className="h-7 w-7 cursor-pointer"
          onClick={toggleNavigation}
        />
      </div>
      {/* <DummyComp toggleNavigation={toggleNavigation} /> */}
      <div className="relative w-[400px] mx-0 my-[10px]">
        <label className="relative w-full">
          <input
            className="w-full h-[40px] rounded-3xl px-[5px] py-[20px] pl-[35px] text-lg outline-none border-[1px]"
            type="text"
            placeholder="Search here"
          />
          <SearchIcon className="absolute top-0 left-[10px] h-5 w-5" />
        </label>
      </div>
      <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden cursor-pointer">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={profilePicture}
          alt=""
        />
      </div>
    </div>
  );
};

export default TopBar;
