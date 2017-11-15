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
    this.load.image('background', 'assets/images/stage_select/background.jpg');
    this.load.image('background2', 'assets/images/stage_select/background2.jpg');
    this.load.image('btn_play', 'assets/images/main_menu/btn_play.png');
    this.load.image('btn_back', 'assets/images/stage_select/btn_back.png');
    this.load.image('aleft', 'assets/images/stage_select/aleft.png');
    this.load.image('aright', 'assets/images/stage_select/aright.png');
  },

  //executed once after everything is loaded
  create: function() {
    //create a sprite for the background
    this.background = this.game.add.sprite(0, 0, 'background');
    play = game.add.button(470, 275, 'btn_play',function() {  window.location.href = "gameplay.html"; }, this);
    play.scale.setTo(0.05, 0.05);
    
    back = game.add.button(25, 10, 'btn_back',function() {  window.location.href = "index.html"; }, this);
    back.scale.setTo(0.5, 0.5);

    aleft = game.add.button(35, 170, 'aleft',function() {  this.background.loadTexture('background'); play.alpha = 1; aleft.alpha = 0; aright.alpha = 1; }, this);
    aleft.alpha = 0;
    // aleft.scale.setTo(0.2, 0.2);

    aright = game.add.button(585, 170, 'aright',function() {  this.background.loadTexture('background2'); play.alpha = 0; aleft.alpha = 1; aright.alpha = 0; }, this);
    // aright.scale.setTo(0.2, 0.2);



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