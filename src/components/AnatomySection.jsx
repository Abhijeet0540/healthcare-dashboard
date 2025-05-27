import { FaSearchengin } from "react-icons/fa";

const AnatomySection = () => {
  return (
    <div className="bg-[#F6FAFF] w-full rounded-3xl p-4 md:p-6">
      <div className="relative flex items-center justify-center w-full min-h-[360px] md:min-h-[440px]">
        <img
          src="/Human-Body.png"
          alt="Human Body"
          className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-auto relative z-10"
        />
        <div className="absolute top-[25%] left-[48%] translate-x-1/2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1 z-20">
          <span className="text-sm">❤️</span>
          <span className="text-[8px] font-semibold whitespace-nowrap">Healthy Heart</span>
        </div>
        <div className="absolute bottom-[29%] right-[49%] -translate-x-1/2 bg-cyan-400 text-white px-2.5 py-1.5 rounded-lg shadow-md flex items-center gap-1 z-20">
          <span className="text-sm">⚡</span>
          <span className="text-[8px] font-semibold whitespace-nowrap">Healthy Leg</span>
        </div>
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md z-30 cursor-pointer hover:scale-105 transition-transform">
          <FaSearchengin className="w-4 h-4 text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
