import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ForumsPage() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-[#dbdee1] font-sans text-xs">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        
        {/* Header Tab Forums */}
        <div className="flex justify-between items-center mb-4 border-b border-[#22262d] pb-3">
          <div className="flex gap-4">
            <span className="text-white font-bold border-b-2 border-red-500 pb-3 -mb-3 cursor-pointer">Threads</span>
            <span className="text-gray-400 hover:text-white cursor-pointer">Forum Index</span>
            <span className="text-gray-400 hover:text-white cursor-pointer">Search</span>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded transition-colors">
            Start Thread
          </button>
        </div>

        {/* List Thread Diskusi */}
        <div className="bg-[#181a1f] border border-[#22262d] rounded overflow-hidden flex flex-col divide-y divide-[#22262d]">
          
          {/* Thread Item 1 */}
          <div className="p-3 flex justify-between items-center hover:bg-[#1c1f26] transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-[#22262d] text-gray-300 font-bold px-2.5 py-1 rounded text-center">1</span>
              <div>
                <span className="text-white font-bold hover:underline cursor-pointer text-sm">no politics/religion</span>
                <span className="text-gray-500 text-[10px] ml-2 uppercase">Valorant Discussion</span>
                <p className="text-gray-400 text-[10px]">Posted 5 years ago · enigma <span className="text-red-400">+2408</span></p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-gray-300 font-semibold block">enigma</span>
              <span className="text-gray-500 text-[10px]">5 years ago</span>
            </div>
          </div>

          {/* Thread Item 2 */}
          <div className="p-3 flex justify-between items-center hover:bg-[#1c1f26] transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-[#22262d] text-gray-300 font-bold px-2.5 py-1 rounded text-center">16</span>
              <div>
                <span className="text-white font-bold hover:underline cursor-pointer text-sm">Pickems: VCT China S2 Playoffs</span>
                <span className="text-gray-500 text-[10px] ml-2 uppercase">Valorant Discussion</span>
                <p className="text-gray-400 text-[10px]">Posted 13 days ago · sk_</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-gray-300 font-semibold block">arctiskyy</span>
              <span className="text-gray-500 text-[10px]">15 hours ago</span>
            </div>
          </div>

          {/* Thread Item 3 */}
          <div className="p-3 flex justify-between items-center hover:bg-[#1c1f26] transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-[#22262d] text-gray-300 font-bold px-2.5 py-1 rounded text-center">11</span>
              <div>
                <span className="text-white font-bold hover:underline cursor-pointer text-sm">ill get PAID tmrw</span>
                <span className="text-gray-500 text-[10px] ml-2 uppercase">Off Topic</span>
                <p className="text-gray-400 text-[10px]">Posted 3 hours ago · BerLiNGlazer <span className="text-green-400">+1</span></p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-gray-300 font-semibold block">BerLiNGlazer</span>
              <span className="text-gray-500 text-[10px]">1 second ago</span>
            </div>
          </div>

          {/* Thread Item 4 */}
          <div className="p-3 flex justify-between items-center hover:bg-[#1c1f26] transition-colors">
            <div className="flex items-center gap-3">
              <span className="bg-[#22262d] text-gray-300 font-bold px-2.5 py-1 rounded text-center">5</span>
              <div>
                <span className="text-white font-bold hover:underline cursor-pointer text-sm">Prx....</span>
                <span className="text-gray-500 text-[10px] ml-2 uppercase">Valorant Discussion</span>
                <p className="text-gray-400 text-[10px]">Posted 21 minutes ago · BIGFNCGLAZER</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-gray-300 font-semibold block">Antiwitch</span>
              <span className="text-gray-500 text-[10px]">4 seconds ago</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}