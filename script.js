var item_projetos = document.getElementsByClassName("portfolio-details");
var num = 0;

window.onload = function(){
  var icon = document.getElementById("menu");
  var nav = document.getElementById("navbar");
  var links = document.getElementsByClassName("nav-link");
  
  icon.addEventListener("click",function(){
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
     nav.classList.add("nav-itens-mobile");
     icon.classList.add("fa-times")
   }else{
     icon.classList.remove("fa-times")
     nav.classList.remove("nav-itens-mobile");
     icon.classList.add("fa-bars");
   }
 });
 
 Array.from(links).forEach(function(element) {
  element.addEventListener('click', function(){
    icon.classList.remove("fa-times")
     nav.classList.remove("nav-itens-mobile");
     icon.classList.add("fa-bars");
  });
});
var close = document.getElementById("close_box");

  close.addEventListener("click", function(){
    item_projetos[parseInt(num)].style.display = "none";
    close.style.display = "none";
    document.getElementById("header").style.display = "flex";
    document.getElementsByTagName("main")[0].style.display = "block";
  })
}

var slideIndex = 0;
var slides,dots;

function openBox(item,slide,point){
  var close = document.getElementById("close_box");
  num = item;
  item_projetos[parseInt(item)].style.display = "block";
  close.style.display = "block";
  document.getElementById("header").style.display = "none";
  document.getElementsByTagName("main")[0].style.display = "none";
  slides = document.getElementsByClassName(slide);
  dots = document.getElementsByClassName(point);
  slideIndex = 0;
  showSlides();
}


function currentDiv(n) {
  dotDivs(slideIndex = n);
}

function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" points-white", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " points-white";
    setTimeout(showSlides, 8000);
}

function dotDivs(n) {
  var i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" points-white", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " points-white";
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" points-white", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " points-white";
}