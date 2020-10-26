//Class use in selection menu to setuo key and color for player
class PlayerSelection extends Player{

  constructor(num) {
      super(num)
    var palette;
    var numberColor;
    this.numberColor=0;
    this.palette=[];
    this.palette.push(color(97,205,43));
    this.palette.push(color(192,22,22));
    this.palette.push(color(37,103,219));
    this.palette.push(color(147,92,243));
    this.palette.push(color(206,21,235));
    this.palette.push(color(11,80,13));
    this.palette.push(color(229,183,136));
    this.palette.push(color(102,85,15));

  }

  leftKeyPressed(){
    this.chancolor(-1);
  }
  rightKeyPressed(){
      this.chancolor(+1);
  }

  chancolor(n){
    var b;
    b=this.numberColor+n;
    if(b==-1){
      b=this.palette.length-1;
    }
    if(b==this.palette.length){
      b=0;
    }
    this.setColor(this.palette[b]);
    this.numberColor=b;
  }
}
