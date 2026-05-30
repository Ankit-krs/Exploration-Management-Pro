import fs from 'fs';

function findStandingCostFields() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Find properties of Se (addDceEntry) and its sister functions
  const searchTerms = [
    'per_day_cost',
    'cost_head',
    'cost_head:',
    'per_day_cost:',
    'toggleDceStatus',
    'getDceActiveDays',
    'getDceTotal'
  ];
  
  searchTerms.forEach(term => {
    let pos = code.indexOf(term);
    if (pos !== -1) {
      console.log(`=== Found reference to '${term}' ===`);
      console.log(code.slice(pos - 100, pos + 800));
      console.log('-----------------');
    }
  });

  // Let's write another function search for:
  //ma= (addAdvanceEntry), ri= (editAdvanceEntry), ii= (deleteAdvanceEntry)
  // Let's search inside a larger window for them
  // AdvanceEntry usually has amount, purpose, workerName, status, dates, etc.
  const advTerms = ['addAdvanceEntry', 'ma=I=>{', 'advanceEntry', 'advanceEntries'];
  advTerms.forEach(term => {
    let pos = code.indexOf(term);
    if (pos !== -1) {
      console.log(`=== Found reference to '${term}' ===`);
      console.log(code.slice(pos - 100, pos + 1000));
      console.log('-----------------');
    }
  });
}

findStandingCostFields();
