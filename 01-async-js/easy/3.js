const fs = require("fs");

const fileReader = new Promise(function(resolve){
    fs.readFile("a.txt","utf-8",function(err,data){
        const edit = data.replace(/[aeiou]/g, '');
        resolve(edit);
    })
})

function dips(data){
    console.log(data);
}

fileReader.then(dips);