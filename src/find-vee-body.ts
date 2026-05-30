import fs from 'fs';

function findVeeBody() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  let pos = code.indexOf("Vee=()=>{");
  if (pos === -1) {
    pos = code.indexOf("Vee = () =>");
  }
  
  if (pos !== -1) {
    console.log('Found Vee definition pos:', pos);
    // Print 8000 characters from pos to see the OPEX component implementation
    console.log(code.slice(pos, pos + 10000));
  } else {
    console.log('Vee definition not found');
  }
}

findVeeBody();
