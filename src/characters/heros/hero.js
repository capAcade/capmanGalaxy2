import Phaser from 'phaser';
export default class Hero extends Phaser.GameObjects.Sprite {
  constructor(config) {
      super(config.scene, config.x, config.y, config.sprite);
      this._scene = config.scene;
      config.scene.physics.world.enable(this);
      this.body.setCollideWorldBounds(true);
      config.scene.add.existing(this);
      this.scale = 0.3;
      this.id = config.id;
  }
  movePlayer() {
    this.body.velocity.setTo(0, 0);
    if (this._scene.keys[`${this.id}Left`].isDown) {
      this.body.velocity.x = -300;
    }
    else if (this._scene.keys[`${this.id}Right`].isDown) {
        this.body.velocity.x = 300;
    }
  }
  update() {
    this.movePlayer();
  }
}