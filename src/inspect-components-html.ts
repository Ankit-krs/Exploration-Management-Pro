import fs from 'fs';

function inspectComponentsHTML() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  const items = [
    { name: 'Mee (Dashboard)', term: 'Mee=()' },
    { name: 'Vee (Opex)', term: 'Vee=()' },
    { name: 'Fee (Dce)', term: 'Fee=()' },
    { name: 'Lee (Advance)', term: 'Lee=()' }
  ];
  
  items.forEach(item => {
    let pos = code.indexOf(item.term);
    if (pos !== -1) {
      console.log(`=== HTML for ${item.name} ===`);
      console.log(code.slice(pos, pos + 4000));
      console.log('-------------------------------------------');
    } else {
      console.log(`${item.name} symbol not found, trying fallback matching...`);
      // Let's do general search for "Mee=" or similar
      const fallbackTerm = item.term.replace('()', '');
      let pos2 = code.indexOf(fallbackTerm);
      if (pos2 !== -1) {
        console.log(`=== Fallback HTML for ${item.name} at ${pos2} ===`);
        console.log(code.slice(pos2, pos2 + 4000));
        console.log('-------------------------------------------');
      }
    }
  });
}

inspectComponentsHTML();
