class GameManagement {
  constructor(players) {
    var players;
    var actuGame;
    this.players=players;
    var howmanyGame
    this.howmanyGame=-1 // Endless
    var transiTime
    this.transiTime=0; // 0: New game initialization ; 1:  transition display ;  2 : Game display
    this.gameList = new GameList ();
    this.actuGame=this.gameList.chooseNextGame(this.players) // Choose a random game at start
    var transi // Variable for transition
    var scoreDisplay
    this.scoreDisplay = new ScoreDisplay()
  }

  keyGestion(){ // Active the key management for the current game
    this.actuGame.keyGestion()
  }
  show(){
    if(this.transiTime == 0){ // Init a new transition and a new game choose randomly
       this.transi = new Transition()
      this.actuGame=this.gameList.chooseNextGame(this.players)
      this.transiTime=1
    }else if (this.transiTime == 1) { // Show the transisition panel
        this.transi.show()
        if (this.transi.isFinish()) {
          this.transiTime=2}
      }else if (this.transiTime == 2){ // Show the game
      this.actuGame.show()
      if (this.actuGame.getIsFinish()) { // When the game is is fisish compute the score and loop back
        this.ScoreActu(this.actuGame.getTabWinner(),this.actuGame.getType())
        this.transiTime=0
      }
    }
    this.scoreDisplay.show(this.players) // Display the score everytime
  }

  ScoreActu(tabWinner,typeOfgame){
    // If the game have a classement the winner get max point the secont max point -10 ect...
    if(typeOfgame == "Classement"){
      for (var i = 0; i < this.players.length; i++) {
        this.players[i].incScore(this.players.length-(tabWinner[i]-1)*10)
      }
    }
    // If the game have only winner or looser every winner split the max point
    if(typeOfgame == "Winner"){
      var total = this.players.length*(((this.players.length-1)*10)/2)// Max point
      var nbWinners=0;
      for (var i = 0; i < this.players.length; i++) {
      if (tabWinner[i]==1){ // Get number of winner
        nbWinners++
      }

      }
        print("Jeu fini" + tabWinner)
      for (var i = 0; i < this.players.length; i++) {
        if (tabWinner[i]==1) {
            print("J"+this.players[i].getNum()+" get "+ total/nbWinners)
            this.players[i].incScore(total/nbWinners)
        }
      }
    }
  }

}
