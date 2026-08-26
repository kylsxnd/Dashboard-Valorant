import Navbar from '@/components/Navbar';

export default function RankingsPage() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-[#dbdee1] font-sans text-xs">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-black text-white mb-6">Global Team Rankings 2026</h1>
        <div className="bg-[#181a1f] border border-[#22262d] rounded-lg overflow-hidden">
          <div className="p-3 border-b border-[#22262d] flex justify-between font-bold text-gray-400">
            <span>Team Name</span>
            <span>Region</span>
            <span>Points</span>
          </div>
          <div className="p-3 border-b border-[#22262d] flex justify-between items-center bg-[#111315]">
            <span className="font-bold text-white">1. Paper Rex</span>
            <span className="text-gray-400">Pacific</span>
            <span className="text-red-500 font-bold">2150 pts</span>
          </div>
          <div className="p-3 border-b border-[#22262d] flex justify-between items-center">
            <span className="font-bold text-white">2. Sentinels</span>
            <span className="text-gray-400">Americas</span>
            <span className="text-red-500 font-bold">2090 pts</span>
          </div>
          <div className="p-3 flex justify-between items-center bg-[#111315]">
            <span className="font-bold text-white">3. Fnatic</span>
            <span className="text-gray-400">EMEA</span>
            <span className="text-red-500 font-bold">2040 pts</span>
          </div>
        </div>
      </div>
    </div>
  );
}