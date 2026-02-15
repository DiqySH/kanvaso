export class Input {
  private keys: Set<string> = new Set();

  private keyDown(ev: KeyboardEvent) {
    this.keys.add(ev.code);
    console.log(this.keys);
  }

  private keyUp(ev: KeyboardEvent) {
    this.keys.delete(ev.code);
    console.log(this.keys);
  }

  init() {
    window.addEventListener("keydown", (ev) => this.keyDown(ev));
    window.addEventListener("keyup", (ev) => this.keyUp(ev));
  }

  destroy() {
    window.removeEventListener("keydown", (ev) => this.keyDown(ev));
    window.removeEventListener("keyup", (ev) => this.keyUp(ev));
  }

  isDown(code: string): boolean {
    return this.keys.has(code);
  }
}
