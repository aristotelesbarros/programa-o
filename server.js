const express = require ('express');
const server = express ();
const nunjucks = require ('nunjucks'); 
server.use(express.static('public'))
server.set ("view engine","html")
nunjucks.configure ("views",{
    express:server
})
server.listen (5000,function(){
    console.log ("Hello world!!!")
    server.get("/",function(req,res){
    return res.render ("index")
    })

    server.get ("views/Videos.html",function(req,res){
        return res.render ("Videos")
    })
})

