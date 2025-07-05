const EventEmitter=require("events");

const emitter=new EventEmitter();

emitter.on("greet",(username,profession)=>{
    console.log(`hello ${username}, you are ${profession}`);
})
emitter.emit("greet","kausharalam","student");