//this game will have only 1 state
var GameState = {
  //initiate game settings
  init: function() {
    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    
  },

  //load the game assets before the game starts
  preload: function() {
    // MAIN MENU SPRITES
    this.load.image('background', 'assets/images/about/background.jpg');
    this.load.image('btn_back', 'assets/images/stage_select/btn_back.png');
  },

  //executed once after everything is loaded
  create: function() {
    //create a sprite for the background
    this.background = this.game.add.sprite(0, 0, 'background');
    
    back = game.add.button(25, 10, 'btn_back',function() {  window.location.href = "index.html"; }, this);
    back.scale.setTo(0.5, 0.5);

  },

  //this is executed multiple times per second
  update: function() {    
  },

};

//initiate the Phaser framework
var game = new Phaser.Game(640, 360, Phaser.AUTO);

//add the state to the game object
game.state.add('GameState', GameState);

//launch the state
game.state.start('GameState');