const fs=require('fs');
const path = require('path');

const fileName="text.txt";
const filepath=path.join(__dirname,fileName);

const writeFile= fs.writeFileSync(
    filepath,
    "This is the initail Data,updated",
    "utf-8"
);
console.log(writeFile);
// console.log(__dirname);
// const readFile=fs.readFileSync("./Pyush.txt","utf-8");
// console.log(readFile);

// const appendFile= fs.appendFileSync(
//     filepath,
//     "\n This is new the initail Data,updated",
//     "utf-8"
// );
// console.log(appendFile);

// const newUpdatefileName="updatefileName.text";
// const newFilepath=path.join(__dirname,newUpdatefileName);
// const renameFile=fs.renameSync(filepath,newUpdatefileName);
// console.log(renameFile);