class Selection {
  constructor(nbplayer) {

    var nbplayer;
    this.nbplayer=nbplayer;
    var backpressed;//Boolean to know if back is pressed and go back to the main menu
    var backB; // Back button variable
    var configs; //Class of several button to config the key for the player
    var players;
    var side;  // Variable use to know wich key button is pressed ex: For j2 leftKey : side='L' and number=2
    var number; // Number of the player pressed to config is key
    var startB; // Start button variable
    var startPressed; // Start button signal
    this.startPressed=false
    this.number=-1;
    this.side='-1';
    this.backpressed=false;
		this.backB= new ButtonG(20,500,50,50,'img/back.png','img/backH.png','img/back.png');
    this.startB= new ButtonG(980,600,100,200,'img/start.png','img/startH.png','img/start.png')
    this.configs=[];
    this.players=[];

    for (var i = 0; i < this.nbplayer; i++) {
      this.players.push(new PlayerSelection(i)); //Create array of player to set their keys
    }

    for (var i = 0; i < this.nbplayer; i++) {
      if(i<4){
        this.configs.push(new Config(100,200+100*i,color(100,100,100),i))
      }
      else{
        this.configs.push(new Config(700,200+100*(i-4),color(100,100,100),i)) //Creation of all menu of key selection for every players
      }
    }


  }

  getbackpressed(){return this.backpressed;}
  setBackpressed(backpressed){this.backpressed= backpressed;}

  getStartPressed(){return this.startPressed;}

  setNBplayer(nbplayer){this.nbplayer=nbplayer;}

  getPlayers(){return this.players;}

  keyGestion(){

    for (var i = 0; i < this.players.length; i++) { //Set active the listerner for the player to active Keypreesed() in class player
      if(key === this.players[i].getLeftKey()){
        this.players[i].leftKeyPressed();
      }
      if(key === this.players[i].getRightKey()){
        this.players[i].rightKeyPressed();
      }
    }
    if(this.number!==-1 && this.testKeyAlreadyUse(key)){ // Wait for a key to config when a config key button is pressed

      for (var i = 0; i < this.players.length; i++) {
        if(this.side=='L')
         this.players[this.number].setLeftKey(key);
        if(this.side=='R')
          this.players[this.number].setRightKey(key);
      }
      this.number=-1;
      this.side='-1';
    }
  }

  testKeyAlreadyUse(keyTouch){
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].getLeftKey() == keyTouch || this.players[i].getRightKey() == keyTouch) {
        print("This key is already use")
        return false
      }
    }
    return true
  }

  clickGestion(){ // If the mousse is pressed test the position and know if it was on a button.
    if(this.side != 'R' && this.side !='L' ){
      // Loop in all button to check if the mouse is on one when is pressed
      for (var i = 0; i < this.configs.length; i++) {
        if(this.configs[i].leftB.mousseOn()){
          this.number=i;
          this.side='L';
        }
        if(this.configs[i].rightB.mousseOn()){        //Catch wich key button (left or right) for wich player is press and go to wait for key press mode
          this.number=i;
          this.side='R';
        }
      }
    }
    if(this.backB.mousseOn()){
      this.backpressed=true;
    }

    if(this.startB.mousseOn() && this.testStartEnable()){
      this.startPressed=true;
    }
  }
  // Test if every player have complete there configuration
  testStartEnable(){
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].getLeftKey() == "" || this.players[i].getRightKey() == "") {
        print("All players key aren't config ")
        return false
      }
    }
    return true
  }


  show(){
      for (var i = 0; i < this.configs.length; i++) { //Show all selection menu
        this.configs[i].show(this.players[i].getLeftKey(),this.players[i].getRightKey(),this.players[i].getColor());
        if(this.number==i){
          this.configs[i].selected(this.side);
        }
      }

      this.backB.show(); // Back button
      this.startB.show();
    	text(this.nbplayer+' Players', 100, 100);
  }
}
