const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'asyncData.txt');

// fs.writeFile(filePath,"This is a intial content.",'utf-8',(err,data )=>{
//     if(err)  console.error(err);
//     else console.log(data)
// })

// fs.readFile(filePath, 'utf-8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//   } else {
//     console.log('File content:', data);
//   }
// });

// fs.appendFile(filePath, '\nAppended line.', (err) => {
//   if (err) {
//     console.error('Error appending to file:', err);
//   } else {
//     console.log('Content appended.');
//   }
// });

fs.unlink(filePath, (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted.');
  }
});

