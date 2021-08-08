import Phaser from 'phaser';
import getKeys from '@capacade/arcadekeymap';
import Hero from '../characters/heros/hero';
import BG from '../utils/bg';
import heroImg from '../assets/img/characters/heros/Jet-top.svg';
import bgOne from '../assets/img/utils/bg/starfield.png';
import bgTwo from '../assets/img/utils/bg/starfield2.png';
import bgThree from '../assets/img/utils/bg/starfield3.png';


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
  }

  create() {
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
  }

  update() {
    this.playerOne.update();
    this.bgOne.update();
    this.bgTwo.update();
    this.bgThree.update();
  }
}
