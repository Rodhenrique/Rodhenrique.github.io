"use strict";

window.onload = function () {
  var icon = document.getElementById("menu");
  var nav = document.getElementById("navbar");
  var links = document.getElementsByClassName("nav-link");
  icon.addEventListener("click", function () {
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      nav.classList.add("nav-itens-mobile");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      nav.classList.remove("nav-itens-mobile");
      icon.classList.add("fa-bars");
    }
  });
  Array.from(links).forEach(function (element) {
    element.addEventListener('click', function () {
      icon.classList.remove("fa-times");
      nav.classList.remove("nav-itens-mobile");
      icon.classList.add("fa-bars");
    });
  });
};