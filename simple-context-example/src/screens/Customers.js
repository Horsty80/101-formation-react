import React from "react";

const Customers = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center flex-col space-y-5">
        <h3 className="text-primary font-bold leading-9 text-5xl">Sheeps</h3>
        <div className="flex flex-col space-y-5">
          <img alt='sheeps' src="https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <img alt='sheeps' src="https://images.pexels.com/photos/227691/pexels-photo-227691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
      </div>
    </div>
  );
};

export default Customers;
