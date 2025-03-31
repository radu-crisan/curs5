function setup() {
  createCanvas(400, 400)
}

const smileyFace1 = { x: 200, y: 300, sensX: 1, sensY: 1, ray: 10, step:3 }
const smileyFace2 = { x: 300, y: 300, sensX: 1, sensY: 1, ray: 25, step:2 }
const smileyFace3 = { x: 350, y: 300, sensX: -1, sensY: 1, ray: 15, step:4 }

function draw() {
  background("#eeeeee")

  smileyFace(smileyFace1)
  smileyFace(smileyFace2)
  smileyFace(smileyFace3)
}

function smileyFace(smObject) {
  smileyFaceCheck(smObject)
  smileyFaceDraw(smObject)
}

function smileyFaceCheck(smObject) {
  smObject.x += smObject.step * smObject.sensX
  if (smObject.x > 400 - smObject.ray || smObject.x < 0 + smObject.ray) {
    smObject.sensX = -1 * smObject.sensX
  }

  smObject.y += smObject.step * smObject.sensY
  if (smObject.y > 400 - smObject.ray || smObject.y < 0 + smObject.ray) {
    smObject.sensY = -1 * smObject.sensY
  }
}

function smileyFaceDraw(smObject) {
  let diameter = smObject.ray * 2
  fill("yellow")
  circle(smObject.x, smObject.y, diameter)

  // Ochiul stang
  circle(smObject.x - diameter / 5, smObject.y - diameter / 5, diameter / 5)
  fill("blue")
  circle(smObject.x - diameter / 5, smObject.y - diameter / 5, diameter / 10)

  // Ochiul drept
  fill("yellow")
  circle(smObject.x + diameter / 5, smObject.y - diameter / 5, diameter / 5)
  fill("blue")
  circle(smObject.x + diameter / 5, smObject.y - diameter / 5, diameter / 10)

  // Gura
  fill("black")
  arc(smObject.x, smObject.y + diameter / 10, diameter / 2, diameter / (5 / 2), 0, Math.PI)
  fill("red")
  arc(smObject.x, smObject.y + diameter / 5, diameter / 5, diameter / (10 / 3), 0, Math.PI)
}
