export default function drawBackground(k) {
    k.loadSprite("background", "/assets/background.png");
  
    k.add([
      k.sprite("background"),
      k.pos(0, -100),
      k.scale(0.5),
    ]);
  }
  