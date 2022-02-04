import { loadExternalHTML } from "./scripts.js";

/*
     !!warning!! - you are about to use javascript, you may throw your computer out the window
     JS for index.html
     
     TODO:
          - loading external html
          - implement skrollr for parallax

*/

function init() {
     console.log("index.js loaded");
}

init();

$(document).ready(function () {
     loadExternalHTML();
     new fullpage("#fullpage", {
          autoScrolling: true,
          scrollBar: true,
     });

     console.log("document ready");

     console.log("document ready");
});
