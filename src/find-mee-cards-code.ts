import fs from 'fs';

function findMeeCardsCode() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  let pos = code.indexOf("site-actions");
  if (pos === -1) return;
  
  // Grab a 6000-character window of HTML
  const windowText = code.slice(pos + 1200, pos + 4800);
  console.log('--- RAW METRICS CARDS CODES ---');
  console.log(windowText);
}

findMeeCardsCode();
