// Class player have to be use in game differents game. The player have a unique number to identify them, a color and to key (left and right).
class Player {
  constructor(numPlayer) {
    var numPlayer;
    this.numPlayer=numPlayer;
    var leftKey;
    this.leftKey=""
    var rightKey;
    this.right=""
    var colorm;
    this.colorm=color(0,0,0);
    var score;
    this.score=0
  }
  setLeftKey(leftKey){this.leftKey=leftKey;}
  getLeftKey(){return this.leftKey;}

  setRightKey(rightKey){this.rightKey=rightKey;}
  getRightKey(){return this.rightKey;}

  setColor(colorm){this.colorm=colorm;}
  getColor(){return this.colorm;}

  setScore(score){this.score=score;}
  incScore(more){this.score=this.score+more;}
  getScore(){return this.score;}


  getNum(){return this.numPlayer;}

  rightPressed(){
    print("R"+this.numPlayer)
  }

  leftPressed(){
    print("L"+this.numPlayer)
  }
}
