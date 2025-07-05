const os = require('os');

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Total Memory:", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");
console.log("Free Memory:", (os.freemem() / 1024 / 1024).toFixed(2), "MB");
console.log("Uptime:", (os.uptime() / 60).toFixed(2), "minutes");
console.log("User Info:", os.userInfo());
