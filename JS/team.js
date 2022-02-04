import { loadExternalHTML } from "./scripts.js";

/*
     !!warning!! - you are about to use javascript, you may throw your computer out the window
     JS for team.html
     
     TODO:
          - implement skrollr for parallax

*/

const target = {
     clicked: 0,
     currentFollowers: 90,
     btn: document.querySelector("a.btn"),
     fw: document.querySelector("span.followers"),
};

const follow = () => {
     target.clicked += 1;
     target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';

     if (target.clicked % 2 === 0) {
          target.currentFollowers -= 1;
          target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
     } else {
          target.currentFollowers += 1;
     }

     target.fw.textContent = target.currentFollowers;
     target.btn.classList.toggle("following");
};

function init() {
     console.log("team.js loaded");
     loadExternalHTML();
}

init();


