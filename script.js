const songs = {
  happy: ['🎶 Happy – Pharrell Williams', '🎶 Can’t Stop The Feeling – Justin Timberlake', '🎶 Walking on Sunshine – Katrina & The Waves'],
  sad: ['🎶 Someone Like You – Adele', '🎶 Fix You – Coldplay', '🎶 Let Her Go – Passenger'],
  energetic: ['🎶 Eye of the Tiger – Survivor', '🎶 Stronger – Kanye West', '🎶 Can’t Hold Us – Macklemore'],
  relaxed: ['🎶 Weightless – Marconi Union', '🎶 Ocean Eyes – Billie Eilish', '🎶 Breathe – Telepopmusik']
};

function showSongs(mood) {
  const suggestionDiv = document.getElementById('suggestions');
  suggestionDiv.innerHTML = `
    <h2>Recommended Songs for "${capitalize(mood)}" Mood:</h2>
    <ul>${songs[mood].map(song => `<li>${song}</li>`).join('')}</ul>
  `;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
