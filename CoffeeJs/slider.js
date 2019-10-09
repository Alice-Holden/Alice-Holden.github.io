$(document).ready(function(){

function setWidthPortfolio(){
    $(photoMas).each(function(){ photoMasWidth += $(this).width();});
  document.getElementById('slider_one').style.width=photoMasWidth+'px';
}



document.getElementById('button_slaider_right_top').onclick = sliderLeftBottom;
  
  var left=0;
  var shiftCount = 0;
  var photoMas = document.getElementsByClassName('photo_slaider');
  var photoMasWidth = 0;
  setWidthPortfolio();

function sliderLeftBottom(){
  var sliderOne = document.getElementById('slider_one');
  var width = photoMas[shiftCount].offsetWidth;

  left = left-width;
  sliderOne.style.left = left+'px';
  shiftCount++;
  if(shiftCount==photoMas.length-7){
    left=0;
    shiftCount=0;
  }
}

});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("employee");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

$(document).ready(function(){
  $("#formCallB").submit(function(){
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function(){
      alert("Thank you for the application! We will call you soon.");
    });
    return false;
  });
});







