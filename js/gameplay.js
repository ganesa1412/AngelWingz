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
    this.load.image('background', 'assets/images/gameplay/background.jpg');
    this.load.image('vs', 'assets/images/gameplay/vs.png');
    this.load.image('btn_back', 'assets/images/stage_select/btn_back.png');
    this.load.image('selchar_emak', 'assets/images/gameplay/selchar_emak.png');
    this.load.image('selchar_sma', 'assets/images/gameplay/selchar_sma.png');
    this.load.image('selchar_petani', 'assets/images/gameplay/selchar_petani.png');
    this.load.image('selchar_pakraden', 'assets/images/gameplay/selchar_pakraden.png');
    this.load.image('selchar_ahok', 'assets/images/gameplay/selchar_ahok.png');
    this.load.spritesheet('emak', 'assets/images/gameplay/char_emak.png', 200, 225, 3);
    this.load.spritesheet('alien', 'assets/images/gameplay/alien.png', 200, 225, 3);
    this.load.image('candi', 'assets/images/gameplay/candi.png');
    this.load.image('ufo', 'assets/images/gameplay/ufo.png');
  },

  //executed once after everything is loaded

  create: function() {
    //create a sprite for the background
    this.background = this.game.add.sprite(0, 0, 'background');
    
    back = game.add.button(590, 15, 'btn_back',function() {  window.location.href = "index.html"; }, this);
    back.scale.setTo(0.3, 0.3);

    var emak_count = 0;
    var emak = new Array();
    var emak_life = new Array();
    sel_emak = game.add.button(100, 275, 'selchar_emak', function(){
        emak_count++;
        // emak_text = game.add.text(0, 325, emak_count);

        if (emak_count <= 4) {
          emaks = game.add.physicsGroup();
          emak_life[emak_count] = 100;
          emak[emak_count] = emaks.create(50, 167, 'emak');
          emak[emak_count].scale.setTo(0.45, 0.45);
          emak[emak_count].body.velocity.x = 10;
          var emak_walk = emak[emak_count].animations.add('emak_walk', [0,1]);
          var emak_attack = emak[emak_count].animations.add('emak_attack', [1,2]);

          emak[emak_count].animations.play('emak_walk', 6, true);
        }
        
    }, this);
    sel_emak.scale.setTo(0.2, 0.2);

    sel_petani = game.add.button(190, 275, 'selchar_petani',function() {  /*add_emak();*/ }, this);
    sel_petani.scale.setTo(0.2, 0.2);

    sel_sma = game.add.button(280, 275, 'selchar_sma',function() {  /*add_emak();*/ }, this);
    sel_sma.scale.setTo(0.2, 0.2);

    sel_pakraden = game.add.button(370, 275, 'selchar_pakraden',function() {  /*add_emak();*/ }, this);
    sel_pakraden.scale.setTo(0.2, 0.2);

    sel_ahok = game.add.button(460, 275, 'selchar_ahok',function() {  /*add_emak();*/ }, this);
    sel_ahok.scale.setTo(0.2, 0.2);         

    candi = game.add.sprite(0, 118, 'candi');
    candi.scale.setTo(0.5, 0.5);
    candi_life = 250;

    ufo = game.add.sprite(540, 148, 'ufo');
    ufo.scale.setTo(0.4, 0.4);
    ufo_life = 250;

    this.candibar = new HealthBar(this.game, {width: 200, height: 25, x: 195, y: 35, bg:{color: '#ecf1f0'}, bar:{color: '#00a2e9'}});
    this.alienbar = new HealthBar(this.game, {width: 200, height: 25, x: 430, y: 35, bg:{color: '#ecf1f0'}, bar:{color: '#e62928'}});
    vs = game.add.sprite(290, 10, 'vs');
    vs.scale.setTo(0.7,0.7);


    var alien_count = 0;
    var alien = new Array();
    var alien_life = new Array();


    for (var i = 1; i <= 6; i++) {
      alien_count++;
      aliens = game.add.physicsGroup();
      alien_life[alien_count] = 100;
      var ii;
      if (i >= 2){
        var iii = i * 0.2;
        ii = 0.55 * i + iii;
      }else{
        ii = i;
      }
      alien[alien_count] = aliens.create(500 * ii, 167, 'alien');
      alien[alien_count].scale.setTo(0.45, 0.45);
      alien[alien_count].body.velocity.x = -10;    

      var alien_walk = alien[alien_count].animations.add('alien_walk', [0,1]);

      alien[alien_count].animations.play('alien_walk', 6, true);
    }
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