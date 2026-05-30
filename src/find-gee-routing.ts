import fs from 'fs';

function findGeeRouting() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  let pos = code.indexOf('Gee=()=>');
  if (pos !== -1) {
    console.log('Found Gee component in bundle at:', pos);
    console.log(code.slice(pos, pos + 15000));
    console.log('---------------------------');
  } else {
    console.log('Gee component not found');
  }
}

findGeeRouting();
