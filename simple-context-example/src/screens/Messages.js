import React from "react";

const Messages = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center flex-col space-y-5">
        <h3 className="text-primary font-bold leading-9 text-5xl">Dogs</h3>
        <div className="flex flex-col space-y-5">
          <img alt='dogs' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" />
          <img alt='dogs' src="https://i.insider.com/5ef54cb61918242cfb4ec653?width=700" />
        </div>
      </div>
    </div>
  );
};

export default Messages;
