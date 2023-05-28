import React from "react";

const Password = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center flex-col space-y-5">
        <h3 className="text-primary font-bold leading-9 text-5xl">Cats</h3>
        <div className="flex flex-col space-y-5">
          <img alt='cats' src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*" />
          <img alt='cats' src="https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
      </div>
    </div>
  );
};

export default Password;
