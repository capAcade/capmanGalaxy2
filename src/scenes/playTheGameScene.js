import Phaser from 'phaser';
import getKeys from '@capacade/arcadekeymap';
import Hero from '../characters/heros/hero';
import Add from '../characters/baddies/add'
import gameConfig from '../gameConfig.json';

import BG from '../utils/bg';
import heroImg from '../assets/img/characters/heros/Jet-top.svg';
import bgOne from '../assets/img/utils/bg/starfield.png';
import bgTwo from '../assets/img/utils/bg/starfield2.png';
import bgThree from '../assets/img/utils/bg/starfield3.png';
import eyeUfo from '../assets/img/characters/baddies/bug1.svg';



export default class playTheGame extends Phaser.Scene {
  constructor() {
    super('playTheGame');
  }

  preload() {
   // this.load.image('bg', bg);
    this.load.image('heroImg', heroImg);
    this.load.image('bgOne', bgOne);
    this.load.image('bgTwo', bgTwo);
    this.load.image('bgThree', bgThree);
    this.load.image('eyeUfo', eyeUfo);
  }
  create() {
    this.gameConfig = gameConfig.gameConfig;
    this.keys = this.input.keyboard.addKeys(getKeys());
    this.bgOne= new BG({
      scene: this,
      x:0,
      y:0,
      image: 'bgOne',
      speed: 0.5
    });
    this.bgTwo= new BG({
      scene: this,
      x:0,
      y:0,
      image: 'bgTwo',
      speed: 0.7
    });
    this.bgThree= new BG({
      scene: this,
      x:0,
      y:0,
      image: 'bgThree',
      speed: 15
    });
    this.playerOne = new Hero({
      scene: this,
      x: 400,
      y: 550,
      sprite: 'heroImg',
      id: 'p1'
    });

    this.heroGroup = new Phaser.Physics.Arcade.Group(
      this.physics.world,
      this,
      [this.playerOne]
    );

    this.adds = new Phaser.Physics.Arcade.Group(
      this.physics.world,
      this,
      this.spawnNewEnemys(this.gameConfig.waves[0])
    );
    
  }

  update() {
    this.playerOne.update();
    this.bgOne.update();
    this.bgTwo.update();
    this.bgThree.update();
  }

  spawnNewEnemys (config) {
    let enemys = [];
    let spawnList = Array.from(config.spawnOrder);
    let currentPosition = {
        x: config.startingPosition.x,
        y: config.startingPosition.y
    };
    spawnList.forEach( (character) => {
        if(character === '0'){
            currentPosition.x = currentPosition.x + config.spacer.x;
        } else if (character === '#'){
            currentPosition.y = currentPosition.y + config.spacer.y;
            currentPosition.x = config.startingPosition.x;
        } else if (character === '1'){
            enemys.push(new Add({
              scene: this,
              x: currentPosition.x,
              y: currentPosition.y,
              image: config.texture,
              ...config
            }))
            currentPosition.x = currentPosition.x + config.spacer.x;
        }
    });
    
    return enemys;
  }
}
