"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="bg-[#181a1f] border-b border-[#22262d] px-6 py-3 flex justify-between items-center sticky top-0 z-50 text-xs">
      <div className="flex items-center space-x-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-red-600 rounded flex items-center justify-center font-black text-white text-sm">N</div>
          <span className="text-base font-black tracking-wider text-white">NEXUS<span className="text-red-500">.GG</span></span>
        </Link>
        <nav className="hidden md:flex space-x-1 font-semibold text-gray-400">
          <Link href="/" className={`px-3 py-1.5 rounded transition ${pathname === '/' ? 'bg-[#22262d] text-white' : 'hover:bg-[#22262d] hover:text-white'}`}>Matches</Link>
          <Link href="/tournaments" className={`px-3 py-1.5 rounded transition ${pathname === '/tournaments' ? 'bg-[#22262d] text-white' : 'hover:bg-[#22262d] hover:text-white'}`}>Events</Link>
          <Link href="/forums" className={`px-3 py-1.5 rounded transition ${pathname === '/forums' ? 'bg-[#22262d] text-white' : 'hover:bg-[#22262d] hover:text-white'}`}>Forums</Link>
          <Link href="/wiki" className={`px-3 py-1.5 rounded transition ${pathname === '/wiki' ? 'bg-[#22262d] text-white' : 'hover:bg-[#22262d] hover:text-white'}`}>Teams Wiki</Link>
          <Link href="/rankings" className={`px-3 py-1.5 rounded transition ${pathname === '/rankings' ? 'bg-[#22262d] text-white' : 'hover:bg-[#22262d] hover:text-white'}`}>Rankings</Link>
          <Link href="/stats" className={`px-3 py-1.5 rounded transition ${pathname === '/stats' ? 'bg-[#22262d] text-white' : 'hover:bg-[#22262d] hover:text-white'}`}>Stats</Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input 
          type="text" 
          placeholder="Search events, teams..." 
          className="bg-[#111315] border border-[#22262d] px-3 py-1.5 rounded text-white focus:outline-none focus:border-red-600 w-48"
        />
        <span className="bg-[#22262d] text-gray-300 px-3 py-1.5 rounded font-bold cursor-pointer hover:bg-gray-700">EN</span>
      </div>
    </header>
  );
}