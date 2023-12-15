const fs = require("fs");

const fileReader = new Promise((resolve)=>{
     fs.readFile("a.txt","utf-8",function(err,data){
        resolve(data);
     })
})

function fileModifier(data){
    const editedText = data.replace(/\,+/g, ",");
    fs.writeFile("a.txt",editedText,(err)=>{
        if(err) throw err;
        console.log("shits replaced");
    })
}

fileReader.then(fileModifier);