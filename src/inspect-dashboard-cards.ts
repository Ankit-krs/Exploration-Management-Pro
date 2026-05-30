import fs from 'fs';

function inspectDashboardCards() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Find "site-actions"
  let pos = code.indexOf("site-actions");
  if (pos === -1) {
    console.log('site-actions not found');
    return;
  }
  
  // Let's grab the HTML from post-site-actions to see the cards grid
  const segment = code.slice(pos, pos + 12000);
  
  // Let's print out lines containing text-gray, or metrics, or labels, or headers
  const lines = segment.split(',');
  console.log('--- RECONSTRUCTING GRID CARDS ---');
  for (const line of lines) {
    if (line.includes('Total') || line.includes('Cost') || line.includes('Meters') || line.includes('Burn') || line.includes('Balance') || line.includes('Imprest') || line.includes('Accrued') || line.includes('Rate') || line.includes('Mtr') || line.includes('Run') || line.includes('₹') || line.includes('Average')) {
      console.log('Card Element:', line.trim());
    }
  }
}

inspectDashboardCards();
