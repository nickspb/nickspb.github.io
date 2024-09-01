"use strict";
let title = document.getElementsByTagName("h1")[0];
let frameIndex = 0;

const animationFrames = [
  "/nickspb_",
  "/nickspb",
  "/nickspb_",
  "/nickspb _",
  "/nickspb U_",
  "/nickspb Uw_",
  "/nickspb UwU_",
  "/nickspb UwU",
  "/nickspb UwU_",
  "/nickspb Uw_",
  "/nickspb U_",
  "/nickspb _",
  "/nickspb_",
  "/nickspb",
];

const setAnimation = () => {
  setTimeout(() => {
    title.innerHTML = animationFrames[frameIndex];
    frameIndex = (frameIndex + 1) % animationFrames.length;
    setAnimation();
  }, 500);
};

setAnimation();
