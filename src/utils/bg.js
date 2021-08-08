import Phaser from 'phaser';
export default class BG extends Phaser.GameObjects.TileSprite {
  constructor(config) {
      super(config.scene, 0, 0, 800, 600, config.image);
      this._scene = config.scene;
      this.speed = config.speed


      config.scene.add.existing(this);
      this.setOrigin(0,0);

  }

  update() {
    this.tilePositionY -= this.speed;
  }
}