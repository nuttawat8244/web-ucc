document.addEventListener("DOMContentLoaded", function () {
  // Auto Slide Show
  let currentSlide = 0;
  const slides = document.querySelectorAll(".masthead");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide) => {
      // slide.classList.remove('active');
      slide.style.display = "none";
    });

    slides[index].style.display = "block";
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    // console.log(currentSlide);
    showSlide(currentSlide);
  }

  function startSlideShow() {
    setInterval(nextSlide, 10000);
  }

  // startSlideShow();
});

function updateProgressBar() {
  const { scrollTop, scrollHeight } = document.documentElement;
  // console.log(window.innerHeight);
  // console.log(scrollHeight);
  // console.log(scrollTop);
  const scrollPercent =
    (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
  const scrollPercents =(scrollTop / (scrollHeight - window.innerHeight)) * 600 + "%";
  const percent = (scrollTop / (scrollHeight - window.innerHeight)) * 600;
  let percents = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
  console.log(scrollPercent);

  document.querySelector("#progress-bar").style.setProperty("--progress", scrollPercent);
  document.querySelector("#yes-we").style.setProperty("--progress", scrollPercents);

  if (percent > 585) {
    document.querySelector("#yes-we").style.display = "none";
  } else {
    document.querySelector("#yes-we").style.display = "block";
  }

  let navprod = document.body.querySelector('#nav-prod');
  if ((percents >= 9 ) && (percents < 13)) {
    console.log("rgdrg");
    navprod.classList.add("navprod");
  }
  else{
    navprod.classList.remove("navprod");
    console.log("rgdrg");
  }

  let animate = document.querySelector(".blurs");
  if ((percents > 90) && (percents < 97)) {
    animate.classList.add("slide-contact");
  }

  let con_vision = document.querySelector(".con-vision");
  if ((percents > 50) && (percents < 70)) {
    con_vision.classList.add("slide-contact");
  } else {
    con_vision.classList.remove("slide-contact");
  }

  // let bg_scroll = document.querySelector("#bg-scroll");
  // if ((percents >= 0) & (percents <= 5)) {
  //   bg_scroll.style.opacity = "0";
  // } else {
  //   bg_scroll.style.opacity = "1";
  // }

  let iso_container = document.querySelector("#iso-container");
  if ((percents > 38) && (percents < 52)) {
    iso_container.classList.add("slide-contact");
  } else {
    iso_container.classList.remove("slide-contact");
  }

  let award = document.querySelector(".award-info");
  if ((percents > 70) && (percents < 80)) {
    award.classList.add("slide-contact");
  } else {
    award.classList.remove("slide-contact");
  }

}

document.addEventListener("scroll", updateProgressBar);

setTimeout(() => {
  let preload = document.querySelector(".preloader");
  preload.classList.remove(".preloader");
  preload.style.zIndex = "-5555";
  preload.style.opacity = "0";
}, "2000");

// let navbar = document.body.querySelector('#mainNav');

// Store the previous scroll position
let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

// Function to handle scroll events
function handleScroll() {
  let navbar = document.body.querySelector("#mainNav");
  // Get the current scroll position
  let currentScrollPos =
    window.pageYOffset || document.documentElement.scrollTop;

  // Check if scrolling down
  // if (prevScrollPos < currentScrollPos) {
  //   // Your logic for scrolling down goes here
  //   navbar.classList.remove("navbar-shrink");
  //   navbar.style.zIndex = "-77777";
  //   console.log("Scrolling down!");
  // }

  // Check if scrolling up
  // else if (prevScrollPos > currentScrollPos) {
  //   // Your logic for scrolling up goes here
  //   navbar.style.zIndex = "77777";
  //   console.log("Scrolling up!");
  // }

  // Update the previous scroll position
  prevScrollPos = currentScrollPos;
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// setTimeout(() => {addEventListener('click', clicknav);}, "1000");

function clicknav() {
  let navbar = document.body.querySelector("#mainNav");
  navbar.classList.add("navbar-shrink");
  navbar.style.zIndex = "77777";
  console.log("test");
}
function delayedClickNav() {
  setTimeout(clicknav, 1000); // 1000 milliseconds = 1 second
}

// document.addEventListener("DOMContentLoaded", function() {

//   document.getElementById("nav-prod").onclick = function () {
//     setTimeout(clicknav, 1000);
//   };

// });

// document.addEventListener("DOMContentLoaded", function() {
//   // Define the clicknav function
//   function clickbtn() {
//     let navbar = document.body.querySelector('#mainNav');
//     navbar.classList.add('navbar-shrink');
//     navbar.style.zIndex = "88888";
//     console.log("testss");
//   }

// });



let speed = 100;
let i = 0;
let currentTextIndex = 0;
let texts = [
  'United Coil Center Limited.',
  'To Be World Class Steel Service Center',
  'Yes we United'
];

function typeWriter() {
  let currentText = texts[currentTextIndex];
  let typingNewsElement = document.getElementById("typing-news");

  if (i < currentText.length) {
    if (currentTextIndex === 2 && i <= 6) {
      // Apply red color to "Yes"
      typingNewsElement.innerHTML += `<span style="color: rgb(0, 151, 252)">${currentText.charAt(i)}</span>`;
    } else if (currentTextIndex === 2 && i > 6) {
      // Apply blue color to "United"
      typingNewsElement.innerHTML += `<span style="color: rgb(219, 4, 4)">${currentText.charAt(i)}</span>`;
    } else {
      // For other texts, no special styling
      typingNewsElement.innerHTML += currentText.charAt(i);
    }

    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Reset i to 0 and clear the content to restart the animation
    setTimeout(function () {
      typingNewsElement.innerHTML = '';
      let line_news = document.getElementById("line-news");
      i = 0;

      // Move to the next text or restart from the beginning
      currentTextIndex = (currentTextIndex + 1) % texts.length;

      if (currentTextIndex === 2) {
        typingNewsElement.style.fontFamily = "Dancing Script";
        typingNewsElement.style.fontSize = "35px";
        typingNewsElement.style.fontWeight = "900";
        typingNewsElement.style.fontStyle = "Italic";
        line_news.style.width = "280px";
        typingNewsElement.style.textShadow = "0 0 0.8px white";
        line_news.style.transition = "1s ease-in-out";
        // typingNewsElement.style.textShadow = "2px 2px 2px white";
      }
      else if(currentTextIndex === 1){
        line_news.style.width = "520px";
        line_news.style.transition = "4.5s ease-in-out";
      }
      
      else {
        line_news.style.transition = "0.3s ease-in-out";
        line_news.style.width = "370px";
        typingNewsElement.style.fontFamily = "";
        typingNewsElement.style.fontSize = "";
        typingNewsElement.style.fontWeight = "";
        typingNewsElement.style.fontStyle = "";

      }

      console.log(currentTextIndex);
      typeWriter(); // Restart the typewriter animation with the next text
    }, 10000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  typeWriter();
});

