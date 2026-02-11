import { useEffect } from "react";
import { Pen } from "../../../../dist/pen";

export default function PenVanilla() {
  useEffect(() => {
    const canvasRef = document.querySelector<HTMLCanvasElement>("#canvas");
    if (!canvasRef) return;

    const ctxRef = canvasRef.getContext("2d");
    if (!ctxRef) return;

    const pen = new Pen(ctxRef);

    canvasRef.addEventListener("pointerdown", (e) => {
      canvasRef.setPointerCapture(e.pointerId);
      pen.down(e.offsetX, e.offsetY);
    });

    canvasRef.addEventListener("pointermove", (e) => {
      pen.move(e.offsetX, e.offsetY);
    });

    canvasRef.addEventListener("pointerup", () => {
      pen.up();
    });

    return () => {
      canvasRef.removeEventListener("pointerdown", (e) => {
        canvasRef.setPointerCapture(e.pointerId);
        pen.down(e.offsetX, e.offsetY);
      });

      canvasRef.removeEventListener("pointermove", (e) => {
        pen.move(e.offsetX, e.offsetY);
      });

      canvasRef.removeEventListener("pointerup", () => {
        pen.up();
      });
    };
  }, []);
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <canvas width={500} height={500} className="border" id="canvas" />
    </div>
  );
}
