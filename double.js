let promise=new Promise((resolve,reject)=>
{
    setTimeout(()=>resolve(1),1000);
});
promise.then((result)=>
{
    console.log(result);
    return result;
});
promise.then((result)=>
{
    console.log(result);
    return result;
});
promise.then((result)=>
{
    console.log(result*2);
    return result*2;
});

promise.then((result)=>
{
    console.log(result*3);
    return result*3;
});

