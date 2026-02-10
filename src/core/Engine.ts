import { Keyboard } from "../input";
import { Player } from "../core";

export class Engine {
  private ctx: CanvasRenderingContext2D;
  private keyboard: Keyboard;
  private running: boolean = false;
  private Players: Player[] = [];

  constructor(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    this.keyboard = new Keyboard();
    if (!ctx) {
      throw new Error("Canvas 2D context not supported");
    }
    this.ctx = ctx;
  }

  public insertPlayer(player: Player) {
    this.Players.push(player);
    this.Players[this.Players.length - 1].ctx = this.ctx;
    this.Players[this.Players.length - 1].keyboard = this.keyboard;
    this.Players[this.Players.length - 1].init();
  }

  public start() {
    if (this.running) return;
    this.keyboard.init();
    this.running = true;
    requestAnimationFrame(this.loop);
  }

  public stop() {
    this.keyboard.destroy();
    this.running = false;
  }

  private loop = () => {
    if (!this.running) return;

    this.render();

    this.Players.forEach((player) => {
      if (player.isReady()) {
        player.update();
        player.render();
      }
    });

    requestAnimationFrame(this.loop);
  };

  private render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
}
