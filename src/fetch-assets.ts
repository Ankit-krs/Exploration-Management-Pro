import fs from 'fs';

async function fetchAssets() {
  try {
    const jsUrl = 'https://exploration-management-510066963557.asia-southeast1.run.app/assets/index-B40fNwx7.js';
    console.log('Fetching JS bundle...');
    const res = await fetch(jsUrl);
    const text = await res.text();
    console.log('JS Bundle length:', text.length);
    
    // Save to a local temporary file for analysis
    fs.writeFileSync('temp_js_bundle.js', text);
    console.log('Saved JS bundle to temp_js_bundle.js');
    
    // Let's search for some strings using regex
    // We want to find React components, routes, texts, state, labels
    const strings = text.match(/"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'/g) || [];
    console.log('Total strings found:', strings.length);
    
    // Write out some of the unique longer strings to get an understanding
    const longStrings = Array.from(new Set(strings))
      .map(s => s.slice(1, -1))
      .filter(s => s.length > 10 && !s.includes('\\u') && !s.includes('http') && s.length < 500);
      
    fs.writeFileSync('temp_strings.json', JSON.stringify(longStrings.slice(0, 300), null, 2));
    console.log('Saved top 300 long strings to temp_strings.json');
  } catch (err) {
    console.error('Error fetching assets:', err);
  }
}

fetchAssets();
