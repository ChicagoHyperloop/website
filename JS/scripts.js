console.log("scripts.js loaded");

/* 
     warning!! - you are about to use javascript, you may throw your computer out the window
     JS for scripts common to all pages

     TODO:
          - stop pirating software

*/
export function loadExternalHTML() {
     
     console.log("loadExternalHTML()");

     $(document).ready(function () {
          $("div[data-includeHTML]").each(function () {
               $(this).load($(this).attr("data-includeHTML"));
          });
     });
}
