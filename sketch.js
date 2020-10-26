
let bigManage;
let img;

// Preload function before the game start
function setup() {
  createCanvas(1280, 720);
  bigManage = new BigManage ();


}
// If any key is typed
function keyTyped() {
  bigManage.keyGestion();
}
// Loop program
function draw() {
  background(220);
  bigManage.show();

}
//If mouse is pressed
function mousePressed() {
  bigManage.mouseManagement();
}
