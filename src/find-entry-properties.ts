import fs from 'fs';

function findEntryProperties() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Search for the body of addDrillingEntry, addOpexEntry, addDceEntry, addAdvanceEntry
  const searchTerms = [
    'addDrillingEntry', 
    'addOpexEntry', 
    'addDceEntry', 
    'editDrillingEntry', 
    'addCategory',
    'Sn=I=>{' // This was seen as "Sn=I=>{" in the find-tabs output! Let's scan for Sn=
  ];
  
  searchTerms.forEach(term => {
    let pos = code.indexOf(term);
    if (pos !== -1) {
      console.log(`=== Found property logic for ${term} ===`);
      console.log(code.slice(pos - 100, pos + 1200));
      console.log('-----------------');
    }
  });

  // Let's also look for state defaults `H$`, `G$`, `q$` etc. to see what the default values or types are.
  const defaults = ['H$', 'G$', 'q$'];
  defaults.forEach(term => {
    let pos = code.indexOf(term);
    if (pos !== -1) {
      console.log(`=== Default mock array ${term} ===`);
      console.log(code.slice(pos - 150, pos + 600));
      console.log('-----------------');
    }
  });
}

findEntryProperties();
