/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    var e = new Date().getTime() + (milliseconds);
    while (new Date().getTime() < e) {}
    return new Promise((resolve)=>{
        resolve();
    })
}

sleep().then();

module.exports = sleep;
