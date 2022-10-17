import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

const Filters = () => {
  return (
    <>
      <div>
        <form class="flex items-center bg-gray-100 px-4 py-4 rounded-md">
          <BsPencilSquare cursor="pointer" size="30px" />
          <input
            type="text"
            placeholder="Type your todo"
            class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          />

          <AiOutlinePlusSquare cursor="pointer" size="30px" />
        </form>

        <ul class="flex justify-between my-4 text-xs text-gray-500">
          <li class="flex space-x-1 cursor-pointer">
            <span>Complete All Tasks</span>
          </li>
          <li class="cursor-pointer">Clear completed</li>
        </ul>
      </div>
    </>
  );
};

export default Filters;
