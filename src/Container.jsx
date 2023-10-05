import React, { useState } from "react";
import CarList from "./CarList";
import { FaFilter } from "react-icons/fa";

const Container = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mx-auto   bg-gradient-to-r from-slate-100  p-3 w-8/12 bg-slate-100 my-10 rounded-lg shadow-lg ">
      <div className=" m-2 p-2 flex w-full rounded-2xl shadow-lg bg-slate-300 ">
        <input
          type="text"
          className="m-2 p-1 w-1/3 rounded-xl  bg-gradient-to-t from-slate-100 "
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="search by name"
        />

        <span className="m-1 p-1 flex ">
          <option
            value=""
            className="bg-slate-300 shadow-lg p-2 rounded-xl flex"
          >
            Relevance ▼
          </option>
        </span>
        <span className="m-1 p-1 flex ">
          <option
            value=""
            className="bg-slate-300 shadow-lg p-2 rounded-xl flex"
          >
            Car Brands ▼
          </option>
        </span>
      </div>
      <CarList searchQuery={searchQuery} />
    </div>
  );
};

export default Container;
