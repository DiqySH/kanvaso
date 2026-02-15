import { Input } from "./Input";

export class Examp {
  private x = 0;
  private y = 0;
  private width = 100;
  private height = 100;
  private input: Input;

  constructor(input: Input) {
    this.input = input;
  }

  private isDown(code: string) {
    return this.input.isDown(code);
  }

  update() {
    if (!this.input) return;
    if (this.isDown("KeyA")) this.x--;
    if (this.isDown("KeyW")) this.y--;
    if (this.isDown("KeyS")) this.y++;
    if (this.isDown("KeyD")) this.x++;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
