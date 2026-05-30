import fs from 'fs';

function findOpexView() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Find "Daily OPEX Entry" inside the code and grab the next 5000 chars to see forms/buttons
  let pos = code.indexOf("Daily OPEX Entry");
  if (pos !== -1) {
    console.log('Found "Daily OPEX Entry" in bundle at:', pos);
    console.log(code.slice(pos - 200, pos + 4000));
    console.log('---------------------------');
  } else {
    console.log('"Daily OPEX Entry" not found');
  }
}

findOpexView();
