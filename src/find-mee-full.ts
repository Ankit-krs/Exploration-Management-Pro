import fs from 'fs';

function findMeeFull() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  let pos = code.indexOf('Mee=()=>');
  if (pos === -1) {
    pos = code.indexOf('Mee = () =>');
  }
  
  if (pos !== -1) {
    console.log('Found Mee component at:', pos);
    // Let's print the next 15000 characters to see the full UI layout of the Dashboard!
    console.log(code.slice(pos + 3000, pos + 17000));
  } else {
    console.log('Mee component not found');
  }
}

findMeeFull();
