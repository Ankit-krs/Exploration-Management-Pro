import fs from 'fs';

function findDashboardView() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Search for activeTab === "dashboard" or activeTab==="dashboard" or case"dashboard"
  const matches = [
    'case"dashboard":',
    'case "dashboard":',
    'activeTab==="dashboard"',
    'activeTab === "dashboard"',
    'id:"dashboard"'
  ];
  
  matches.forEach(m => {
    let pos = code.indexOf(m);
    if (pos !== -1) {
      console.log(`=== Found dashboard render reference for '${m}' ===`);
      console.log(code.slice(pos - 150, pos + 1200));
      console.log('-----------------');
    }
  });
}

findDashboardView();
