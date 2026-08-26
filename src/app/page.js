import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-[#dbdee1] font-sans selection:bg-red-600 selection:text-white text-xs">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-4 mt-2">
        
        {/* Kolom Kiri: Diskusi */}
        <div className="space-y-4">
          <div className="bg-[#181a1f] border border-[#22262d] rounded-lg p-3">
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3 pb-2 border-b border-[#22262d]">Recent Discussions</h3>
            <ul className="space-y-2.5 text-gray-400">
              <li className="hover:text-red-400 cursor-pointer transition truncate">🔥 Is Paper Rex unstoppable in VCT 2026? <span className="text-gray-600 text-[10px] block">35 replies</span></li>
              <li className="hover:text-red-400 cursor-pointer transition truncate">💬 Sentinels new roster analysis & map pool <span className="text-gray-600 text-[10px] block">18 replies</span></li>
              <li className="hover:text-red-400 cursor-pointer transition truncate">⚡ Best agents for Ascent meta right now <span className="text-gray-600 text-[10px] block">42 replies</span></li>
            </ul>
          </div>
        </div>

        {/* Kolom Tengah: Berita & Live Stream Hub */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-[#181a1f] border border-[#22262d] rounded-lg p-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl uppercase">Featured</div>
            <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">VCT 2026 Season</span>
            <h2 className="text-lg font-black text-white mt-1 mb-2">Paper Rex Claims Regional Dominance, Defeats Gen.G 3-1</h2>
            <p className="text-gray-400 text-xs mb-4">The aggressive Pacific powerhouse secures their golden ticket to international masters with an explosive grand final performance.</p>
            <div className="flex justify-between items-center text-[11px] text-gray-500 border-t border-[#22262d] pt-2">
              <span>August 26, 2026</span>
              <span className="text-red-400 font-bold cursor-pointer hover:underline">Read Full Article →</span>
            </div>
          </div>

          <div className="bg-[#181a1f] border border-[#22262d] rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <h3 className="font-bold text-white uppercase tracking-wider text-[11px]">Live Stream Center</h3>
              </div>
              <a href="https://www.youtube.com/@valorantesports" target="_blank" rel="noreferrer" className="text-red-400 text-[11px] font-bold hover:underline">Open YouTube ↗</a>
            </div>
            <div className="w-full aspect-video bg-black rounded overflow-hidden border border-[#22262d]">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/e_E9W2vsRbQ?autoplay=1&mute=1" title="Live Stream" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Jadwal & Event */}
        <div className="space-y-4">
          <div className="bg-[#181a1f] border border-[#22262d] rounded-lg p-3">
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#22262d]">
              <h3 className="font-bold text-white uppercase tracking-wider text-[11px]">Upcoming Matches</h3>
              <span className="text-[10px] text-red-500 font-bold">ALL VCT</span>
            </div>
            <div className="space-y-2.5">
              <div className="bg-[#111315] p-2.5 rounded border border-[#22262d] hover:border-gray-700 transition cursor-pointer">
                <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                  <span>Today, 19:00 WIB</span>
                  <span className="text-red-400 font-bold">BO3</span>
                </div>
                <div className="flex justify-between items-center font-bold text-white">
                  <span>Paper Rex</span>
                  <span className="text-gray-500 text-[10px]">vs</span>
                  <span>Gen.G</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#181a1f] border border-[#22262d] rounded-lg p-3">
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3 pb-2 border-b border-[#22262d]">Ongoing Events</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center justify-between p-2 rounded bg-[#111315] border border-[#22262d]">
                <div>
                  <p className="font-bold text-white">VCT 26: PAC Stage 2</p>
                  <p className="text-[10px] text-gray-500">Jul 16 — Sep 6</p>
                </div>
                <span className="text-[10px] bg-red-600/20 text-red-400 px-1.5 py-0.5 rounded font-bold">PAC</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}