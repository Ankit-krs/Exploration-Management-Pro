import fs from 'fs';

function findDataRed() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Find where shared_rig_logs is used
  const term = "shared_rig_logs";
  let lastPos = 0;
  while (true) {
    let pos = code.indexOf(term, lastPos);
    if (pos === -1) break;
    console.log('Found shared_rig_logs at index:', pos);
    
    // Print 1000 chars before and 2000 chars after
    console.log('--------------------------- REFERENCE ---------------------------');
    console.log(code.slice(Math.max(0, pos - 500), Math.min(code.length, pos + 2500)));
    console.log('-----------------------------------------------------------------');
    
    lastPos = pos + term.length;
  }
}

findDataRed();
