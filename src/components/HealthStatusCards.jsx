import React from 'react';
import { healthData } from '../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="flex flex-col justify-between items-end lg:h-[50px] w-full">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-1  gap-3 ">
        {healthData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-3 md:p-4 flex flex-col items-start space-y-2 w-full lg:w-[200px]"
          >
            <div className="flex items-center space-x-0.5">
              <span className="text-lg md:text-3xl">{item.emoji}</span>
              <h3 className="text-sm md:text-base font-semibold text-indigo-900">{item.name}</h3>
            </div>
            <p className="text-[10px] md:text-xs text-gray-400">Date: {item.date}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${item.color}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Sticky bottom right */}
      <div className="mt-auto self-end text-right pt-4">
        <a href="#" className="text-sm md:text-base hover:underline text-indigo-600">
          Details →
        </a>
      </div>
    </div>
  );
};

export default HealthStatusCards;
