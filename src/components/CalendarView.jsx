import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { calendarData } from '../data/appointments';
const CalendarView = () => {

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2 sm:mb-3 md:mb-4">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#2f2f41] pr-2">
          {calendarData.month || 'October 2021'}
        </h2>
        <div className="flex space-x-1 sm:space-x-2 md:space-x-3 text-indigo-500 flex-shrink-0">
          <button
            className="p-1 sm:p-1.5 md:p-2 rounded-lg hover:bg-indigo-50 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            aria-label="Previous month">
            <ChevronLeft size={14} className="sm:hidden" />
            <ChevronLeft size={16} className="hidden sm:block md:hidden" />
            <ChevronLeft size={18} className="hidden md:block" />
          </button>
          <button
            className="p-1 sm:p-1.5 md:p-2 rounded-lg hover:bg-indigo-50 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            aria-label="Next month">
            <ChevronRight size={14} className="sm:hidden" />
            <ChevronRight size={16} className="hidden sm:block md:hidden" />
            <ChevronRight size={18} className="hidden md:block" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0.5 sm:gap-2 md:gap-3 lg:gap-2 text-center justify-center text-xs sm:text-sm font-medium text-gray-800">
        {calendarData.days.map((day, idx) => {
          const isSelected = day.highlight;
          const isDisabled = day.disabled;
          return (
            <div
              key={idx}
              className={`flex flex-col items-center px-0.5 sm:px-2 py-1.5 sm:py-3 md:py-4 rounded-md sm:rounded-xl md:rounded-2xl transition-all duration-200 cursor-pointer min-h-[100px] sm:min-h-[120px] md:min-h-[140px]
                ${isSelected
                  ? 'bg-indigo-100 hover:bg-indigo-200 shadow-md'
                  : 'hover:bg-gray-50 hover:shadow-sm'
                }
                ${isDisabled
                  ? 'text-gray-300 cursor-not-allowed hover:bg-transparent hover:shadow-none'
                  : ''
                }
              `}>
              <div className="text-[9px] sm:text-[11px] md:text-[12px] text-gray-500 mb-0.5 sm:mb-1 font-medium">
                {day.day}
              </div>
              <div className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 transition-colors
                ${isSelected ? 'text-indigo-700' : 'text-gray-900'}
              `}>
                {day.date}
              </div>
              <div className="mt-0.5 sm:mt-2 space-y-0.5 sm:space-y-1 w-full px-0.5 sm:px-1">
                {day.appointments
                  .filter(appt => appt !== '')
                  .map((appt, i) => (
                    <div
                      key={i}
                      className={`px-1 sm:px-2 md:px-2 py-0.5 md:py-1 sm:py-1 text-[7px] sm:text-[9px] md:text-[10px] lg:text-[11px] rounded-full font-medium shadow-sm mx-auto w-fit max-w-full transition-all duration-200
                        ${isSelected && appt === '09:00'
                          ? 'bg-indigo-700 text-white shadow-md'
                          : 'bg-[#eef0f8] text-gray-700 hover:bg-[#e0e7ff] hover:text-indigo-700'
                        }
                      `}
                    >
                      {appt}
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col sm:flex-row  gap-4 mt-6 sm:mt-8 overflow-x-auto">
        <div className="bg-indigo-700 text-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300  group w-full sm:w-[200px] md:w-[220px]">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-3">
              <h3 className="text-base font-semibold mb-1 group-hover:text-indigo-100 transition-colors">
                Dentist
              </h3>
              <p className="text-sm opacity-90 mb-1">09:00-11:00</p>
              <p className="text-xs opacity-75">Dr. Cameron Williamson</p>
            </div>
            <div className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
              🦷
            </div>
          </div>
        </div>

        <div className="bg-[#eef0fc] text-gray-900 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300  group w-full sm:w-[260px] md:w-[290px]">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-3">
              <h3 className="text-base font-semibold mb-1 group-hover:text-indigo-700 transition-colors">
                Physiotherapy Appointment
              </h3>
              <p className="text-sm text-gray-600 mb-1">11:00-12:00</p>
              <p className="text-xs text-gray-500">Dr. Kevin Djones</p>
            </div>
            <div className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
              💪
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CalendarView;
