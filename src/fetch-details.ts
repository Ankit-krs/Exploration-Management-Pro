import fs from 'fs';

function analyze() {
  const text = fs.readFileSync('temp_js_bundle.js', 'utf8');
  console.log('File size:', text.length);

  // Let's search for unique words and long strings, filtering out common React/system ones
  const matches = text.match(/"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'/g) || [];
  const rawStrings = matches.map(m => m.slice(1, -1));

  // Let's filter for strings that look like human text (containing spaces, words, capitals, etc.)
  // and exclude pure base64, React framework strings, or library codes.
  const appStrings = Array.from(new Set(rawStrings)).filter(s => {
    // Basic checks
    if (s.length < 4 || s.length > 300) return false;
    if (/^[a-zA-Z0-9+/=]{40,}$/.test(s)) return false; // Avoid solid base64 / hashes
    if (s.startsWith('react') || s.includes('__react') || s.includes('Fiber') || s.startsWith('__')) return false;
    
    // Ignore internal CSS/Tailwind rules, standard browser event names, or minified symbols
    if (s.includes(';') || s.includes('{') || s.includes('}') || s.includes('px') || s.includes('rem')) {
      if (!s.includes(' ') || s.includes('display:') || s.includes('width:')) return false;
    }
    
    // Check if it contains human words, spaces, or title-like patterns
    const hasSpaces = s.includes(' ');
    const hasCapital = /[A-Z]/.test(s);
    const hasLetters = /[a-zA-Z]/.test(s);
    
    // Let's allow strings with spaces, or uppercase identifiers (like ROUTE, ACTION, TITLE, etc.)
    return hasLetters && (hasSpaces || s.length > 8 && hasCapital);
  });

  console.log('Candidate app strings found:', appStrings.length);
  
  // Group app strings. Let's see if we have strings mentioning geology, minerals, exploration, tracking, coordinates, map, or UI text
  const geological = appStrings.filter(s => /explore|exploration|mine|mineral|drill|geol|survey|camp|map|coordinate|lat|lng|latitude|longitude|magnet|seismic|gravity/i.test(s));
  console.log('Geological/Exploration related strings:', geological.slice(0, 100));

  const routingOrDashboard = appStrings.filter(s => /dashboard|project|site|history|stat|report|metric|worker|vehicle|equipment|budget|status|alert|log/i.test(s));
  console.log('Dashboard / management strings:', routingOrDashboard.slice(0, 100));

  // Write out all app strings sorted by length to a file
  const sorted = appStrings.sort((a,b) => b.length - a.length);
  fs.writeFileSync('temp_app_strings.json', JSON.stringify(sorted, null, 2));
  console.log('Saved sorted app strings to temp_app_strings.json');
}

analyze();
