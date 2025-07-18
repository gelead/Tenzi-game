import React from "react";

const Die = (props) => {
  return (
    <button
      onClick={() => props.hold(props.id)}
      id="box"
      className={`p-4 cursor-pointer w-16 ${
        props.isHeld ? "bg-green-400" : "bg-white"
      } shadow-lg text-2xl  font-bold h-15 rounded-md`}
    >
      {props.value}
    </button>
  );
};

export default Die;
