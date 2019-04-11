 var slide_index = 1;

 displaySlides(slide_index);

 function nextSlide(n) {
     displaySlides(slide_index += n);
 }

 function currentSlide(n) {
     displaySlides(slide_index = n);
 }

 function displaySlides(n) {
     var i;
     var slides = document.getElementsByClassName("slider-slide");
     if (n > slides.length) {
         slide_index = 1
     }
     if (n < 1) {
         slide_index = slides.length
     }
     for (i = 0; i < slides.length; i++) {
         slides[i].classList.remove("slider-slide-active");
     }
     slides[slide_index - 1].classList.add("slider-slide-active");
 }