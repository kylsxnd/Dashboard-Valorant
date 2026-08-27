import Navbar from '@/components/Navbar';

export default function StatsPage() {
  // Mock data statistik agen Valorant (bisa nanti ditarik dari database/API)
  const agentStats = [
    { name: 'Jett', role: 'Duelist', pickRate: '54%', winRate: '51.2%', kd: '1.15' },
    { name: 'Omen', role: 'Controller', pickRate: '48%', winRate: '49.8%', kd: '1.02' },
    { name: 'Sova', role: 'Initiator', pickRate: '42%', winRate: '50.5%', kd: '1.08' },
    { name: 'Killjoy', role: 'Sentinel', pickRate: '39%', winRate: '52.1%', kd: '1.05' },
    { name: 'Viper', role: 'Controller', pickRate: '35%', winRate: '48.9%', kd: '0.98' },
    { name: 'Fade', role: 'Initiator', pickRate: '28%', winRate: '49.1%', kd: '1.00' },
  ];

  const mapStats = [
    { name: 'Ascent', atkWin: '48.5%', defWin: '51.5%', mostPicked: 'Jett, Sova' },
    { name: 'Bind', atkWin: '52.1%', defWin: '47.9%', mostPicked: 'Raze, Brimstone' },
    { name: 'Haven', atkWin: '49.0%', defWin: '51.0%', mostPicked: 'Jett, Killjoy' },
    { name: 'Lotus', atkWin: '50.8%', defWin: '49.2%', mostPicked: 'Fade, Omen' },
  ];

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#dbdee1] font-sans text-xs">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        
        {/* Header Title */}
        <div>
          <h1 className="text-xl font-black text-white uppercase tracking-wider mb-1">Valorant Agent & Map Statistics</h1>
          <p className="text-gray-400">Comprehensive meta analysis across VCT tournaments — <span className="text-red-500 font-bold">VLR Replica</span></p>
        </div>

        {/* Tabel Agent Performance */}
        <div className="bg-[#181a1f] border border-[#22262d] rounded overflow-hidden">
          <div className="bg-[#111315] px-4 py-2.5 border-b border-[#22262d] font-bold text-gray-300 uppercase tracking-wider text-[10px]">
            Agent Meta Performance (Last 60 Days)
          </div>
          <div className="divide-y divide-[#22262d]">
            <div className="px-4 py-2 grid grid-cols-12 gap-2 text-gray-500 font-bold uppercase text-[10px]">
              <span className="col-span-4">Agent</span>
              <span className="col-span-2">Role</span>
              <span className="col-span-2 text-right">Pick Rate</span>
              <span className="col-span-2 text-right">Win Rate</span>
              <span className="col-span-2 text-right">K/D Ratio</span>
            </div>
            {agentStats.map((agent, idx) => (
              <div key={idx} className="px-4 py-2.5 grid grid-cols-12 gap-2 items-center hover:bg-[#1c1f26] transition-colors">
                <span className="col-span-4 font-bold text-white text-sm">{agent.name}</span>
                <span className="col-span-2 text-gray-400 font-medium">{agent.role}</span>
                <span className="col-span-2 text-right font-semibold text-blue-400">{agent.pickRate}</span>
                <span className="col-span-2 text-right font-semibold text-green-400">{agent.winRate}</span>
                <span className="col-span-2 text-right font-bold text-white">{agent.kd}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabel Map Statistics */}
        <div className="bg-[#181a1f] border border-[#22262d] rounded overflow-hidden">
          <div className="bg-[#111315] px-4 py-2.5 border-b border-[#22262d] font-bold text-gray-300 uppercase tracking-wider text-[10px]">
            Competitive Map Win Rates
          </div>
          <div className="divide-y divide-[#22262d]">
            <div className="px-4 py-2 grid grid-cols-12 gap-2 text-gray-500 font-bold uppercase text-[10px]">
              <span className="col-span-4">Map Name</span>
              <span className="col-span-3">Attack Win %</span>
              <span className="col-span-3">Defense Win %</span>
              <span className="col-span-2 text-right">Meta Agents</span>
            </div>
            {mapStats.map((map, idx) => (
              <div key={idx} className="px-4 py-2.5 grid grid-cols-12 gap-2 items-center hover:bg-[#1c1f26] transition-colors">
                <span className="col-span-4 font-bold text-white text-sm">{map.name}</span>
                <span className="col-span-3 font-semibold text-orange-400">{map.atkWin}</span>
                <span className="col-span-3 font-semibold text-blue-400">{map.defWin}</span>
                <span className="col-span-2 text-right text-gray-300 truncate">{map.mostPicked}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}