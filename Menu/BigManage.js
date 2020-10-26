// Class who manage the different section between menu and the game and settings
class BigManage {
  constructor() {
      let state;
      this.state ='menu'; //Variable to set in wich panel we are begin with menu
      let menu;
      this.menu = new Menu(); //Creation with the main menu
      let selection;
      let gameManagement;
  }
  // Loop of display
  show(){
      if(this.state==='menu'){ // If we are in menu state display the menu
        this.menu.show();
        if(this.menu.isPlayPressed()){ // If the signal of playbutton pressed is on
          this.selection = new Selection(this.menu.getNBplayer()); // Create a new key selection menu
          this.state='selection'; // If we pres play menu change to selection panel
          this.menu.setPlayPressed(false); //
        }
      }else if (this.state ==='selection'){

        this.selection.show();
        if(this.selection.getbackpressed()){ //If we press back it's possible to go back to menu panel
          this.state='menu'
          this.selection.setBackpressed(false);
        }
        if (this.selection.getStartPressed()) { // If we click on start laucnh games
          this.state='Games'
          this.gameManagement = new GameManagement(this.selection.getPlayers())
        }
      }else if (this.state === 'Games'){
        this.gameManagement.show();
      }
  }
  keyGestion() {
    if(this.state === 'selection'){
         this.selection.keyGestion();
    }
    if(this.state === 'Games'){

      this.gameManagement.keyGestion();
    }
  }
 mouseManagement(){
     if(this.state=== 'menu') // Set the menu mouse management on if we are in menu
     this.menu.clickGestion();

     if(this.state === 'selection'){ // Same for the panel selection

       this.selection.clickGestion();
     }
 }
}
