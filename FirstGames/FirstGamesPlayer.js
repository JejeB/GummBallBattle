class FirstGamePlayer extends Player {
  constructor(numPlayer,player) {
    super(numPlayer)
    //Set active Touch for each player
    this.numPlayer=numPlayer;
    this.leftKey=player.getLeftKey()
    this.rightKey=player.getRightKey()
    this.colorm=player.getColor();
    this.score=player.getScore()
    //Variable
    var canItouch;
    this.canItouch=false
    var alreadyPressed;
    this.alreadyPressed=false
    var asSucced;
    this.asSucced=false
  }

  rightPressed(){

  }
  setCanItouch(canI){ this.canItouch=canI;}
  getasSucced(){return this.asSucced}

  leftPressed(){

    if (this.canItouch == true && this.alreadyPressed == false) {
      print("J"+this.numPlayer+"   Get it !")
      this.asSucced=true
    }else if (this.canItouch == false) {
      print("J"+this.numPlayer+"   Miss !")
      this.alreadyPressed=true
    }
  }

}
