import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default async function MatchDetailPage({ params }) {
  // Menangkap ID pertandingan dari URL (misal: /tournaments/1)
  const { id } = params;

  // Ambil data spesifik berdasarkan ID dari Supabase
  const { data: match, error } = await supabase
    .from('matches')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !match) {
    return (
      <div className="min-h-screen bg-[#0f1115] text-white flex items-center justify-center">
        <p>Pertandingan tidak ditemukan atau gagal dimuat.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#dbdee1] font-sans text-xs">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        
        {/* Tombol Kembali */}
        <Link href="/tournaments" className="text-gray-400 hover:text-white mb-4 inline-block font-semibold">
          &larr; Back to Matches
        </Link>

        {/* Kotak Utama Detail Pertandingan ala VLR */}
        <div className="bg-[#181a1f] border border-[#22262d] rounded-lg overflow-hidden mt-2">
          
          {/* Header Turnamen */}
          <div className="bg-[#111315] px-6 py-3 border-b border-[#22262d] flex justify-between items-center">
            <span className="text-gray-300 font-bold text-xs uppercase tracking-wider">{match.event_name}</span>
            <span className="text-gray-400 font-medium">{match.match_date} | {match.match_time}</span>
          </div>

          {/* Area Skor / Tim Bertanding */}
          <div className="p-8 flex items-center justify-between">
            <div className="flex-1 text-right">
              <h2 className="text-2xl font-black text-white tracking-wide">{match.team1}</h2>
              <span className="text-gray-500 text-[10px] uppercase font-bold">Team 1</span>
            </div>

            <div className="px-8 flex flex-col items-center justify-center">
              {match.status === 'LIVE' ? (
                <span className="bg-red-600 text-white px-3 py-1 rounded font-black text-xs animate-pulse mb-1">LIVE NOW</span>
              ) : (
                <span className="bg-[#22262d] text-gray-300 px-3 py-1 rounded font-bold text-xs mb-1">BO3 / UPCOMING</span>
              )}
              <span className="text-gray-400 font-bold text-sm">VS</span>
            </div>

            <div className="flex-1 text-left">
              <h2 className="text-2xl font-black text-white tracking-wide">{match.team2}</h2>
              <span className="text-gray-500 text-[10px] uppercase font-bold">Team 2</span>
            </div>
          </div>

          {/* Seksion Streams / Nonton (Mirip VLR) */}
          <div className="bg-[#111315] p-6 border-t border-[#22262d]">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Available Streams & VODs</h3>
            <div className="flex flex-wrap gap-3">
              <a 
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(match.team1 + ' vs ' + match.team2 + ' Valorant Live')}`} 
                target="_blank" 
                rel="noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold flex items-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                Watch Official Stream (YouTube)
              </a>

              <a 
                href={match.match_url} 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#22262d] hover:bg-gray-600 text-gray-200 px-4 py-2 rounded font-bold transition-colors"
              >
                View on VLR.gg Original Source
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}