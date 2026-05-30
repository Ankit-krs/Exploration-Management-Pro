import fs from 'fs';

function findTabs() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Let's search inside the JS bundle to find the types of these objects
  const keywords = ['drillingEntries', 'opexEntries', 'dceEntries', 'advanceEntries', 'sites'];
  
  keywords.forEach(kw => {
    let pos = 0;
    console.log(`=== Matches for ${kw} ===`);
    while (true) {
      pos = code.indexOf(kw, pos);
      if (pos === -1) break;
      // Get around 300 chars
      const chunk = code.slice(Math.max(0, pos - 150), Math.min(code.length, pos + 400));
      console.log(`Index ${pos}:\n${chunk}\n-----------------`);
      pos += kw.length;
      if (pos > code.indexOf(kw) + 10000) {
        console.log('...truncated further references...');
        break;
      }
    }
  });
}

findTabs();
