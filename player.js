// Class player have to be use in game differents game. The player have a unique number to identify them, a color and to key (left and right).

class Player {
  constructor(numPlayer) {
    var numPlayer;
    this.numPlayer=numPlayer;
    var leftKey;
    var rightKey;
    var colorm;
    this.colorm=color(0,0,0);
  }
  setLeftKey(leftKey){this.leftKey=leftKey;}
  getLeftKey(){return this.leftKey;}

  setRightKey(rightKey){this.rightKey=rightKey;}
  getRightKey(){return this.rightKey;}

  setColor(colorm){this.colorm=colorm;}
  getColor(){return this.colorm;}

  getNum(){return this.numPlayer;}
  leftKeyPressed(){

  }
  rightKeyPressed(){

  }

}
