"use strict";

window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

/* When your mouse cursor enter the background, the fading won't pause and keep playing */
$(".carousel").carousel({
  pause:
    "false" /* Change to true to make it paused when your mouse cursor enter the background */,
});

var headerImg_0 = document.getElementById("header-img_0");

var typewriter = new Typewriter(headerImg_0, {
  loop: true,
});

typewriter
  .typeString("Hey Folks, are you ready?")
  .pauseFor(2000)
  .deleteAll()
  .typeString("Retro in the Park...")
  .pauseFor(2000)
  .deleteAll()
  .typeString("<p><strong>is coming!!!</strong></p>")
  .pauseFor(2500)
  .deleteAll()
  .start();

var headerImg = document.getElementById("header-img");

var typewriter = new Typewriter(headerImg, {
  loop: true,
});

typewriter
  .typeString("Hey Folks, are you ready?")
  .pauseFor(2000)
  .deleteAll()
  .typeString("book your tickets now and...")
  .pauseFor(2000)
  .deleteAll()
  .typeString("<p><strong>see you soon!!!</strong></p>")
  .pauseFor(2500)
  .deleteAll()
  .start();
