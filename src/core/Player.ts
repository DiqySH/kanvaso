import { Keyboard } from "../input";

export class Player {
  // Player pos
  private x: number = 0;
  private y: number = 0;

  // Player size
  private dw: number;
  private dh: number;

  // Player image
  private image!: HTMLImageElement;

  // Player input
  public keyboard!: Keyboard;

  // Canvas context
  public ctx!: CanvasRenderingContext2D;

  // Jump vars
  private isJumping = false;
  private velocityY = 0;
  private gravity = 0.2;
  private jumpForce = 8;
  private groundY!: number;

  private ready = false;

  // Player constructor
  constructor(imageURL: string, dw: number, dh: number) {
    this.dw = dw;
    this.dh = dh;

    const img = new Image();
    img.src = imageURL;
    img.onload = () => {
      this.image = img;
      this.ready = true;
    };
  }

  // Init vars
  init() {
    this.groundY = this.ctx.canvas.height - this.dh;
    this.y = this.groundY;
  }

  isReady() {
    return this.ready;
  }

  // Update input
  update() {
    if (this.keyboard.isDown("KeyA") && this.x > 0) this.x--;
    if (
      this.keyboard.isDown("KeyD") &&
      this.x < this.ctx.canvas.width - this.dw
    )
      this.x++;
    if (this.keyboard.isDown("Space") && !this.isJumping) {
      this.velocityY = -this.jumpForce;
      this.isJumping = true;
    }

    this.velocityY += this.gravity;
    this.y += this.velocityY;

    if (this.y >= this.groundY) {
      this.y = this.groundY;
      this.velocityY = 0;
      this.isJumping = false;
    }
  }

  // Player render
  render() {
    const ctx = this.ctx;
    ctx.drawImage(this.image, this.x, this.y, this.dw, this.dh);
  }
}
