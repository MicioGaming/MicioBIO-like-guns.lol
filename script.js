// --- KONFIGURACJA ---
// PAMIĘTAJ, aby zmienić ten nick na swój!
const DISCORD_NICK = "insercikk"; 
// --------------------

const videoExt = ['mp4','webm','ogg'];
const audioExt = ['mp3','ogg','wav'];
const VOL_KEY = 'volume_level';

const rand = arr => arr[Math.floor(Math.random() * arr.length)];

function normalizeItem(item) {
  if (typeof item === 'object' && item !== null && item.file) {
    return { file: item.file, title: item.title || item.file };
  }
  if (typeof item === 'string') {
    const cleanTitle = item.split('/').pop().replace(/\.[^/.]+$/, "");
    return { file: item, title: decodeURIComponent(cleanTitle) };
  }
  return null;
}

async function getFiles(path, jsonPath, exts){
  let rawList = [];
  try{
    const r = await fetch(path, {cache: "no-store"});
    if(r.ok){
      const text = await r.text();
      const matches = [...text.matchAll(/href="([^"]+)"/g)].map(m=>m[1]);
      const dir = matches.filter(n => !n.endsWith('/') && !n.startsWith('?') && !n.includes('../'));
      if(dir.length) rawList = dir.filter(f => exts.some(e => f.toLowerCase().endsWith('.' + e)));
    }
  }catch{}
  
  if(rawList.length === 0){
    try{
      const r = await fetch(jsonPath, {cache: "no-store"});
      if(r.ok) {
        const js = await r.json();
        if(Array.isArray(js)) rawList = js;
      }
    }catch{}
  }

  return rawList
    .map(normalizeItem)
    .filter(item => item !== null)
    .filter(obj => exts.some(e => obj.file.toLowerCase().endsWith('.' + e)));
}

(async function init(){
  const bg = document.getElementById('bg');
  const audio = document.getElementById('audio');
  const titleBox = document.getElementById('nowPlaying');
  const volSlider = document.getElementById('vol');
  const discordBtn = document.getElementById('discordBtn');

  // --- LOGIKA DISCORD COPY ---
  if(discordBtn) {
    // Ustawiamy domyślny tooltip na nick
    discordBtn.setAttribute('data-tooltip', DISCORD_NICK);
    
    discordBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(DISCORD_NICK).then(() => {
        const originalText = discordBtn.getAttribute('data-tooltip');
        discordBtn.setAttribute('data-tooltip', "Skopiowano!");
        
        // Reset napisu po 1.5 sekundy
        setTimeout(() => {
          discordBtn.setAttribute('data-tooltip', originalText);
        }, 1500);
      });
    });
  }
  // ---------------------------

  const savedVol = localStorage.getItem(VOL_KEY);
  if(savedVol !== null) {
    volSlider.value = savedVol;
    audio.volume = parseFloat(savedVol);
  } else {
    audio.volume = 0.5;
    volSlider.value = 0.5;
  }
  
  volSlider.addEventListener('input', () => {
    audio.volume = parseFloat(volSlider.value);
    localStorage.setItem(VOL_KEY, volSlider.value);
  });

  const videos = await getFiles('video/', 'videos.json', videoExt);
  const musics = await getFiles('music/', 'music.json', audioExt);

  if(videos.length){
    const v = rand(videos);
    bg.src = '/video/' + (v.file.startsWith('http') ? v.file : encodeURIComponent(v.file));
    bg.load();
  }

    if(musics.length){
        const a = rand(musics);
        const srcPath = a.file.startsWith('http') || a.file.includes('/') ? a.file : 'music/' + encodeURIComponent(a.file);     
        audio.src = srcPath;
        audio.load();
        
        // ZMIENIONA LINIA: Wstawiamy tytuł piosenki do ruchomego elementu span
        titleBox.innerHTML = '<span class="now-playing-text">🎵 ' + a.title + '</span>';
        
        titleBox.style.display = 'block';
  }

  try {
    await audio.play();
  } catch (e) {
    const panel = document.getElementById('enableSound');
    const btn = document.getElementById('enableBtn');
    panel.style.display = 'flex';
    btn.addEventListener('click', async ()=>{
      try{ await audio.play(); panel.style.display = 'none'; }catch{}
    });
  }

  audio.loop = true;

})();
