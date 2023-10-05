import React from "react";
import { Link, useParams } from "react-router-dom";
import carsData from "./cars.json";
import CarCard from "./CarCard";

const ITEMS_PER_PAGE = 6;

const CarList = ({ searchQuery }) => {
  const { page } = useParams();
  const currentPage = parseInt(page || 1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  //Filter cars based on the search query
  const filteredCars = carsData.cars.filter(
    (car) =>
      car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const endIndex = startIndex + ITEMS_PER_PAGE;
  const cars = filteredCars.slice(startIndex, endIndex);

  //Total number of cars
  const totalCars = carsData.cars.length;

  // total no. of pages
  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);

  return (
    <>
      <div className=" flex flex-wrap my-16 p-3">
        {cars.map((car) => (
          <CarCard key={cars.id} car={car} />
        ))}
      </div>
      <div className="  flex justify-between  w-full bg-white space-x-1 px-4 py-2 text-green-600 transition-colors duration- rounded-lg focus:shadow-outline shadow-2xl ">
        <p>
          Showing {endIndex} out of {totalCars}
        </p>

        <div className="">
          {currentPage > 1 && (
            <Link
              to={`/page/${currentPage - 1}`}
              className=" p-0.5 rounded-sm "
            >
              Previous
            </Link>
          )}

          {Array.from({ length: totalPages }).map((_, index) => (
            <Link
              key={index + 1}
              to={`/page/${index + 1}`}
              className="m-0.5 p-0.5 hover:bg-slate-300"
            >
              {index + 1}
            </Link>
          ))}
          {currentPage < totalPages && (
            <Link
              to={`/page/${currentPage + 1}`}
              className="bg-white p-0.5 rounded-sm"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default CarList;
