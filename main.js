function setup(){
canvas = createCanvas(640,480);
canvas.position(100,250);
video = createCapture(VIDEO);
video.hide();

tint_color = "_";
}

function draw(){
image(video, 0, 0, 640, 480);
tint(tint_color);
fill("cyan");
stroke("blue");
circle(20,20,50);
circle(620,20,50);
circle(20,460,50);
circle(620,460,50);
fill("orange");
stroke("blue");
rect(40,10,560,20);
rect(40,450,560,20);
rect(10,40,20,400);
rect(610,40,20,400);
}

function take_snapshot(){
save("mayuk.png");    
}

function filter123(){
tint_color = document.getElementById("abc").value;    
}