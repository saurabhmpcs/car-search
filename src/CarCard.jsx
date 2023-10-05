import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/Gi";
import { GiGasPump } from "react-icons/Gi";
import { GiSpeedometer } from "react-icons/Gi";
import { CiHeart } from "react-icons/Ci";

const CarCard = ({ car }) => {
  return (
    <>
      <div className="max-w-xs h-full w-full bg-slate-200  rounded overflow-hidden shadow-lg m-4 hover:opacity-90">
        <img
          src={car.image_url}
          alt={`${car.brand} ${car.model}`}
          className="w-fit p-2 h-fit  rounded-2xl"
        />
        <div className="flex justify-between mx-2 ">
          <span className="p-2 text-lg font-semibold font-serif">
            {car.brand + " " + car.model}
          </span>
          <span className="mx-1 my-2 px-0.5 py-1 border-dashed border-2 border-gray-500 rounded-xl ">
            {car.year}
          </span>
        </div>

        <div className="m-2 p-3 text-sm  shadow-md font-medium flex flex-wrap border-b-2 border-slate-50">
          <span className="">
            <span className="flex ">
              <BsFillPeopleFill className="m-1" /> 4 People
            </span>
          </span>
          <span className="mx-10">
            <span className="flex ">
              <GiGasPump className="m-1" /> Hybrid
            </span>
          </span>
          <span className="">
            <span className="flex ">
              <GiSpeedometer className="m-1" /> {car.km_per_liter} / Liter
            </span>
          </span>
          <span className="mx-7">
            <span className="flex ">
              <GiSteeringWheel className="m-1" /> Automatic
            </span>
          </span>
        </div>
        <div className=" m-2 p-2  flex justify-between shadow-lg">
          <span>
            {" "}
            <span className="text-xl font-semibold">
              {" "}
              $ {car.price_per_month}{" "}
            </span>{" "}
            <span className="text-sm font-thin"> / month</span>
          </span>
          <span className="flex ">
            <span className=" p-1 m-1 text-2xl font-bold bg-indigo-200 rounded  ">
              <CiHeart />
            </span>{" "}
            <span className="bg-blue-500 text-white font-light px-3 py-1 m-1 rounded-md">
              Rent now
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default CarCard;
