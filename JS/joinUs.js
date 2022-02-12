import { loadExternalHTML } from "./scripts.js";

/*
     !!warning!! - you are about to use javascript, you may throw your computer out the window
     JS for joinUs.html
     
     TODO:
          - loading external html
          - implement skrollr for parallax

*/

function init() {
     console.log("joinUs.js loaded");
}

init();

$(document).ready(function () {
     loadExternalHTML();
});
