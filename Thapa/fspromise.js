const fs=require("fs/promises");
const path=require("path");

const fileName="fsPromise.txt";
const filePath=path.join(__dirname,fileName);

const file=__dirname;

// fs.promises.readdir(file)
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err));

const filePath1=__dirname;

// fs.promises
//     .readdir(filePath1)
//     .then((data)=> console.log(data))
//     .catch((err)=>console.log(err));

// fs.promises
//     .writeFile(filePath,"this is the end,hold your breath","utf-8")
//     .then(console.log("file created successfully"))
//     .catch((err)=>console.log(err));

// fs.promises
//     .readFile(filePath,"utf-8")
//     .then(data=>console.log(data))
//     .catch((err)=>console.log("error readingg file",err));

// fs.promises
//     .unlink(filePath)
//     .then(console.log("File deleted successfully"))
//     .catch((err)=>console.log("error deleting file",err));


// const readFolder=async()=>{
//     try{
//         const res=await fs.promises.readdir(filePath1);
//        console.log(res);
//     } catch(error){
//          console.error(error);

//     }
// }  
// readFolder();

// const writeFileExample=async ()=>{
//     try{
//         await fs.writeFile(filePath,"this is the end,hold your breath",'utf-8');
//         console.log("File created succesfully");
//     } catch(error){
//         console.error(error);
//     }
// }
// writeFileExample()

// const readFileExample=async ()=>{
//     try{
//         const data=await fs.readFile(filePath,'utf-8');
//         console.log(data);
//     } catch(error){
//         console.error(error);
//     }
// }
// readFileExample()

// const appendFileExample=async ()=>{
//     try{
//         await fs.appendFile(filePath,"\n this is not the end, u have to wait","utf-8");
//         console.log("data successufly updated");
//     } catch(error){
//         console.error(error);
//     }
// }
// appendFileExample()

const deleteFileExample=async ()=>{
    try{
        await fs.unlink(filePaths);
        console.log("deleted successfully");
    } catch(error){
        console.error("bhai kuch error sudhar ja",error.message);
    }
}
deleteFileExample()