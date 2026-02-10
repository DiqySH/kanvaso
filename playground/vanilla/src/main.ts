import "./style.css";
import { Pen } from "../../../src/pen";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.width = "100vw";
app.style.height = "100vh";
app.style.display = "grid";
app.style.placeItems = "center";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d")!;
canvas.width = 500;
canvas.height = 500;
canvas.style.border = "1px black solid";

app.appendChild(canvas);

const pen = new Pen(ctx);

canvas.addEventListener("pointerdown", (e) => {
  canvas.setPointerCapture(e.pointerId);
  pen.down(e.offsetX, e.offsetY);
});

canvas.addEventListener("pointermove", (e) => {
  pen.move(e.offsetX, e.offsetY);
});

canvas.addEventListener("pointerup", () => {
  pen.up();
});
