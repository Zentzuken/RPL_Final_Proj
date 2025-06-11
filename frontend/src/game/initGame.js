import initKaplay from "./kaplayCtx";
import drawBackground from "./draw";
import createPlayer from "./player";

export default function initGame() {
  const k = initKaplay();

  drawBackground(k);
  createPlayer(k);
}
