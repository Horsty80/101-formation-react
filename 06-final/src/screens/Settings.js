import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center flex-col space-y-5">
        <h3 className="text-primary font-bold leading-9 text-5xl">Sharks</h3>
        <div className="flex flex-col space-y-5">
          <img
            alt="sharks"
            src="https://images.pexels.com/photos/2747248/pexels-photo-2747248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <img
            alt="sharks"
            src="https://images.pexels.com/photos/1700656/pexels-photo-1700656.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
