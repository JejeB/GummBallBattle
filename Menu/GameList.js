//These class return a game randomly in the list of games available
class GameList {
  constructor() {

  }

  chooseNextGame(players){
    var numberOfGame = 2
    switch (int(random(0,numberOfGame))) {
      case 0:
          var playerGame
          playerGame=[]
          for (var i = 0; i < players.length; i++) { // Need to copy the data of every player
            playerGame.push(new FirstGamePlayer(i,players[i]))
          }
          return new FirstGame(playerGame)
        break;
        case 1:
            var playerGame
            playerGame=[]
            for (var i = 0; i < players.length; i++) { // Need to copy the data of every player
              playerGame.push(new ModelPlayer(i,players[i]))
            }
            return new ModelGame(playerGame)
          break;
      default:

    }
  }
}
