class ScoreDisplay {
  constructor() {

  }

  show(players){
    fill(200);
    rect(0,0,184,720)
    for (var i = 0; i < players.length; i++) {
      fill(players[i].getColor());
      rect(15,30+(i*55),35,35)
      fill(0);
      text(players[i].getScore(),70,50+(i*55));
    }
  }
}
