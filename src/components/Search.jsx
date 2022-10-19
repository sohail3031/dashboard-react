import React from "react";
import Button from "./Button";
import { MdOutlineCancel } from "react-icons/md";

import { useStateContext } from "../contexts/ContextProvider";

const Search = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-full">
      <div className="float-right">
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 183)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex mt-6 w-full m-2 justify-center">
        <input
          type="text"
          className="w-1200 border-1 border-color p-2"
          placeholder="Type here..."
        />
        <button
          type="button"
          className="text-xl font-semibold text-white bg-red-500 p-4"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
