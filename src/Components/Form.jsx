import React, { useRef } from "react";

export const Form = () => {
const  date = useRef();
const  description = useRef();
const category = useRef();
const amount = useRef(0);

function handleSubmit(e){
    e.preventDefault()
   
}

  return (
    <>
      <form className="shadow m-8 border flex   flex-col justify-center item-center" onSubmit={handleSubmit}>
        <div className="flex justify-around w-full m-2">
          <input
            type="date"  ref={date}
            className="border border-gray-300 p-2rounded text-center"
          />
          <input
            type="text" ref={description}
            placeholder="Description"
            className="border border-gray-300 p-2rounded text-center"
          />
          <input
            type="text" ref={category}
            placeholder="Category"
            className="border border-gray-300 p-2rounded text-center"
          />
          <input
            type="number" ref={amount}
            placeholder="Amount"
            className="border border-gray-300 p-2rounded text-center"
          />
        </div>
        <button className=" btn btn-secondary bg-gray-400 py-2 px-2  mx-auto my-4">
          Add Transaction
        </button>
      </form>
    </>
  );
};
