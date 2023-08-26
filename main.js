function preload()
{

}

function setup()
{
    canvas=createCanvas(400,400);
    canvas.position(400,300);
    WebCam=createCapture(VIDEO);
    WebCam.hide();
    
}

function draw()
{
    image(WebCam,85,85,250,250);
    fill(204, 153, 255);
    stroke(153, 102, 255);
    circle(20,20,35);
    circle(380,20,35);
    circle(380,380,35);
    circle(20,380,35);

    fill(102, 153, 255);
    stroke(102, 102, 255);
    rect(10,35,20,330);
    rect(370,35,20,330);
    rect(35,10,330,20);
    rect(35,370,330,20);

}

function take_snapshot()
{
    save("myImage.png");
}

