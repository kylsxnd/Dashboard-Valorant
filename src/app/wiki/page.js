import Navbar from '@/components/Navbar';

export default function WikiPage() {
  const teamDatabase = {
    "PAPER REX": {
      fullName: "Paper Rex (PRX)",
      founded: "2020",
      location: "Singapore 🇸🇬",
      description: "Southeast Asia's powerhouse in VCT, globally recognized for their hyper-aggressive playstyle and fearless gunfights.",
      roster: ["f0rsakeN", "mindfreak", "d4v41", "Jinggg", "something"]
    },
    "SENTINELS": {
      fullName: "Sentinels (SEN)",
      founded: "2018",
      location: "United States 🇺🇸",
      description: "An iconic North American esports organization boasting a massive global fanbase and elite competitive pedigree.",
      roster: ["Zekken", "Sacy", "Johnqt", "Zellsis", "N4RRATE"]
    },
    "FNATIC": {
      fullName: "Fnatic (FNC)",
      founded: "2004",
      location: "United Kingdom 🇬🇧",
      description: "Historic European esports brand famous for impenetrable setups, masterclass calling, and international dominance.",
      roster: ["Boaster", "Derke", "Chronicle", "Leo", "Alfajer"]
    },
    "GEN.G": {
      fullName: "Gen.G (GEN)",
      founded: "2017",
      location: "South Korea 🇰🇷",
      description: "Korean titans known for clinical precision, immaculate utility trading, and dominating global stages.",
      roster: ["Meteor", "Munchkin", "t3xture", "Karon", "Lakia"]
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#dbdee1] font-sans text-xs">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-black text-white mb-1">Teams Database & Wiki</h1>
        <p className="text-gray-400 mb-6">Official verified 2026 rosters and organization directory.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(teamDatabase).map((teamName, idx) => (
            <div key={idx} className="bg-[#181a1f] border border-[#22262d] p-4 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-black text-white">{teamDatabase[teamName].fullName}</h3>
                  <span className="text-[10px] bg-[#22262d] text-gray-400 px-2 py-0.5 rounded">Est. {teamDatabase[teamName].founded}</span>
                </div>
                <p className="text-gray-400 mb-4">{teamDatabase[teamName].description}</p>
              </div>
              <div className="bg-[#111315] p-3 rounded border border-[#22262d]">
                <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider block mb-2">2026 Active Lineup</span>
                <div className="flex flex-wrap gap-1.5">
                  {teamDatabase[teamName].roster.map((player, i) => (
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