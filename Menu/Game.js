class Game {
  constructor(players) {
    var isFinish;
    this.isFinish=false;
    var players;
    this.players=players;
    var typeOfgame;
    this.typeOfgame=""
    var tabWinner;
    this.tabWinner=[]

  }
  getTabWinner(){return this.tabWinner}
  getIsFinish(){return this.isFish}
  getType(){return this.typeOfgame}

  keyGestion(){

    for (var i = 0; i < this.players.length; i++) { //Set active the listerner for the player to active Keypreeesed() in class player

      if(key === this.players[i].getLeftKey()){
        this.players[i].leftPressed()
      }
      if(key === this.players[i].getRightKey()){
        this.players[i].rightPressed()
      }
    }
  }



}
