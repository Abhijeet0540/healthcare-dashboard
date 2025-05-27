import React, { useState } from 'react';
import { Menu, Plus } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AnatomySection from './components/AnatomySection';
import HealthStatusCards from './components/HealthStatusCards';
import CalendarView from './components/CalendarView';
import UpcomingSchedule from './components/UpcomingSchedule';
import ActivityFeed from './components/ActivityFeed';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen p-2 bg-[#E6EFFA]">
      <div className="w-full max-w-[1600px] mx-auto bg-white rounded-3xl shadow-lg overflow-hidden flex">
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        {/* Sidebar */}
        <div
          className={`
            fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
            bg-white border-r border-gray-200 lg:translate-x-0 lg:static lg:inset-0 lg:rounded-l-3xl
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white border-b border-gray-200 px-3 sm:px-4 md:px-6 py-3 md:py-0 md:h-[77px] flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex-shrink-0"
                aria-label="Open sidebar"
                data-testid="mobile-menu-btn">
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <div className="flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <Header />
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 flex-shrink-0">
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-sm sm:text-base md:text-xl transition-all duration-200 hover:scale-105 cursor-pointer shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
                role="button"
                tabIndex={0}
                aria-label="User profile menu"
                data-testid="user-avatar">
                <span role="img" aria-label="User avatar">🧑‍💼</span>
              </div>
              <button
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 shadow-md"
                aria-label="Add new appointment"
                data-testid="add-appointment-btn"
                type="button"
              >
                <Plus size={14} className="sm:hidden" strokeWidth={2.5} aria-hidden="true" />
                <Plus size={16} className="hidden sm:block md:hidden" strokeWidth={2.5} aria-hidden="true" />
                <Plus size={20} className="hidden md:block" strokeWidth={2.5} aria-hidden="true" />
              </button>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-[#f8fafc]">
            <div className="flex flex-col xl:flex-row gap-3 sm:gap-4 xl:gap-6 p-3 sm:p-4 md:p-6 max-w-full">
              <div className="flex-1 min-w-0 max-w-full xl:max-w-none">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-2 sm:gap-0">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 truncate">Dashboard</h1>
                  <div className="text-xs sm:text-sm text-indigo-600 font-medium cursor-pointer hover:text-indigo-700 flex-shrink-0 transition-colors">
                    This Week ↓
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:h-[400px]">
                    <AnatomySection />
                    <HealthStatusCards />
                  </div>
                  <ActivityFeed />
                </div>
              </div>
              <div className="w-full xl:w-2/4 bg-[#f5f8ff] rounded-xl p-3 sm:p-4 md:p-6">
                <CalendarView />
                <UpcomingSchedule />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

