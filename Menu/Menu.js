class Menu{
	constructor(){
		var playPressed;
		this.playPressed = false;
		let nbplayer;
		this.nbplayer=2;
		var lessB;
		this.lessB= new ButtonG(450,400,110,100,'img/less.png','img/lessH.png','img/lessC.png');
		var moreB ;
		this.moreB= new ButtonG(450,250,110,100,'img/more.png','img/moreH.png','img/moreC.png');
		var playB;
		this.playB= new ButtonG(100,300,110,200,'img/play.png','img/playH.png','img/playC.png');


	}

	getNBplayer(){
		return this.nbplayer;
	}

	clickGestion(){
		if(this.moreB.mousseOn()){
			this.nbplayer=this.nbplayer>7?8:this.nbplayer+1; // Max of player is 8
			this.moreB.setState('clicked');
		}
		if(this.lessB.mousseOn()){
			this.nbplayer=this.nbplayer<3?2:this.nbplayer-1; // Min of player is 2
			this.lessB.setState('clicked');
		}
		if(this.playB.mousseOn()){
			this.playPressed=true;
		}
	}
	isPlayPressed(){
		return this.playPressed;
	}
	setPlayPressed(playPressed){
		this.playPressed=playPressed;
	}

	show (){
		
		this.moreB.show();
		this.lessB.show();
		this.playB.show();
		 textSize(30);
		text( this.nbplayer+' Players', 450, 400);
	}
}
