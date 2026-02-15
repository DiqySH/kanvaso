import { Input } from "./Input";

type MotionKeys = {
  up?: string;
  down?: string;
  right?: string;
  left?: string;
};

export class Examp {
  private x = 0;
  private y = 0;
  private width = 100;
  private height = 100;
  private input: Input;
  private motionKeys: MotionKeys = {
    up: "KeyW",
    down: "KeyS",
    right: "KeyD",
    left: "KeyA",
  };

  constructor(input: Input, motionKeys?: MotionKeys) {
    this.input = input;
    this.motionKeys = {
      ...this.motionKeys,
      ...motionKeys,
    };
  }

  private isDown(code: string) {
    return this.input.isDown(code);
  }

  update() {
    if (!this.input) return;
    if (this.isDown(this.motionKeys.left || "KeyA")) this.x--;
    if (this.isDown(this.motionKeys.up || "KeyW")) this.y--;
    if (this.isDown(this.motionKeys.down || "KeyS")) this.y++;
    if (this.isDown(this.motionKeys.right || "KeyD")) this.x++;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
