import fs from 'fs';

function findMeeMetrics() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  let pos = code.indexOf('Mee=()=>');
  if (pos === -1) {
    pos = code.indexOf('Mee = () =>');
  }
  
  if (pos !== -1) {
    console.log('Found Mee component at:', pos);
    // Let's print from Mee definition up to pos + 3000 to see the cards layout!
    console.log(code.slice(pos, pos + 4000));
  } else {
    console.log('Mee component not found');
  }
}

findMeeMetrics();
