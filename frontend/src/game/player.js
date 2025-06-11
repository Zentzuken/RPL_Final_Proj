export default function createPlayer(k) {
    const DIAGONAL_FACTOR = 1 / Math.sqrt(2);
  
    k.loadSprite("characters", "/assets/characters.png", {
      sliceY: 3,
      sliceX: 8,
      anims: {
        "right-idle": 0,
        "up-idle": 9,
        "left-idle": 12,
        "down-idle": 18,
        right: { from: 0, to: 5, loop: true },
        up: { from: 6, to: 11, loop: true },
        left: { from: 12, to: 17, loop: true },
        down: { from: 18, to: 22, loop: true },
      },
    });
  
    const player = k.add([
      k.sprite("characters", { anim: "down-idle" }),
      k.area(),
      k.body(),
      k.anchor("center"),
      k.pos(k.center()),
      k.scale(4),
      "player",
      {
        speed: 400,
        direction: k.vec2(0, 0),
      },
    ]);
  
    player.onUpdate(() => {
      player.direction.x = 0;
      player.direction.y = 0;
    
      if (k.isKeyDown("left")) player.direction.x = -1;
      if (k.isKeyDown("right")) player.direction.x = 1;
      if (k.isKeyDown("up")) player.direction.y = -1;
      if (k.isKeyDown("down")) player.direction.y = 1;
    
      const current = player.getCurAnim()?.name || "";
    
      if (player.direction.eq(k.vec2(-1, 0)) && current !== "left") {
        player.play("left");
      }
      if (player.direction.eq(k.vec2(1, 0)) && current !== "right") {
        player.play("right");
      }
      if (player.direction.eq(k.vec2(0, -1)) && current !== "up") {
        player.play("up");
      }
      if (player.direction.eq(k.vec2(0, 1)) && current !== "down") {
        player.play("down");
      }
      if (player.direction.eq(k.vec2(0, 0)) && current && !current.includes("idle")) {
        player.play(`${current}-idle`);
      }
    
      const speed = player.direction.scale(
        player.direction.x && player.direction.y
          ? DIAGONAL_FACTOR * player.speed
          : player.speed
      );
    
      player.move(speed);
    });
    
  
    return player;
  }
  