import fs from 'fs';

function extractMainApp() {
  const file = fs.readFileSync('temp_app_strings.json', 'utf8');
  const strings: string[] = JSON.parse(file);
  
  // Filter out:
  // - xlsx/xl/sheetjs things (e.g., application/vnd.openxmlformats..., schemas.openxml..., workbook, sheet, cell, row, col, style:style, office:body)
  // - firebase internals
  // - react internals
  
  const filtered = strings.filter(s => {
    if (s.includes('application/vnd.')) return false;
    if (s.includes('http://schemas.')) return false;
    if (s.startsWith('react.')) return false;
    if (s.includes('Firebase') || s.includes('firestore') || s.includes('auth/')) {
      if (!s.includes('Drilling') && !s.includes('Rig') && !s.includes('Exploration') && !s.includes('Site') && !s.includes('Worker')) return false;
    }
    if (s.includes('IndexedDB') || s.includes('databaseId') || s.includes('persisted') || s.includes('multi-tab')) return false;
    if (s.includes('SheetJS') || s.includes('xlsx') || s.includes('sheetRows')) return false;
    if (s.includes('stopPropagation') || s.includes('preventDefault') || s.includes('currentTarget')) return false;
    
    // Ignore generic CSS attributes
    if (s.startsWith('border') || s.startsWith('bg-') || s.startsWith('text-') || s.startsWith('w-') || s.startsWith('h-') || s.startsWith('p-') || s.startsWith('font-') || s.startsWith('rounded-') || s.startsWith('flex') || s.startsWith('grid')) {
      if (s.split(' ').every(part => part.includes('-') || part === 'flex' || part === 'grid' || part === 'hidden' || part === 'block' || part === 'inline' || part === 'relative' || part === 'absolute' || part === 'fixed' || part === 'sticky' || part === 'inset-0' || part === 'z-')) {
        return false;
      }
    }
    
    return true;
  });

  console.log('Filtered app strings length:', filtered.length);
  fs.writeFileSync('temp_filtered_strings.json', JSON.stringify(filtered, null, 2));
}

extractMainApp();
