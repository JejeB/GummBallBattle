class FirstGame extends Game{
  constructor(players) {
    super(players)
    //typeOfgame
    this.typeOfgame="Winner"
    var time;
    var isGreen;
    this.isGreen=false
    var lastPrint;
    this.lastPrint = millis() - 3000;
    var cmp;
    this.cmp=0
  }


  show(){

    this.chronoSetUp();
    if (this.cmp==2) {
      this.SetPossible()
    }else {
      this.SetImpossible()

      if (this.cmp == 4) {
        this.SetGameFinish()
      }

    }
  }

  chronoSetUp(){
  var timeElapsed = millis() - this.lastPrint;
  if (timeElapsed > 2000) {
    this.cmp++;
    this.lastPrint = millis();
    }
  }

  SetPossible(){
    background(0,255,0);
    fill(0,0,0);
    text("PUSH !", 400,400);
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].setCanItouch(true)
    }
  }

  SetImpossible(){
    background(255,0,0);
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].setCanItouch(false)
    }
  }

  SetGameFinish(){
    background(255,0,255);
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].getasSucced()) {
        //print("J"+this.players[i].getNum() + "   Win !")
        this.tabWinner[this.players[i].getNum()]=1
      }else {
        //print("J"+this.players[i].getNum() + "   Lost !")
        this.tabWinner[this.players[i].getNum()]=0
      }
    }
    this.isFish =true
  }


}
