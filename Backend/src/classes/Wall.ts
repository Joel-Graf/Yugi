class Wall {
  up: boolean;
  right: boolean;
  down: boolean;
  left: boolean;

  constructor(up: boolean, right: boolean, down: boolean, left: boolean) {
    this.up = up;
    this.right = right;
    this.down = down;
    this.left = left;
  }
}

export { Wall };
