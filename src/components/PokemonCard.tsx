import React from "react";
import Types from "./Types";

const PokemonCard = () => {
  return <div className="p-4 h-full cursor-pointer">
    <div className=" pt-12 pr-3 pb-12 pl-12 bg-green-500 relative flex justify-between h-full drop-shadow-md rounded-[3rem]">
        <span className="text-5xl text-gray-300 absolute top-8 right-4 z-0">
            #001
        </span>
        <div className="text-white">
            <h2 className="text-4xl font-extrabold m-0 capitalize">nameead</h2>
            <Types />
        </div>
        <div className="flex items-center justify-center max-w-[50%] z-10">
            <img src="bg.jpg" alt="pokemon"/>
        </div>
    </div>
  </div>;
};

export default PokemonCard;
