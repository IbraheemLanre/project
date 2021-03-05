/**
 * Contains logic for frontend data handling
 */

"use strict";

const { response } = require("express");

document.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("http://localhost:8080/json", { mode: "cors" })
    .then((result) => result.json())
    .then((data) => drawAllBars(data))
    .catch((err) => console.log(err));
}

function drawAllBars(data){
    
}
