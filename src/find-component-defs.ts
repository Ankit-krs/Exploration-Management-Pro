import fs from 'fs';

function findComponentDefs() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  const components = [
    { name: 'Mee', search: 'Mee=' },
    { name: 'Vee', search: 'Vee=' },
    { name: 'Fee', search: 'Fee=' },
    { name: 'Lee', search: 'Lee=' },
    { name: 'zee', search: 'zee=' },
    { name: 'f5', search: 'f5=' }
  ];
  
  components.forEach(c => {
    let pos = 0;
    while (true) {
      pos = code.indexOf(c.search, pos);
      if (pos === -1) break;
      const chunk = code.slice(pos, pos + 200);
      if (chunk.includes('=>') || chunk.includes('function')) {
        console.log(`Found definitions of ${c.name} at word pos ${pos}:`);
        console.log(code.slice(pos - 100, pos + 3000));
        console.log('===================================================');
        break;
      }
      pos += c.search.length;
    }
  });
}

findComponentDefs();
