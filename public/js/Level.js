import Compositor from './Compositor.js'
import {Matrix} from './Math.js';
import TileCollider from './TileCollider.js';

export default class Level {
  constructor() {
    this.comp = new Compositor();
    this.entities = new Set();
    this.tiles = new Matrix();

    this.TileCollider = new TileCollider(this.tile);
  }
  update(deltaTime) {
    this.entities.forEach(entity => {
      entity.update(deltaTime);

      this.TileCollider.test(entity)
    });
  }
}