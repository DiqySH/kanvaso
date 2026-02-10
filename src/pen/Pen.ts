export class Pen {
  private ctx: CanvasRenderingContext2D;
  private drawing: boolean = false;
  private enabled: boolean = true;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  setEnabled(value: boolean) {
    this.enabled = value;
  }

  down(x: number, y: number) {
    if (!this.enabled) return;
    this.drawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }

  move(x: number, y: number) {
    if (!this.enabled || !this.drawing) return;
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  up() {
    this.drawing = false;
    this.ctx.closePath();
  }
}
