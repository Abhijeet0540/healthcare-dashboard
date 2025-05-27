// src/layouts/DashboardLayout.jsx
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-16 border-b border-gray-200 px-4 md:px-6 flex items-center justify-between">
                    <Header />
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-400 flex items-center justify-center text-base md:text-xl">
                            🧑‍💼
                        </div>
                        <button className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white rounded-full flex items-center justify-center transition-all hover:scale-105">
                            <Plus size={18} />
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#F6FAFF]">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
