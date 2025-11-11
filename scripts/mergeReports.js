const fs = require('fs');
const merge = require('mochawesome-merge');

merge({ files: ['reports/mochawesome_*.json'] }).then(report => {
  fs.writeFileSync('reports/merged.json', JSON.stringify(report, null, 2));
});
