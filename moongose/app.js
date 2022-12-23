const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydata',{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> console.log("Connection Successful.."))
.catch((err)=>console.log(err));

const plylistschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    author:String,
    active:Boolean,
});   

const mycollection = new mongoose.model("mycollection",plylistschema);
const createdocument = async() =>{
    try {
        const reactplaylist = new mycollection({
            name:"React Js",
            ctype:"Front End",
            author:"Jaydip",
            active:true
        });
        const expressplaylist = new mycollection({
            name:"Express Js",
            ctype:"Back-End",
            author:"Jaydip",
            active:true
        });
        const nodeplaylist = new mycollection({
            name:"Node Js",
            ctype:"Back-End",
            author:"Jaydip", 
            active:true
        });
        const result = await mycollection.insertMany([reactplaylist,expressplaylist,nodeplaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

createdocument();