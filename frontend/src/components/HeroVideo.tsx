import React from "react";

const HeroVideo = () => {
  return (
    <div className="mb-[5%] flex justify-center">
      <video
        className="max-w-6xl"
        src="https://res.cloudinary.com/zapier-media/video/upload/q_auto:best/f_auto/v1726860621/Homepage%20%E2%80%94%20Sept%202024/sc01_HP_240917_Connect_v01_edm2pd.mp4"
        muted
        autoPlay
        loop
      />
    </div>
  );
};

export default HeroVideo;
