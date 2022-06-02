img="";
status ="";

function setup(){
     canvas = createCanvas(620, 440);
     canvas.center();
     objectDetector = ml5.objectDetector('cocoossd', modelLoaded);
     document.getElementById("status").innerHTML = "Status: Detecting Objects";
 }

 function preload(){
     img = loadImage("dog_cat.jpg");
 }

 function draw(){
     image(img, 0, 0, 620, 440);
     fill("#FF0000");
     text("Dog", 42, 75);
     noFill();
     stroke("#FF0000");
     rect(30,  60, 450, 350);
     
     fill("FF0000");
     text("Cat", 320, 120);
     noFill();
     stroke("FF0000");
     rect(300, 90, 270, 320);
 }

 function modelLoaded(){
     console.log("model is loaded");
     status =true;
     objectDetector.detect(img, gotResult);
 }

 function gotResult (error, results){
     if(error){
         console.log(error);
     }
     console.log(results);
 }