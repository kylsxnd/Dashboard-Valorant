import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const revalidate = 0; 

export default async function TournamentsPage() {
  const { data: matches, error } = await supabase
    .from('matches')
    .select('*')
    .order('id', { ascending: true });

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#dbdee1] font-sans text-xs">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-black text-white mb-1">Live Matches</h1>
        <p className="text-gray-400 mb-6">Jadwal turnamen ditarik otomatis dari VLR.gg — <span className="text-green-400">🟢 Live Database</span></p>

        <div className="flex flex-col gap-4">
          {matches && matches.length > 0 ? (
            matches.map((match) => (
              <div key={match.id} className="bg-[#181a1f] border border-[#22262d] rounded-lg p-0 flex flex-col hover:border-gray-500 transition-colors">
                
                {/* Event Name */}
                <div className="bg-[#111315] px-4 py-2 border-b border-[#22262d] rounded-t-lg">
                  <span className="text-gray-400 font-semibold text-[11px]">{match.event_name}</span>
                </div>
                
                {/* Tim & Jadwal Center */}
                <div className="p-4 flex justify-between items-center border-b border-[#22262d]">
                  <div className="flex-1 text-right text-base md:text-lg font-bold text-white pr-4">
                    {match.team1}
                  </div>
                  
                  {/* Area Waktu & Status */}
                  <div className="flex flex-col items-center justify-center w-36">
                    {match.status === 'LIVE' ? (
                      <span className="bg-red-600 text-white px-3 py-0.5 rounded font-black text-[11px] animate-pulse mb-2">LIVE</span>
                    ) : (
                      <span className="bg-[#22262d] text-gray-300 px-3 py-0.5 rounded font-bold text-[11px] mb-2">UPCOMING</span>
                    )}
                    
                    {/* Grup Ikon Kalender & Jam */}
                    <div className="flex flex-col items-center gap-1.5 text-[10px] text-gray-400 font-medium whitespace-nowrap bg-[#111315] px-3 py-1.5 rounded border border-[#22262d]">
                      <span className="flex items-center gap-1.5 text-[#dbdee1]">
                        <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        {match.match_date || "Tanggal TBD"}
                      </span>
                      <span className="flex items-center gap-1.5 text-[#dbdee1]">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {match.match_time || "Jam TBD"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-left text-base md:text-lg font-bold text-white pl-4">
                    {match.team2}
                  </div>
                </div>

                {/* Tombol Action */}
                <div className="bg-[#111315] p-3 rounded-b-lg flex justify-end gap-3">
                  <Link 
                    href={`/tournaments/${match.id}`} 
                    className="text-[11px] font-bold text-gray-300 hover:text-white px-3 py-1.5 bg-[#22262d] hover:bg-gray-600 rounded transition-colors flex items-center"
                  >
                    Match Details
                  </Link>
                  <a 
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(match.team1 + ' vs ' + match.team2 + ' Valorant Live')}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[11px] font-bold text-white px-3 py-1.5 bg-red-600 hover:bg-red-700 rounded transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    Watch on YouTube
                  </a>
                </div>

              </div>
            ))
          ) : (
             <div className="text-gray-500 text-center py-10">Belum ada jadwal pertandingan yang masuk.</div>
          )}
        </div>
      </div>
    </div>
  );
}