// 欢迎访问动画
let startLi = document.querySelectorAll(".first-screen ul li");
let body = document.querySelector("body");
let firstScreen = document.querySelector(".first-screen");
let next = document.querySelector(".first-screen .next-button");

body.style.overflow = "hidden";
next.addEventListener("click", function(event) {
  console.log("14");

  let position = firstScreen.offsetHeight + 1;
  
  let timer = setInterval(function() {
    // console.log(`position:${position}`);
    let step = document.documentElement.scrollTop;
    step += (position - step ) / 10;
    step = Math.ceil(step);
    if(step < position) {
      document.documentElement.scrollTop = step;
    }else {
      body.style.overflow = "auto";
      // firstScreen.style.display = "none";
      clearInterval(timer);
    }
    console.log(`step:${step}`);
    
  }, 50)
  
})



