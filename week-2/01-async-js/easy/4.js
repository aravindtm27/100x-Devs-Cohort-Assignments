const fs = require("fs");

const fileContents = new Promise(function(resolve){
    fs.writeFile("a.txt","this is my new text", function(err){
        if(err) throw err;
        console.log("shits replaced");
    })
})