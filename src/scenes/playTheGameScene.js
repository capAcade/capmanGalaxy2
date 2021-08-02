import Phaser from 'phaser';
import getKeys from '@capacade/arcadekeymap';
import Hero from '../characters/heros/hero';
import heroImg from '../assets/img/characters/heros/Jet-top.svg'


export default class playTheGame extends Phaser.Scene {
  constructor() {
    super('playTheGame');
  }

  preload() {
   // this.load.image('bg', bg);
    this.load.image('heroImg', heroImg);
  }

  create() {
    this.keys = this.input.keyboard.addKeys(getKeys());
    this.playerOne = new Hero({
      scene: this,
      x: 400,
      y: 700,
      sprite: 'heroImg',
      id: 'p1'
    });
  }

  update() {
    this.playerOne.update();
  }
}
