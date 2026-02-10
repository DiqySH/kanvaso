export class Keyboard {
  public keys: Set<string> = new Set<string>();

  init() {
    window.addEventListener("keydown", this.keyDown);
    window.addEventListener("keyup", this.keyUp);
  }

  destroy() {
    this.keys.clear();
    window.removeEventListener("keydown", this.keyDown);
    window.removeEventListener("keyup", this.keyUp);
  }

  isDown(code: string): boolean {
    return this.keys.has(code);
  }

  private keyDown = (e: KeyboardEvent) => {
    this.keys.add(e.code);
  };

  private keyUp = (e: KeyboardEvent) => {
    this.keys.delete(e.code);
  };
}
