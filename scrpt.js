'use strict'
// 1行目に記載している 'use strict' は削除しないでください
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        // slideIndex = 1;
    return;
      }


    slides[slideIndex - 1].classList.add('active');

     setTimeout(showSlides, 2000);
}

showSlides();

