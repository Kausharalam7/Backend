const readline = require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout   
})

const todos=[];

const showMenu=()=>{
    console.log("\n1.Add a Task");
    console.log("2.View Task")
    console.log("3.Exit");
    rl.question("Choose an option: ",handleInput);

}

const handleInput=(option)=>{
    if(option==="1"){
    rl.question("Enter the task: ",(task)=>{
        todos.push(task);
        console.log("Task added: ",task)
        showMenu();
    })
}else if(option==="2"){
  console.log("\n Your todo lists");
  todos.forEach((todolist,index)=>{
    console.log(`${index+1}. ${todolist}`);
  })
  showMenu();
}
else if(option==="3"){
    console.log("good bye");
    rl.close();
  }
  else {
    console.log("Invalid option selected.")
    showMenu();
  }
}

showMenu()