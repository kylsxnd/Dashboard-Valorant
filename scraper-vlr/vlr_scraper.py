import requests
from bs4 import BeautifulSoup
from supabase import create_client, Client

SUPABASE_URL = "https://oedkvzefnerwyiowtfgu.supabase.co"
SUPABASE_KEY = "sb_publishable_H1GUVJPRxrnz9ypYd3mzGQ_fLIC7OEl"

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def scrape_and_push_to_supabase():
    print("Mulai proses scraping data dari VLR.gg...")
    url = "https://www.vlr.gg/matches"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status() 
        soup = BeautifulSoup(response.text, 'html.parser')
        
        match_cards = soup.find_all('a', class_='match-item')
        matches_to_save = []
        
        for match in match_cards[:5]:
            teams = match.find_all('div', class_='match-item-vs-team-name')
            
            if len(teams) == 2:
                team1 = teams[0].text.strip()
                team2 = teams[1].text.strip()
                match_time_raw = match.find('div', class_='match-item-time').text.strip()
                
                # --- PERBAIKAN CARA NARIK TANGGAL ---
                # Di VLR, tanggal ada di elemen judul section sebelum kotak match-item
                match_date = "Today"
                date_container = match.find_previous(lambda tag: tag.name == 'div' and 'wf-label' in tag.get('class', []))
                if date_container:
                    # Ambil teks bersihnya (biasanya formatnya "Thu, August 27, 2026")
                    date_text = date_container.get_text(separator=" ", strip=True)
                    # Buang tulisan yang gak penting kalau ada
                    match_date = date_text.split('  ')[0]

                event_name_raw = match.find('div', class_='match-item-event').text.strip()
                clean_event = event_name_raw.replace('\n', '').replace('\t', '').strip()
                
                url_path = match.get('href', '')
                full_match_url = f"https://www.vlr.gg{url_path}"
                
                status_element = match.find('div', class_='match-item-eta')
                status = "Upcoming"
                if status_element and 'is-live' in status_element.get('class', []):
                    status = "LIVE"
                
                match_data = {
                    "team1": team1,
                    "team2": team2,
                    "match_time": match_time_raw,
                    "match_date": match_date, 
                    "event_name": clean_event,
                    "status": status,
                    "match_url": full_match_url
                }
                matches_to_save.append(match_data)
                print(f"[{match_date} | {match_time_raw}] {team1} vs {team2}")

        if matches_to_save:
            supabase.table('matches').delete().neq('id', 0).execute() 
            supabase.table('matches').insert(matches_to_save).execute()
            print("🚀 SUKSES! Tanggal & Jam asli berhasil diperbarui ke database.")

    except Exception as e:
        print(f"❌ Terjadi error: {e}")

if __name__ == "__main__":
    scrape_and_push_to_supabase()