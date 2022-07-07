noseX=0;
noseY=0;

function preload() {
    shrek = loadImage ('shrek.png')
}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
   {
    console.log(results);
    noseX = results[0].pose.nose.x-75;
    noseY = results[0].pose.nose.y-95;
   }
}
function draw() {
    image(video, 0, 0, 350, 350);
    image(shrek, noseX, noseY, 145, 155);
}

function take_snapshot(){
    save('myFilterImage.png');
}