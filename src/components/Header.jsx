import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-2 sm:py-3 md:py-4 w-full md:w-full lg:w-[600px]">
      <div className="flex items-center justify-between w-full gap-2 sm:gap-3 md:gap-4">
        <div className="flex-1 min-w-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <div className="relative">
            <Search className="absolute left-2 sm:left-2.5 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-7 sm:pl-8 md:pl-10 pr-2 sm:pr-3 md:pr-4 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200" />
          </div>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 flex-shrink-0">
          <button
            className="relative p-1 sm:p-1.5 md:p-2 text-gray-400 hover:text-gray-600 transition-all duration-200 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
            aria-label="Notifications">
            <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span className="absolute top-0 sm:top-0.5 md:top-1 right-0 sm:right-0.5 md:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-blue-600 rounded-full border border-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
