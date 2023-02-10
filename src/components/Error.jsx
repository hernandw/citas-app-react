import React from "react";

const Error = ({message}) => {
  return (
    <div className="bg-red-800 text-white p-3 text-center font-bold rounded-md mb-2 uppercase">
      <p>{message}</p>
    </div>
  );
};

export default Error;
