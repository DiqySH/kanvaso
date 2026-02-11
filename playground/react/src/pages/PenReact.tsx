import { usePen } from "../../../../src/pen-react";

export default function PenReact() {
  const { canvasRef } = usePen();
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <canvas ref={canvasRef} width={500} height={500} className="border" />
    </div>
  );
}
