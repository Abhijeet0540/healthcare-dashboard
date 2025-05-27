import React from 'react';
import { X } from 'lucide-react';
import { navigationItems } from '../data/navigationItems';

const Sidebar = ({ onClose }) => {
  // Find the settings section (the one with empty section name)
  const mainSections = navigationItems.filter(section => section.section !== '');
  const settingsSection = navigationItems.find(section => section.section === '');
  
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
        <h1 className="text-lg md:text-xl font-bold">
          <span className="text-cyan-400">Health</span>
          <span className="text-gray-900">care.</span>
        </h1>
        <button
          onClick={onClose}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <nav className="flex-1 px-4 py-4 md:py-6 space-y-6 md:space-y-8 overflow-y-auto flex flex-col">
        {/* Main navigation sections */}
        <div className="flex-1 space-y-6 md:space-y-8">
          {mainSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.section && (
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                  {section.section}
                </h3>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.id}>
                      <a
                        href="#"
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${item.active
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        onClick={onClose}>
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Settings section at the bottom */}
        {settingsSection && (
          <div className="mt-auto pt-4 border-t border-gray-100">
            <ul className="space-y-1">
              {settingsSection.items.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <a
                      href="#"
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${item.active
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      onClick={onClose}>
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;

