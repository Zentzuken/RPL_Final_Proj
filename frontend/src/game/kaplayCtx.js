import kaplay from "kaplay";

// set up game "window" for pixelart

export default function initKaplay() {
  return kaplay({
    width: 1920,
    height: 1080,
    letterbox: true,
    global: false, // global vars
    debug: true, // set debug
    debugKey: "f", // set debug button
    canvas: document.getElementById("game"),
    pixelDensity: devicePixelRatio,
  });
}
