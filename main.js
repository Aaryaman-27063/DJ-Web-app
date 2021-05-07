function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 600, 500);
function play(){
    song.play();
}
}
song ="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCanvas(VIDEO);
    video.hide();
function preload(){
song=loadSound("music.mp3");
}
}