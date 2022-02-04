import { loadExternalHTML } from "./scripts.js";

/*
     !!warning!! - you are about to use javascript, you may throw your computer out the window
     JS for index.html
     
     TODO:
          - loading external html
          - implement skrollr for parallax

*/

const fullpageEl = $("#fullpage");
const menuBtn = $(".menu__btn");
const navigation = $(".navigation");
const navCloseBtn = $(".navigation__close__btn");
const blurOverlay = $(".blur-overlay");

const IS_ACTIVE = "is--active";

const toggleNavigation = () => {
     navigation.toggleClass(IS_ACTIVE);
     blurOverlay.toggleClass(IS_ACTIVE);
     fullpageEl.toggleClass("no-scroll");
};

function init() {
     console.log("index.js loaded");
     loadExternalHTML();
};

init();

$(document).ready(function () {
     new fullpage("#fullpage", {
          autoScrolling: true,
          scrollBar: true,
     });

     menuBtn.click(toggleNavigation);
     navCloseBtn.click(toggleNavigation);
     blurOverlay.click(toggleNavigation);
});
