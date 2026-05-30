import fs from 'fs';

function findOpexAdvances() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Let's find where Kn= is defined (addOpexEntry or other function?)
  // Wait! In wP.Provider context mapping, we checked:
  // addOpexEntry: Kn
  // addDceEntry: Se
  // addAdvanceEntry: ma
  // Let's search for "Kn = I => {" or "Kn=(I)=>{" in JS
  let pos = 0;
  while (true) {
    pos = code.indexOf('Kn=', pos);
    if (pos === -1) break;
    const chunk = code.slice(pos, pos + 200);
    if (chunk.includes('=>') || chunk.includes('function')) {
      console.log('Found Kn= function at:', pos);
      console.log(code.slice(pos - 100, pos + 1200));
      console.log('---------------------------');
    }
    pos += 3;
  }

  pos = 0;
  while (true) {
    pos = code.indexOf('ma=', pos);
    if (pos === -1) break;
    const chunk = code.slice(pos, pos + 200);
    if (chunk.includes('=>') || chunk.includes('function')) {
      console.log('Found ma= function at:', pos);
      console.log(code.slice(pos - 100, pos + 1200));
      console.log('---------------------------');
    }
    pos += 3;
  }
}

findOpexAdvances();
