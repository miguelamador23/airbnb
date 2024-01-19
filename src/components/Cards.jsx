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

             <p className="mb-3 font-normal text-gray-700">
                 <span style={{ fontSize: "0.8rem", display: "flex", alignItems: "center" }}>
                     Type: {stay.type}. Beds: {stay.beds}
                     <span style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                         <span style={{ marginRight: "0.3rem" }}>{stay.rating}</span>
                         <svg
                             className="w-5 h-5 text-gray-800 dark:text-white"
                             aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="red"
                             viewBox="0 0 22 20"
                         >
                             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                         </svg>
                     </span>
                 </span>
             </p>


              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                {stay.title}
              </h5>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg "
              >
                Reserve
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
