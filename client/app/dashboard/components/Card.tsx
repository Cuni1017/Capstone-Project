import React from "react";

const Card = ({ children, ...rest }: { children: React.ReactNode }) => {
  return (
    <div
      className="border border-solid border-gray-100 shadow rounded-md bg-white"
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
