import profile from "../../assets/images/profile.png";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-5 p-5 border-b-2">
      <h1 className="text-4xl text-center font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
