import "./style.css";
import { Engine } from "../../../src/core";
import { Player } from "../../../src/core";

const app = document.querySelector<HTMLDivElement>("#app")!;

const container = document.createElement("div");
container.style.width = "100vw";
container.style.height = "100vh";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.gap = "1rem";
container.style.placeItems = "center";

app.appendChild(container);

const containerRect = container.getBoundingClientRect();

const canvas = document.createElement("canvas");
canvas.width = containerRect.width;
canvas.height = containerRect.height;
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.border = "1px black solid";

container.appendChild(canvas);

const player1 = new Player(
  "https://www.vg.no/vgc/spesial/2025/berikelser-tom/assets/images/epstein/epstein.png",
  100,
  100,
);

const player2 = new Player(
  "https://www.vg.no/vgc/spesial/2025/berikelser-tom/assets/images/epstein/epstein.png",
  100,
  100,
);

const engine = new Engine(canvas);
engine.insertPlayer(player1);
engine.start();
setTimeout(() => {
  engine.insertPlayer(player2);
}, 1000);
