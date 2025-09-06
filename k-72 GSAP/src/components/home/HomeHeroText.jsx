import React from "react";
import Video from "./Video";
const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-white pt-5 text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center"> L'étincelle </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center">
        qui{" "}
        <div className='h-[7vw] rounded-full overflow-hidden'>
          <Video />
        </div>{" "}
        génère{" "}
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
