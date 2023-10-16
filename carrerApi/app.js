const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const cricketRouter=require("./routes/cricket");
const cricketers=require("./models/cricket")


const app=express();
app.use(cors());
app.use(bodyParser.json({extended:false}));
app.use("/carrer",cricketRouter)



cricketers.sync()
.then(result=>{
     app.listen(3000);
}).catch(err=>{
    console.log(err)
});