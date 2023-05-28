import React from "react";

const Help = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center flex-col space-y-5">
        <h3 className="text-primary font-bold leading-9 text-5xl">Goats</h3>
        <div className="flex flex-col space-y-5">
          <img alt='goats' src="https://images.pexels.com/photos/933648/pexels-photo-933648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img alt='goats' src="https://images.pexels.com/photos/326929/pexels-photo-326929.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
      </div>
    </div>
  );
};

export default Help;
