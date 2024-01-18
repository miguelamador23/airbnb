import React, { useEffect, useState } from "react";
import "./Cards.css";

function Cards() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    async function fetchStays() {
      try {
        const response = await fetch("stays.json");
        const data = await response.json();
        setStays(data);
      } catch (error) {
        console.error("Error fetching stays:", error);
      }
    }

    fetchStays();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <h2 className="text-2xl font-bold ml-8 text-black">Stays in Finland</h2>
        <span className=" font-medium mr-8 text-black">
          {stays.length}+ stays
        </span>
      </div>

      <div className="cards-container">
        {stays.map((stay) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            key={stay.id}
          >
            <img className="rounded-t-lg" src={stay.photo} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                {stay.title}
              </h5>
              <p className="mb-3 font-normal text-black">
                Type: {stay.type}
              </p>
              <p className="mb-3 font-normal text-black">
                Beds: {stay.beds}
              </p>
              <p className="mb-3 font-normal text-black">
                Rating: {stay.rating}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;