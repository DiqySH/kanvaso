import { PenCanvas } from "../../../../src/pen-react";

export default function PenCanvasReact() {
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <PenCanvas width={500} height={500} className="border" />
    </div>
  );
}
