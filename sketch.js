
let bigManage;
let img;


function setup() {
  createCanvas(1280, 720);
  bigManage = new BigManage ();


}
function keyTyped() {
  bigManage.keyGestion();
}
function draw() {
  background(220);
  bigManage.show();

}
function mousePressed() {
  bigManage.mouseManagement();
}
