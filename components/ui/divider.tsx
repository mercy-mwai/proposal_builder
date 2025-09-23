import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center my-6">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 relative">
        <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-200 to-purple-600 text-white rounded-full shadow-md">
          OR
        </span>
      </span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default Divider;
