import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabase';

// Halaman Server Component untuk narik data langsung
export default async function WikiPage() {
  // 1. Perintah menarik data dari tabel 'teams' di Supabase
  const { data: teams, error } = await supabase
    .from('teams')
    .select('*');

  if (error) {
    console.error("Gagal menarik data:", error);
  }

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#dbdee1] font-sans text-xs">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-black text-white mb-1">Teams Database & Wiki</h1>
        <p className="text-gray-400 mb-6">Official verified 2026 rosters — <span className="text-green-400">🟢 Live from Supabase Database</span>.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 2. Me-looping data asli dari Database */}
          {teams && teams.map((team) => (
            <div key={team.id} className="bg-[#181a1f] border border-[#22262d] p-4 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-black text-white">{team.full_name}</h3>
                  <span className="text-[10px] bg-[#22262d] text-gray-400 px-2 py-0.5 rounded">Est. {team.founded}</span>
                </div>
                <p className="text-gray-400 mb-4">{team.description}</p>
              </div>
              <div className="bg-[#111315] p-3 rounded border border-[#22262d]">
                <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider block mb-2">2026 Active Lineup</span>
                <div className="flex flex-wrap gap-1.5">
                  {/* Parsing roster dari JSON database */}
                  {team.roster && typeof team.roster === 'string' ? JSON.parse(team.roster).map((player, i) => (
                    <span key={i} className="bg-[#181a1f] text-gray-200 px-2.5 py-1 rounded text-[11px] font-semibold border border-[#22262d]">
                      {player}
                    </span>
                  )) : team.roster && team.roster.map((player, i) => (
                    <span key={i} className="bg-[#181a1f] text-gray-200 px-2.5 py-1 rounded text-[11px] font-semibold border border-[#22262d]">
                      {player}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}