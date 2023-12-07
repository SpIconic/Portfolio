

const controlButtons = document.querySelectorAll(".control");
const sectionIds = ["home1", "about1", "skills", "projects", "contacts"];

controlButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const section = document.getElementById(sectionIds[index]);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelector("#aboutbtn").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default behavior of anchor tag
  const aboutSection = document.getElementById("about1");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector("#contactbtn").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default behavior of anchor tag
  const contactSection = document.getElementById("contacts");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector(".controls .control[data-id='home']").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


let words = document.querySelectorAll(".word");
words.forEach((word) =>{
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    })
})

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Reset skill bar animations
        const skillBars = entry.target.querySelectorAll(".skill-bar .bar span");
        skillBars.forEach((bar) => {
          bar.style.animation = "none";
          void bar.offsetWidth; // Trigger reflow
          bar.style.animation = null;
        });
  
        // Reset skill circle animations
        const circles = entry.target.querySelectorAll(".circle");
        circles.forEach((elem) => {
          let dots = elem.getAttribute("data-dots");
          let marked = elem.getAttribute("data-percent");
          let percent = Math.floor((dots * marked) / 100);
          let points = "";
          let rotate = 360 / dots;
  
          for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
          }
          elem.innerHTML = points;
  
          const pointsMarked = elem.querySelectorAll(".points");
          for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add("marked");
          }
        });
      }
    });
  });
  
  const skillsSection = document.querySelector("#skills");
  observers.observe(skillsSection);

var mixer = mixitup('.portfolio-gallery');


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items")
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with the class 'port-box'
  var portBoxes = document.querySelectorAll('.port-box');

  // Add a click event listener to each 'port-box'
  portBoxes.forEach(function(portBox) {
      portBox.addEventListener('click', function() {
          // Toggle the 'mobile-hover' class on the clicked 'port-box'
          this.classList.toggle('mobile-hover');
      });
  });
});




(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();







