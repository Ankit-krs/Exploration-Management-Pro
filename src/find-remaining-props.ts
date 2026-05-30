import fs from 'fs';

function findRemainingProps() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Search for addOpexEntry definition, addDceEntry definition, addAdvanceEntry definition
  const searchTerms = [
    'addOpexEntry =',
    'addDceEntry =',
    'addAdvanceEntry =',
    'addOpexEntry:',
    'addDceEntry:',
    'addAdvanceEntry:'
  ];
  
  searchTerms.forEach(term => {
    let pos = code.indexOf(term);
    if (pos !== -1) {
      console.log(`=== Found reference to ${term} ===`);
      console.log(code.slice(pos - 150, pos + 1000));
      console.log('-----------------');
    }
  });

  // Let's also look for functions by scrolling back from context definitions
  // We can find where Kn=, Se=, ma= are defined!
  // Let's search for "Kn=" or "Se=" or "ma=" where it defines a function
  const functionDefs = [
    'Kn=',
    'Se=',
    'ma='
  ];
  functionDefs.forEach(def => {
    let pos = 0;
    while (true) {
      pos = code.indexOf(def, pos);
      if (pos === -1) break;
      const chunk = code.slice(pos, pos + 300);
      if (chunk.includes('=>') || chunk.includes('function')) {
        console.log(`=== Function Match for ${def} ===`);
        console.log(code.slice(pos - 50, pos + 800));
        console.log('-----------------');
        break;
      }
      pos += def.length;
    }
  });
}

findRemainingProps();
