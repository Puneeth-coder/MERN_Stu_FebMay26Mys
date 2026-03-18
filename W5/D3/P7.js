// Sequential await vs parallel promise execution 
function taskA(){
    return new Promise(function(resolve){
        setTimeout(function(){
        resolve("Task-A Complete");
        },1000);
    });
};
function taskB(){
    return new Promise(function(resolve){
        setTimeout(function(){
        resolve("Task-B Complete");
        },1000);
    });
};
async function runSequential() {
    console.time("Sequential");
    const a = await taskA();
    const b = await taskB();
    console.timeEnd("Sequential");
    console.log(a);
    console.log(b);
}
await runSequential();

async function runParallel() {
    console.time("Parallel");
    const result = await Promise.all([taskA(),taskB()]);
    console.timeEnd("Parallel");
    console.log(result[0]);
    console.log(result[1]);
}
await runParallel();