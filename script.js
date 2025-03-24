function setup() {
    createCanvas(400, 400)
}

let xSmilyFace = 200
let xSmilyFaceSens = 1;
let ySmilyFace = 300
let ySmilyFaceSens = 1;
let raySmilyFace = 50; 
let stepSmilyFace = 3

function draw() {
    background("#eeeeee")

    xSmilyFace += stepSmilyFace * xSmilyFaceSens
    if (xSmilyFace > 400 - raySmilyFace || xSmilyFace < 0 + raySmilyFace) {
        xSmilyFaceSens = -1 * xSmilyFaceSens
    }

    ySmilyFace += stepSmilyFace * ySmilyFaceSens
    if (ySmilyFace > 400 - raySmilyFace || ySmilyFace < 0 + raySmilyFace) {
        ySmilyFaceSens = -1 * ySmilyFaceSens
    }

    smileyFace(xSmilyFace, ySmilyFace, raySmilyFace);

}


function smileyFace(x, y, ray) {
    let diameter = ray*2
    fill("yellow")
    circle(x, y, diameter)

    // Ochiul stang
    circle(x-20, y-20, 20)
    fill("blue")
    circle(x-20, y-20, 10)

    // Ochiul drept
    fill("yellow")
    circle(x+20, y-20, 20)
    fill("blue")
    circle(x+20, y-20, 10)

    // Gura
    fill("black")
    arc(x, y+10, 50, 40, 0, Math.PI)
    fill("red")
    arc(x, y+20, 20, 30, 0, Math.PI)
}