const express=require("express");
const app=express();
const path=require("path");
const apiRoutes=require("./app/routing/apiRoutes");
const htmlRoutes=require("./app/routing/htmlRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true,parameterLimit: 1000000 }));



app.use("/api",apiRoutes);
app.use("/",htmlRoutes);


app.listen(3000,()=>{
    console.log("Server Started");
})
