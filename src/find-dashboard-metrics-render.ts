import fs from 'fs';

function findDashboardMetricsRender() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Search for site-actions inside code and grab the next 8000 characters to see metrics rendering
  let pos = code.indexOf("site-actions");
  if (pos !== -1) {
    console.log('Found "site-actions" in bundle at:', pos);
    console.log(code.slice(pos, pos + 10000));
    console.log('---------------------------');
  } else {
    console.log('"site-actions" not found');
  }
}

findDashboardMetricsRender();
