import { Examp } from "./Examp";
import { Input } from "./Input";
import { GameCanvasConfig } from "./types";

export class GameCanvas {
  private ctx: CanvasRenderingContext2D;
  private animationId?: number;
  public objects: Set<Examp> = new Set();
  public isPaused = true;

  constructor(ctx: CanvasRenderingContext2D, config: GameCanvasConfig) {
    this.ctx = ctx;
  }

  private loop = () => {
    if (this.isPaused) return;

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.objects.forEach((o) => {
      o.update();
      o.render(this.ctx);
    });

    this.animationId = requestAnimationFrame(this.loop);
  };

  start() {
    if (!this.isPaused) return;
    this.isPaused = false;
    this.animationId = requestAnimationFrame(this.loop);
  }

  pause() {
    if (this.isPaused) return;
    this.isPaused = true;
    if (this.animationId) cancelAnimationFrame(this.animationId);
  }

  restart() {
    this.pause();
    this.start();
  }
}
