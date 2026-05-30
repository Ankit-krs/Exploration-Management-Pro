import fs from 'fs';

function findTaxonomyUI() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Search for category management terms
  const terms = ['Category Management', 'Expense Head', 'Manage Categories', 'Taxonomy', 'addCategory', 'addExpenseHead'];
  
  terms.forEach(term => {
    let pos = code.indexOf(term);
    if (pos !== -1) {
      console.log(`=== Found reference to taxonomy term '${term}' ===`);
      console.log(code.slice(pos - 100, pos + 800));
      console.log('-----------------');
    }
  });
}

findTaxonomyUI();
