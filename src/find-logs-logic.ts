import fs from 'fs';

function findLogsLogic() {
  const code = fs.readFileSync('temp_js_bundle.js', 'utf8');
  
  // Find where shared_rig_logs is used
  const term = "shared_rig_logs";
  let pos = code.indexOf(term);
  if (pos !== -1) {
    console.log('Found shared_rig_logs at index:', pos);
    console.log('Surrounding code:');
    console.log(code.slice(Math.max(0, pos - 1500), Math.min(code.length, pos + 1500)));
  } else {
    console.log('shared_rig_logs not found');
  }
}

findLogsLogic();
