import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabase';

export const revalidate = 0;

export default async function RankingsPage() {
  // Narik data tim dari tabel 'teams' di Supabase
  const { data: teams, error } = await supabase
    .from('teams')
    .select('*');

  if (error) {
    console.error("Gagal menarik data ranking:", error);
  }

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#dbdee1] font-sans text-xs">
      <Navbar />
      <div className="max-w-5xl mx-auto p-4">
        
        {/* Header Title */}
        <h1 className="text-xl font-black text-white mb-1 uppercase tracking-wider">Valorant Team Rankings</h1>
        <p className="text-gray-400 mb-4">Official regional standings and power rankings — <span className="text-green-400">🟢 Live Database</span></p>

        {/* Tabel Rankings ala VLR.gg */}
        <div className="bg-[#181a1f] border border-[#22262d] rounded overflow-hidden">
          
          {/* Header Tabel */}
          <div className="bg-[#111315] px-4 py-2.5 border-b border-[#22262d] font-bold text-gray-400 grid grid-cols-12 gap-2 uppercase tracking-wider text-[10px]">
            <span className="col-span-1 text-center">Rank</span>
            <span className="col-span-5">Team</span>
            <span className="col-span-3">Region</span>
            <span className="col-span-3 text-right">Rating Points</span>
          </div>

          {/* List Data Tim dari Supabase */}
          <div className="divide-y divide-[#22262d]">
            {teams && teams.length > 0 ? (
              teams.map((team, index) => (
                <div key={team.id || index} className="px-4 py-3 grid grid-cols-12 gap-2 items-center hover:bg-[#1c1f26] transition-colors">
                  <span className="col-span-1 text-center font-black text-white text-sm">#{index + 1}</span>
                  <span className="col-span-5 font-bold text-white text-sm tracking-wide">{team.full_name}</span>
                  <span className="col-span-3 text-gray-400 uppercase font-medium">VCT Pacific</span>
                  <span className="col-span-3 text-right font-black text-red-500 text-sm">{2150 - (index * 65)}</span>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">Belum ada data tim di database Supabase.</div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}