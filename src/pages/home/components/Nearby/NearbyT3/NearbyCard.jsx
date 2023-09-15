import React from "react";

const NearbyCard = ({ icon, name, duration }) => {
  return (
    <div className="text white border-2 border-third max-w-[270px] h-[270px] sm:max-w-[300px] space-y-6 p-6 text-third relative">
      <div className="h-24 w-24 absolute border-primary border-t-4 border-r-4 border-l-2 border-b-2 border-l-third border-b-third -top-[3px] -right-[3px]" />
      <img className="h-14 w-14" src={icon} alt="" />
      <p className="font-bold text-big">{name} </p>
      <p className="text-smaller">{duration} MIN </p>
    </div>
  );
};

export default NearbyCard;
