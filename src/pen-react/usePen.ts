import { useEffect, useRef } from "react";
import { Pen } from "kanvaso/pen";

export function usePen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const penRef = useRef<Pen>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const pen = new Pen(ctx);
    penRef.current = pen;

    const canvas = canvasRef.current;

    const down = (e: PointerEvent) => {
      canvas.setPointerCapture(e.pointerId);
      pen.down(e.offsetX, e.offsetY);
    };

    const move = (e: PointerEvent) => {
      pen.move(e.offsetX, e.offsetY);
    };

    const up = () => pen.up();

    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);

    return () => {
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
    };
  }, []);

  return { canvasRef, pen: penRef };
}
