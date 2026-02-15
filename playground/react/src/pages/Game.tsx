import { useEffect } from "react";
import { GameCanvas, Input } from "../../../../src/game";
import { Examp } from "../../../../src/game/Examp";

export default function Game() {
  useEffect(() => {
    const canvasRef = document.querySelector<HTMLCanvasElement>("#example");
    if (!canvasRef) return;
    const ctx = canvasRef.getContext("2d");
    if (!ctx) return;
    const Engine = new GameCanvas(ctx, {});
    const BoxInput = new Input();
    const Box = new Examp(BoxInput);
    BoxInput.init();
    Engine.objects.add(Box);
    Engine.start();
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <p>tes</p>
      <canvas id="example" width={500} height={500} className="border" />
    </div>
  );
}
