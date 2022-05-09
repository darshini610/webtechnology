var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res){
    if(req.url=='/'){
        fs.readFile('demo.txt',function(err,data){
            res.write(data);
            res.end();
        })
    }
    else if(req.url=="/home")
    {
        fs.readFile('demo1.txt',function(err,data){
            res.write(data)
        res.end();
    })
}
else if(req.url=="/admin")
{
    fs.readFile('demo2.txt',function(err,data){
        res.write(data)
       res.end();
})
}
})
    server.listen(2000)
    console.log("server started");
