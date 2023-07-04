import React from "react";

const Member = ({ name, email }) => {
  return (
    <div className=" py-[2px] text-xs flex">
      <p className=" font-bold text-hackathon-blue-100 m-0 pl-[5%] w-[18%] ">
        {name}
      </p>
      <p className="m-0">{email}</p>
    </div>
  );
};

export default Member;