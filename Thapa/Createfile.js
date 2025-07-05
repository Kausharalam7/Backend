//enter the filename;
// enter the content;

import readline from 'readline';
import fs from 'fs';

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const filecreation=()=>{
    rl.question("Enter the filename: ",(filename)=>{
        rl.question("Enter the content of your file: ",(content)=>{
            fs.writeFile(`${filename}.txt`,content,(err)=>{
                if(err){
                    console.error(`Error writing the file: ,${err.message}`);
                }
                else{
                    console.log(`file "${filename}".txt" created successfully!. `)
                }
                rl.close();
            })
        })
    })
}

filecreation();