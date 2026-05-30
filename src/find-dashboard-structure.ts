import fs from 'fs';

function findDashboardStructure() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Find where dashboards are rendered
  const term = "Daily Drilling Data";
  let pos = code.indexOf(term);
  if (pos !== -1) {
    console.log('Found "Daily Drilling Data" in bundle at:', pos);
    console.log(code.slice(pos - 300, pos + 1200));
    console.log('---------------------------');
  } else {
    console.log('"Daily Drilling Data" not found');
  }

  // Let's also look for how elements like cards on the dashboard are structured
  const summaryTerms = ['Total Meters', 'Total Standing Cost', 'Total OPEX', 'Total Advances'];
  summaryTerms.forEach(t => {
    let p = code.indexOf(t);
    if (p !== -1) {
      console.log(`Found summary card '${t}' at:`, p);
      console.log(code.slice(p - 100, p + 800));
      console.log('---------------------------');
    }
  });
}

findDashboardStructure();
