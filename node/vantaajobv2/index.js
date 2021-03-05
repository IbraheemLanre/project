"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("http://gis.vantaa.fi/rest/tyopaikat/v1")
    .then((result) => result.json())
    .then((data) => drawAllBar(data))
    .catch((err) => console.log(err));
}

function drawAllBar(data) {
  let drawingCanvas = document.querySelector("#drawingcanvas");
  let ctx = drawingCanvas.getContext("2d");
  ctx.translate(10, 150);
  ctx.fillStyle = "blue";
  ctx.scale(1.2, 1.2);
  for (let i = 1, x = 10; i < data.length; i++, x += 30) {
    drawBar(ctx, x, data[i]); 
  }
}

function drawBar(ctx, x, data) {
  ctx.fillRect(x, -data.lukumäärä, 20, data.lukumäärä);
  ctx.save();
  ctx.fillStyle = "black";
  ctx.fillText(data.lukumäärä, x + 5, -data.lukumäärä - 10);
  ctx.rotate(Math.PI / 2);
  ctx.fillText(data.ammattiala, 0, -x - 5);
  ctx.restore();
}
