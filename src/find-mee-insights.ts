import fs from 'fs';

function findMeeInsights() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  let pos = code.indexOf("dce-subtle-insights-strip");
  if (pos === -1) return;
  
  // Grab 4000 chars of insights strip
  const windowText = code.slice(pos, pos + 4000);
  console.log('--- RAW INSIGHTS STRIP CODE ---');
  console.log(windowText);
}

findMeeInsights();
