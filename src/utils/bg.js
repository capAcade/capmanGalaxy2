import Phaser from 'phaser';
export default class BG extends Phaser.GameObjects.TileSprite {
  constructor(config) {
      super(config.scene, 0, 0, config.scene.sys.game.canvas.width, config.scene.sys.game.canvas.height, config.image);
      console.log(config.scene.sys.game.canvas.width)
      this._scene = config.scene;
      this.speed = config.speed


      config.scene.add.existing(this);
      this.setOrigin(0,0);

  }

  update() {
    this.tilePositionY -= this.speed;
  }
}