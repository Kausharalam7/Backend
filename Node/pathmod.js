const path = require('path');

console.log("Directory:", __dirname);
console.log("File:", __filename);
console.log("Base:", path.basename(__filename));
console.log("Ext:", path.extname(__filename));
console.log("Joined Path:", path.join(__dirname, 'assets', 'app.js'));
console.log("Resolved Path:", path.resolve('Thapa', 'index.js'));
