class FirstGamePlayer extends Player {
  constructor(numPlayer) {
    super(numPlayer)
  }

  leftKeyPressed(){
    print("L"+this.getNum())
  }
  rightKeyPressed(){
    print("R"+this.getNum())
  }
}
