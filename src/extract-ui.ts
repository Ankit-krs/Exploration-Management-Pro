import fs from 'fs';

function extractUI() {
  const file = fs.readFileSync('temp_filtered_strings.json', 'utf8');
  const strings: string[] = JSON.parse(file);
  
  // We want to find UI labels, buttons, headers, and sentences.
  // We will filter out minified code fragments (like matches containing functions, code symbols, variables, equals, parentheses).
  const uiTerms = strings.filter(s => {
    // Must contain letters, can contain spaces, punctuation is okay
    if (!/[a-zA-Z]/.test(s)) return false;
    
    // Avoid js fragments, functions, assignments, object properties, regexes, commas, semicolons
    if (s.includes(';') || s.includes('=>') || s.includes('{') || s.includes('}') || s.includes('(') || s.includes(')') || s.includes('[') || s.includes(']') || s.includes('=') || s.includes('&&') || s.includes('||')) {
      return false;
    }
    
    // String must look like regular clean English text
    if (/^[a-z0-9\s.,!?:'""©/\-+%]+$/i.test(s)) {
      // Must have some words or be clear labels, and not just file sizes/formats or css classes
      if (s.length >= 3 && s.length <= 150) {
        return true;
      }
    }
    return false;
  });

  const unique = Array.from(new Set(uiTerms)).sort((a,b) => a.localeCompare(b));
  fs.writeFileSync('extracted_ui.json', JSON.stringify(unique, null, 2));
  console.log('Saved unique clean UI terms:', unique.length);
}

extractUI();
