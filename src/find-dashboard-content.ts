import fs from 'fs';

function findDashboardContent() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Search for dashboard related labels
  const terms = [
    'DAILY DRILLING TRACKER',
    'Drilling Site Management',
    'Total Meters',
    'Recent Logs',
    'Add Log Entry',
    'Meters Drilled',
    'Soil Type',
    'Daily Standing Cost'
  ];
  
  terms.forEach(term => {
    let pos = code.indexOf(term);
    if (pos !== -1) {
      console.log(`=== Found reference to dashboard term '${term}' ===`);
      console.log(code.slice(pos - 150, pos + 850));
      console.log('-----------------');
    }
  });
}

findDashboardContent();
