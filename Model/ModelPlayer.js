class ModelPlayer extends Player{
  constructor(numPlayer,player) {
    super(numPlayer)
    //Set active Touch for each player
    this.numPlayer=numPlayer;
    this.leftKey=player.getLeftKey()
    this.rightKey=player.getRightKey()
    this.colorm=player.getColor();
    this.score=player.getScore()
  }
  rightPressed(){
    print("J"+this.numPlayer +"pressed right")
  }
  leftPressed(){
    print("J"+this.numPlayer +"pressed left")
  }
}
