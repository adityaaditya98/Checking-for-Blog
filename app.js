const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
const data = new Map();
const day3=[];
app.get("/",function(req,res){
    res.render("Main",{Checking:"Testing",DayOne:day3,day1and2:data});
    console.log(day3);
})
app.get("/Day1",function(req,res){
    let sendValue="";
    data.forEach((values,keys)=>{
        if(keys==="Day1"){
           sendValue=values;
        }
    })
    res.render("Day1",{day1:"Welcome to DayOne",Values:sendValue});
})
app.get("/Day2",function(req,res){
    let day2Text="";
    data.forEach((value,keys)=>{
        if(keys==="Day2"){
            day2Text=value;
        }
    })
    res.render("Day2",{dayTitle:"Welcome to DayTwo",day2Text:day2Text})
})
app.get("/Day3",function(req,res){
    res.render("Day3",{dayTitle:"Welcome to another post",day3Text:day3});
})

app.get("/Main",function(req,res){
    console.log("Testing for Main Treggor");
    res.render("Main",{Checking:"Testing",DayOne:day3,day1and2:data});
})
app.get("/about",function(req,res){
    res.render("about");
})

app.get("/compose",function(req,res){
    res.render("compose");
})
app.post("/",function(req,res){
    let textInput = req.body.textArea;
    let titleInput =  req.body.Options;
    if(titleInput!=="Day3"){
    data.set(titleInput,textInput);
    data.forEach((values,keys)=>{
        console.log(values,keys);
        switch(keys){
            case "Day1":{
                console.log(values);
                console.log(keys);
            }
            case "Day2":{
                console.log(values);
                console.log(keys);
            }

        }
    })
    }else{
    day3.push(textInput);
    console.log(day3);
    }
    // console.log(textInput);
    // console.log(titleInput);
    // console.log(data);
    
    res.redirect("compose");
})
app.listen(3000);