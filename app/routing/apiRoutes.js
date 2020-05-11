const express = require('express');
const router = express.Router();
let friends=require("../data/friends");
const path =require("path");
let fs=require("fs");

router.get("/friends",(req,res)=>{
    res.json({"message":[]})
})

router.post("/friends",(req,res)=>{
  let data=req.body;

  let _data=fs.readFileSync(path.join(__dirname,'../data/friends.json'), 'utf8');
 
let obj=JSON.parse(_data);
obj.friends.push(data);

// calculating the best match

let difference_index=[] ;// contains the scors


for(let i=0;i<obj.friends.length;i++)
{
  let _valsum=0;
obj.friends[i].scores.forEach((element,i) => {
  console.log(element);
  console.log(data.scores);
  

  _valsum+=Math.abs(Number(element)-Number(data.scores[i]))

});;

difference_index.push(_valsum);

}
 
  let min_index =difference_index.indexOf(Math.min(...difference_index));


  




//console.log(temp);
 fs.writeFileSync(path.join(__dirname,'../data/friends.json'), JSON.stringify(obj),'utf8');



let bestmatch=obj.friends[min_index];

 //// fs.writeFileSync("../data/friends.js",friends);

    res.json({"bestmatch":bestmatch})
})

module.exports=router;