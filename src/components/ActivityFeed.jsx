import React from "react";
import { activityData } from "../data/barsData";

const barColors = ["bg-gray-300", "bg-cyan-400", "bg-indigo-600", "bg-gray-500"];

const ActivityFeed = () => {
  const maxValue = Math.max(...activityData.flatMap(item => item.bars));

  return (
    <div className="bg-[#f5f8ff] rounded-xl md:rounded-2xl shadow-sm p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-sm md:text-base font-semibold text-indigo-900">Activity</h2>
        <div className="text-xs md:text-sm text-gray-500">3 appointments this week</div>
      </div>

      <div className="flex items-end justify-between">
        {activityData.map((item) => (
          <div key={item.day} className="flex flex-col items-center">
            <div className="flex items-end gap-1 sm:gap-2 md:gap-3 h-16 sm:h-20 md:h-24">
              {item.bars.map((value, i) => (
                <div
                  key={i}
                  className={`w-0.5 sm:w-1 rounded-sm ${barColors[i % barColors.length]}`}
                  style={{ height: `${(value / maxValue) * 100}%` }}
                />
              ))}
            </div>
            <div className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-500 mt-1 md:mt-2">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;