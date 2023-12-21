function wait1(t1) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(" resolved");
            resolve();
        },t1*1000)
    })
}

function wait2(t2) {

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(" resolved");
            resolve();
        },t2*1000)
    })
}

function wait3(t3) {

    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(" resolved");
            resolve();
        },t3*1000)
    })
}

function calculateTime(t1, t2, t3) {
    let n = new Date();
    return new Promise((resolve)=>{
        wait1(t1).then(wait2(t2)).then(wait3(t3)).then(()=>{
            let n2 = new Date();
            console.log(n," :",n2)
            resolve(n2-n);
        })
        
    })
}

calculateTime(1,2,3);
