import React, { useState } from 'react';
import tennisCourts from "../tennisCourts.json";

const CourtList = () => {
  const [expandedCourt, setExpandedCourt] = useState(null);

  const toggleExpand = (courtName) => {
    setExpandedCourt(expandedCourt === courtName ? null : courtName);
  };

  return (
<div className="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
      <h2 className="text-xl font-semibold mb-2">Tennis Courts</h2>
      {tennisCourts.map((court) => (
        <div
          key={court.name}
          className={`
            p-3
            mb-2
            border
            border-gray-300
            bg-gray-100
            cursor-pointer
            ${expandedCourt === court.name ? 'border-blue-500' : ''}
          `}
          onClick={() => toggleExpand(court.name)}
        >
          <h3 className="text-lg font-semibold mb-0">{court.name}</h3>
          <div
            className={`
              mt-2
              overflow-hidden
              transition-max-height
              duration-300
              ease-out
              ${expandedCourt === court.name ? 'max-h-40 ease-in' : 'max-h-0'}
            `}
          >
            <p className="text-gray-700">{court.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourtList;