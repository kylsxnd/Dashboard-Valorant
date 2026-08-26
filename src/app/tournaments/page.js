import Navbar from '@/components/Navbar';

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-[#dbdee1] font-sans text-xs">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-black text-white mb-6">Active & Upcoming Events</h1>
        <div className="bg-[#181a1f] border border-[#22262d] rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center p-3 bg-[#111315] rounded border border-[#22262d]">
            <div>
              <h4 className="font-bold text-white text-sm">VCT 2026: Pacific Stage 2</h4>
              <p className="text-[10px] text-gray-500">Seoul, South Korea • $250,000 Prize Pool</p>
            </div>
            <span className="text-xs bg-red-600 text-white px-2.5 py-1 rounded font-bold">ONGOING</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-[#111315] rounded border border-[#22262d]">
            <div>
              <h4 className="font-bold text-white text-sm">Champions 2026 (World Championship)</h4>
              <p className="text-[10px] text-gray-500">Paris, France • $2,250,000 Prize Pool</p>
            </div>
            <span className="text-xs bg-gray-700 text-gray-300 px-2.5 py-1 rounded font-bold">UPCOMING</span>
          </div>
        </div>
      </div>
    </div>
  );
}