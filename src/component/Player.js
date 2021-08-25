import React from "react";
import Image from "./Image";

//component for rendering player
const Player = ({ playerNumber, data }) => {
  return (
    <div className="border-blue-300 border rounded-xl py-5 my-2 w-auto">
      <div className="text-center text-3xl font-bold">
        Player {playerNumber}
      </div>
      <div className="justify-center flex flex-wrap">
        {data.map((imageName, index) => (
          <Image imagesrc={imageName} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Player;
