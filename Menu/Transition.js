class Transition {
  constructor() {
    var lastPrint;
    this.lastPrint = millis() - 3000;
    var cmp;
    this.cmp=0
  }

  show(){
    this.chronoSetUp()

    background(0,0,0);
    fill(250,250,250);
    text("TRANSITION", 500,300);
  }
  chronoSetUp(){
  var timeElapsed = millis() - this.lastPrint;
  if (timeElapsed > 2000) {
    this.cmp++;
  
    this.lastPrint = millis();
    }
  }

  isFinish(){
    if (this.cmp == 2) {
      return true
    }else {
      return false
    }
  }
}
