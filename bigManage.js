class BigManage {
  constructor() {
      let state;
      this.state ='menu'; //Variable to set in wich panel we are begin with menu
      let menu;
      this.menu = new Menu(); //Creation with the main menu
      let selection;
      let gameManagement;
  }
  show(){
      if(this.state==='menu'){ // If we are in menu display it
        this.menu.show();
        if(this.menu.isPlayPressed()){
          this.selection = new Selection(this.menu.getNBplayer());
          this.state='selection'; // If we pres play menu change to selection panel
          this.menu.setPlayPressed(false);
        }
      }else if (this.state ==='selection'){

        this.selection.show();
        if(this.selection.getbackpressed()){ //If we press back it's possible to go back to menu panel
          this.state='menu'
          this.selection.setBackpressed(false);
        }
        if (this.selection.getStartPressed()) {
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
  }
 mouseManagement(){
     if(this.state=== 'menu') // Set the menu mouse management on if we are in menu
     this.menu.clickGestion();

     if(this.state === 'selection'){ // Same for the panel selection

       this.selection.clickGestion();
     }
 }
}
