let count =0;

function counter(){
    let nd = new Date();
    let mins = nd.getMinutes();
    let secs =nd.getSeconds();
    let hrs = nd.getHours();
    let ext = "am"
    if(hrs>12){
        hrs = hrs%12;
        ext="pm";
    }

    count++;
    console.log(count);
    console.log(`${hrs}:${mins}:${secs} ${ext}`);
}

setInterval(counter,1000);