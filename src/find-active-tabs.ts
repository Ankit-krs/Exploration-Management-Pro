import fs from 'fs';

function findActiveTabs() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Search around `setActiveTab` or tab clicks
  let pos = 0;
  while (true) {
    pos = code.indexOf('setActiveTab', pos);
    if (pos === -1) break;
    console.log('Found setActiveTab reference at:', pos);
    console.log(code.slice(pos - 150, pos + 400));
    console.log('---------------------------');
    pos += 12;
    if (pos > code.indexOf('setActiveTab') + 20000) {
      console.log('...truncated setActiveTab references...');
      break;
    }
  }
}

findActiveTabs();
