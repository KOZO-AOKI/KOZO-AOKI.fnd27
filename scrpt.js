'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// let slideIndex = 0;

// function showSlides() {
//     const slides = document.querySelectorAll('.slide');
    
//     // 全てのスライドを非表示にする
//     slides.forEach(slide => {
//         slide.classList.remove('active');
//     });

//     // 次のスライドを表示
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         // slideIndex = 1;
//     return;
//       }


//     slides[slideIndex - 1].classList.add('active');

//     // 2秒ごとにスライドを切り替える
//     setTimeout(showSlides, 3000);
// }

// // スライドショーを開始
// showSlides();

// function createGator(event) {
//     console.log(1);
//     let cnt = document.getElementById("num").value;
//     console.log(cnt);
//     let resultString = "";
//     for (let i = 0; i < cnt; i++){
//         resultString += "○";
//     }
//     console.log(resultString);
//     document.getElementById("container2").innerText = resultString;
// }

// const heading = document.querySelector("#heading");

// const Keyframes = {
//     opacity: [0, 1],
//     translate: ["0 50px",0],
// };
// const options = {
//     duration: 2000,
//     easing: "ease",
// };

// heading.animate(Keyframes, options);
