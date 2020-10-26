class Config {
  constructor(x,y,color,numPlayer) {
    this.x=x;
    this.y=y;
    this.numPlayer=numPlayer+1;
    var backB;
		this.leftB= new ButtonG(300+x,y+20,50,50,'img/left.png','img/leftH.png','img/left.png');
    var backB;
		this.rightB= new ButtonG(380+x,y+20,50,50,'img/right.png','img/rightH.png','img/right.png');

    var color;
    this.color=color;
  }
  getX(){return this.x;}
  getY(){return this.y;}

  show(l,r,c){

    fill(color(180,180,180));
    rect(this.x,this.y,500,80);
    fill(this.color);
    text('J'+this.numPlayer, this.x+10, this.y+60);
    fill(c);
    rect(this.x+100,this.y+20,50,50);
    fill(color(100,100,100));
    color(100,100,100)
    this.leftB.show();
    this.rightB.show();
    text(l, this.x+270,this.y+30);
    text(r, this.x+440,this.y+30);
  }
  selected(side){


      noFill(color(50, 55, 100));
      if(side==='L')
        rect(300+this.x,this.y+20,50,50);
      if(side==='R')
        rect(380+this.x,this.y+20,50,50);
  }
}
