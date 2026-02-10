import React from "react";
import { usePen } from "./usePen";

export function PenCanvas(
  props: React.CanvasHTMLAttributes<HTMLCanvasElement>,
) {
  const { canvasRef } = usePen();

  return <canvas ref={canvasRef} {...props} />;
}
