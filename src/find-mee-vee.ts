import fs from 'fs';

function findMeeVee() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Searches for exact definitions
  const terms = [
    'Vee=()=>{',
    'Mee=()=>{',
    'Vee = () =>',
    'Mee = () =>',
    'const Vee',
    'const Mee'
  ];
  
  terms.forEach(term => {
    let pos = code.indexOf(term);
    if (pos !== -1) {
      console.log(`=== Found Definition of '${term}' ===`);
      console.log(code.slice(pos - 100, pos + 4000));
      console.log('--------------------------------------------');
    }
  });
}

findMeeVee();
