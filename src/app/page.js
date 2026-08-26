import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const revalidate = 0;

export default async function Home() {
  // Narik data pertandingan live dari Supabase untuk widget kanan
  const { data: matches } = await supabase
    .from('matches')
    .select('*')
    .limit(5);

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#dbdee1] font-sans text-xs">
      <Navbar />
      
      {/* Container Utama 3 Kolom Grid */}
      <div className="max-w-[1300px] mx-auto p-3 grid grid-cols-1 lg:grid-cols-4 gap-3">
        
        {/* ================= KOLOM KIRI (Threads & Diskusi) ================= */}
        <div className="lg:col-span-1 flex flex-col gap-3">
          
          {/* Stickied Threads */}
          <div className="bg-[#181a1f] border border-[#22262d] rounded p-2.5">
            <h3 className="text-gray-400 font-bold uppercase tracking-wider text-[10px] mb-2 border-b border-[#22262d] pb-1">
              Stickied Threads
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/forums" className="flex justify-between items-center hover:text-white group">
                <span className="truncate pr-2 text-gray-300 group-hover:underline">no politics/religion</span>
                <span className="text-gray-500 text-[10px] bg-[#22262d] px-1.5 py-0.5 rounded">1</span>
              </Link>
              <Link href="/forums" className="flex justify-between items-center hover:text-white group">
                <span className="truncate pr-2 text-gray-300 group-hover:underline">VLR.gg Writers Wanted</span>
                <span className="text-gray-500 text-[10px] bg-[#22262d] px-1.5 py-0.5 rounded">2</span>
              </Link>
              <Link href="/forums" className="flex justify-between items-center hover:text-white group">
                <span className="truncate pr-2 text-gray-300 group-hover:underline">Pickems: VCT China S2 Playoffs</span>
                <span className="text-gray-500 text-[10px] bg-[#22262d] px-1.5 py-0.5 rounded">16</span>
              </Link>
              <Link href="/forums" className="flex justify-between items-center hover:text-white group">
                <span className="truncate pr-2 text-gray-300 group-hover:underline">Pickems: VCT Pacific S2 Playoffs</span>
                <span className="text-gray-500 text-[10px] bg-[#22262d] px-1.5 py-0.5 rounded">10</span>
              </Link>
            </div>
          </div>

          {/* Recent Discussion */}
          <div className="bg-[#181a1f] border border-[#22262d] rounded p-2.5">
            <h3 className="text-gray-400 font-bold uppercase tracking-wider text-[10px] mb-2 border-b border-[#22262d] pb-1">
              Recent Discussion
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start hover:bg-[#1c1f26] p-1 rounded cursor-pointer">
                <p className="text-gray-300 hover:text-white truncate pr-2">Prx playing so clean today...</p>
                <span className="text-gray-500 text-[10px]">4</span>
              </div>
              <div className="flex justify-between items-start hover:bg-[#1c1f26] p-1 rounded cursor-pointer">
                <p className="text-gray-300 hover:text-white truncate pr-2">Foxy9 is Korea's prodigy.</p>
                <span className="text-gray-500 text-[10px]">21</span>
              </div>
              <div className="flex justify-between items-start hover:bg-[#1c1f26] p-1 rounded cursor-pointer">
                <p className="text-gray-300 hover:text-white truncate pr-2">Paper Rex vs. Nongshim RedForce</p>
                <span className="text-gray-500 text-[10px]">79</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= KOLOM TENGAH (Hero Banner & News Feed) ================= */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          
          {/* Hero Banner / Headline */}
          <div className="bg-[#181a1f] border border-[#22262d] rounded overflow-hidden group cursor-pointer relative">
            <div className="h-48 bg-gradient-to-tr from-gray-900 via-blue-950 to-gray-900 flex flex-col justify-end p-5 relative border-b border-[#22262d]">
              <span className="text-red-500 font-bold text-[10px] uppercase tracking-wider mb-1">Featured News</span>
              <h2 className="text-base md:text-lg font-black text-white group-hover:underline leading-snug">
                TYLOO slowly scales to regional title, defeats JDG 3-1
              </h2>
            </div>
          </div>

          {/* Feed Berita Berdasarkan Tanggal (Ala VLR) */}
          <div className="bg-[#181a1f] border border-[#22262d] rounded p-3">
            <div className="text-red-500 font-bold uppercase tracking-wider text-[10px] mb-2 border-b border-[#22262d] pb-1">
              August 26 (Today)
            </div>
            
            <div className="flex flex-col divide-y divide-[#22262d]">
              <div className="py-2 flex justify-between items-center hover:bg-[#1c1f26] px-2 rounded cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">■</span>
                  <span className="text-gray-200 hover:text-white font-medium">Riot unveils GC Pacific format and bracket updates</span>
                </div>
                <span className="text-gray-500 text-[10px] bg-[#22262d] px-1.5 py-0.5 rounded">30</span>
              </div>

              <div className="py-2 flex justify-between items-center hover:bg-[#1c1f26] px-2 rounded cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">■</span>
                  <span className="text-gray-200 hover:text-white font-medium">G2 and EG earn playoff spots over ENVY and KRÜ</span>
                </div>
                <span className="text-gray-500 text-[10px] bg-[#22262d] px-1.5 py-0.5 rounded">17</span>
              </div>

              <div className="py-2 flex justify-between items-center hover:bg-[#1c1f26] px-2 rounded cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">■</span>
                  <span className="text-gray-200 hover:text-white font-medium">Liquid downs EP and Fire Flux shocks BBL to seal Barcelona field</span>
                </div>
                <span className="text-gray-500 text-[10px] bg-[#22262d] px-1.5 py-0.5 rounded">19</span>
              </div>
            </div>

            <div className="text-gray-400 font-bold uppercase tracking-wider text-[10px] mt-4 mb-2 border-b border-[#22262d] pb-1">
              August 25
            </div>
            <div className="flex flex-col divide-y divide-[#22262d]">
              <div className="py-2 flex justify-between items-center hover:bg-[#1c1f26] px-2 rounded cursor-pointer">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">■</span>
                  <span className="text-gray-200 hover:text-white font-medium">TYLOO slowly scales to regional title, defeats JDG 3-1</span>
                </div>
                <span className="text-gray-500 text-[10px] bg-[#22262d] px-1.5 py-0.5 rounded">50</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= KOLOM KANAN (Upcoming Matches & Events) ================= */}
        <div className="lg:col-span-1 flex flex-col gap-3">
          
          {/* Upcoming Matches Widget */}
          <div className="bg-[#181a1f] border border-[#22262d] rounded p-2.5">
            <div className="flex justify-between items-center mb-2 border-b border-[#22262d] pb-1">
              <h3 className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Upcoming Matches</h3>
              <Link href="/tournaments" className="text-blue-400 hover:underline text-[10px]">View All</Link>
            </div>

            <div className="flex flex-col gap-1.5">
              {matches && matches.length > 0 ? (
                matches.map((m) => (
                  <Link href={`/tournaments/${m.id}`} key={m.id} className="bg-[#111315] hover:bg-[#1c1f26] p-2 rounded border border-[#22262d] block transition-colors">
                    <div className="flex justify-between items-center text-[11px] font-bold text-white mb-1">
                      <span className="truncate pr-1">{m.team1}</span>
                      <span className="text-gray-500 text-[10px]">vs</span>
                      <span className="truncate pl-1 text-right">{m.team2}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-gray-400">
                      <span className="truncate max-w-[120px]">{m.event_name}</span>
                      <span className={m.status === 'LIVE' ? 'text-red-500 font-bold animate-pulse' : 'text-gray-400'}>
                        {m.status === 'LIVE' ? 'LIVE' : m.match_time}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-gray-500 text-center py-4">Memuat data...</div>
              )}
            </div>
          </div>

          {/* Ongoing Events Widget */}
          <div className="bg-[#181a1f] border border-[#22262d] rounded p-2.5">
            <h3 className="text-gray-400 font-bold uppercase tracking-wider text-[10px] mb-2 border-b border-[#22262d] pb-1">
              Ongoing Events
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 hover:bg-[#1c1f26] p-1 rounded cursor-pointer">
                <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></span>
                <div className="truncate">
                  <span className="text-white font-bold block truncate">VCT 26: AMER Stage 2</span>
                  <span className="text-gray-500 text-[10px]">AMER • Jul 17 - Sep 7</span>
                </div>
              </div>
              <div className="flex items-center gap-2 hover:bg-[#1c1f26] p-1 rounded cursor-pointer">
                <span className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0"></span>
                <div className="truncate">
                  <span className="text-white font-bold block truncate">VCT 26: PAC Stage 2</span>
                  <span className="text-gray-500 text-[10px]">PAC • Jul 16 - Sep 6</span>
                </div>
              </div>
              <div className="flex items-center gap-2 hover:bg-[#1c1f26] p-1 rounded cursor-pointer">
                <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0"></span>
                <div className="truncate">
                  <span className="text-white font-bold block truncate">VCT 26: EMEA Stage 2</span>
                  <span className="text-gray-500 text-[10px]">EMEA • Jul 15 - Aug 31</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}