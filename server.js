console.log("hi kd");
const http = require("http");
const getReq = require("./methods/get-request");
const putReq = require("./methods/put-request");
const postReq = require("./methods/post-request");
const deleteReq = require("./methods/delete-request");
//require("dotenv").config();
const PORT = process.env.PORT || 5001;
const server = http.createServer((req,res)=>{
   /* switch(req.method){
        case "POST":
        postReq(req,res);
        break;
        case "GET":
        getReq(req,res);
        break;
        case "GET":
            getReq(req,res);
            break;
        case "PUT":
        putReq(req,res);
        break;
        default:
            
req.statusCode=404;
    res.setHeader("Content-Type","application/json");
    res.write(JSON.stringify({title:"Not Found",message:"Route Not Found"}));
    res.end();
    }*/
    req.statusCode=404;
    res.setHeader("Content-Type","application/json");
    res.write(JSON.stringify({message:"Hi Preksha"}));
    res.end();

});
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});