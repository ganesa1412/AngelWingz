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
    this.load.image('background', 'assets/images/main_menu/background.jpg');
    this.load.image('btn_play', 'assets/images/main_menu/btn_play.png');
    this.load.image('btn_exit', 'assets/images/main_menu/btn_exit.png');
    this.load.image('btn_about', 'assets/images/main_menu/btn_about.png');
    this.load.image('alien_menu', 'assets/images/main_menu/alien_menu.png');
  },

  //executed once after everything is loaded
  create: function() {
    //create a sprite for the background
    this.background = this.game.add.sprite(0, 0, 'background');

    play = game.add.button(400, 125, 'btn_play',function() {  window.location.href = "select_stage.html"; }, this);
    play.scale.setTo(0.104, 0.104);
    about = game.add.button(400, 215, 'btn_about',function() {  window.location.href = "about.html"; }, this);
    about.scale.setTo(0.1, 0.1);
    option = game.add.button(495, 215, 'btn_exit',function(){ navigator.app.exitApp(); }, this);
    option.scale.setTo(0.1, 0.1);
    
    alien = game.add.sprite(10, 160, 'alien_menu');
    alien.scale.setTo(0.28, 0.28);
    alien.alpha = 0;
    game.add.tween(alien).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None, true, 0, 0, false);

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