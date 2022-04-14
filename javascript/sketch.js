function setup(){
    createCanvas(1000, 1000);
    background(190, 40, 100);

    var i = 0;
    var rand = random(1000);
    var rand2 = random(50, 1000);

    /*while(i < 100){
        fill(random(255));
        //ellipse(50 * i, 50 * i, 250, 250);
        ellipse(random(1000), random(1000), 250, 250);
        i = i + 1;
    } */

    /* fill(0);
    noStroke();
    rect(100, 100, 100, 500);

    fill(0);
    stroke(0);
    ellipse(250, 200, 300, 300);

    fill(190, 40, 100);
    stroke(0);
    ellipse(250, 200, 200, 200);
    // ellipse(x, y, w, h) */

}

function draw(){

    fill(255, 0, 0);
    stroke(10);
    ellipse(mouseX, mouseY, 100, random(100, 250));
}

/* function mousePressed(){
    saveCanvas("sketch-01", "png")
} */