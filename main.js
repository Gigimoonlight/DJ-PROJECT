stat="";
musga="";
lwX=0;
lwY=0;
rwX=0;
rwY=0;
function setup(){
    canvas=createCanvas(600, 485);
    canvas.center();
    cam=createCapture(VIDEO);
    cam.hide();
    poseNet=ml5.poseNet(cam, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    image(cam, 0, 0, 599, 484);
    fill(25, 25, 112);
    circle(lwX, lwY, 30);
    fill(25, 25, 112);
    circle(rwX, rwY, 30);
    if(lwX!=0 || rwX!=0){
        musga.stop();
    } 
}
function preload(){
    musga=loadSound("music.mp3");
}

function play(){
    musga.play();
    musga.setVolume(1);
    musga.rate(1);
}

function modelLoaded(){
    console.log("x_x");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lwX=results[0].pose.leftWrist.x;
        lwY=results[0].pose.leftWrist.y;
        rwX=results[0].pose.rightWrist.x;
        rwY=results[0].pose.rightWrist.y;
    }
}