// A Button have xPosition yPosition a rectangle hitbox width*height, imageN image to be classique display, hoover image when the mouse in on
//the button and cliked when the button is pressed
class ButtonG{
	constructor(x,y,height,width,imageN,hooverN,clickN){
		var height;
		var width;
		this.height=height;
		this.width=width;
		var x;
		var y;
		this.x=x;
		this.y=y;
		let image;
		let hoover;
		let click;
		var state;
		this.image =loadImage(imageN);
		this.hoover =loadImage(hooverN);
		this.click =loadImage(clickN);
	}
	setState(state){
		this.state=state;
	}
	mousseOn(){
		if(mouseX>this.x && mouseX<this.x+this.width && mouseY>this.y && mouseY<this.height+this.y){
			this.state='hoover';
			return true;
		}else{
			this.state=''
			return false;
		}
	}
	show (){
		this.mousseOn();
		if(this.state==='hoover'){
			image(this.hoover, this.x,this.y);
		}else if(this.state==='clicked'){
			image(this.click, this.x,this.y);
		}else{
			image(this.image, this.x,this.y);
		}
	}
}
