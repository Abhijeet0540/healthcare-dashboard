import React from 'react';
import { schedule } from '../data/healthData';

const UpcomingSchedule = () => {
  return (
    <div className="w-full mt-4 md:mt-6">
      <h2 className="text-lg md:text-xl font-semibold text-[#1e1b4b] mb-4 md:mb-6">The Upcoming Schedule</h2>
      {schedule.map((section, index) => (
        <div key={index} className="mb-4 md:mb-6">
          <p className="text-xs md:text-sm text-[#737191] font-medium mb-2 md:mb-3">{section.day}</p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#eef0fc] text-[#1e1b4b] rounded-xl px-4 py-2 md:px-5 md:py-3 shadow-sm flex items-center gap-3 w-auto max-w-full"
              >
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-xs md:text-sm truncate">{item.title}</span>
                  <span className="text-[10px] md:text-xs text-[#5c5a7a]">{item.time}</span>
                </div>
                <div className="text-lg md:text-xl flex-shrink-0">{item.emoji}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
