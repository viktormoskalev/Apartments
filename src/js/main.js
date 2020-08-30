//navbar
let navbarfunc = ()=>{
  const toggle = document.querySelector(".navbar-toggle");
const header = document.querySelector(".header");

toggle.addEventListener("click", navbar);

function navbar() {

  if (header.classList.value.indexOf("nav-open") !== -1) {
    header.classList = "header nav-close";
  } else {
    header.classList = "header nav-open";
  }
};
};
navbarfunc();
//navbar


//counter
let counterfunc =()=>{

let ff = [];
const cardnumber = document.querySelectorAll(".count-number");
for (i = 0; i < cardnumber.length; i++) {
  ff[i] = cardnumber[i].innerHTML;
  cardnumber[i].innerHTML = 0;

}
function counter(n) {
  let i = 0;
  let timer = setInterval(function () {
    if (i == ff[n]) clearInterval(timer);
    else {
      i++;
      if (ff[n] > i + 100) {
        i += 3
      };
      if (ff[n] > i + 1000) {
        i += 10
      };
      cardnumber[n].innerHTML = i;
    }
  }, 1500 / ff[n]);
}

//scroll
let g = 1;
  if (g == 1) {
    let h = document.documentElement.clientHeight;
    let toelem = cardnumber[3].getBoundingClientRect().top;

    if (h - toelem > 40) {
      g = 0;
      for (i = 0; i < cardnumber.length; i++) {
        counter(i);
        cardnumber[i].style.opacity="1";
      }
    }
  }
window.addEventListener('scroll', function () {
  if (g == 1) {
    let h = document.documentElement.clientHeight;
    let toelem = cardnumber[0].getBoundingClientRect().top;

    if (h - toelem > 40) {
      
      g = 0;
      for (i = 0; i < cardnumber.length; i++) {
        counter(i);
        cardnumber[i].style.opacity="1";
      }
    }
  }
});
//scroll
}
counterfunc();
//counter 


//scroll-to linck
const scrolltolinck=()=>{
  const anchors = document.querySelectorAll('a[href*="#"]');
const header = document.querySelector(".header");
for (i=0 ; i < anchors.length; i++){
anchor=anchors[i];

  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    header.classList = "header nav-close";
    const blockID = this.getAttribute('href').substr(1);
    try {
  document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

} catch (err) {
console.log(err);
  console.log("wrong href");
}
  })
}
  
}
scrolltolinck();
//scroll-to linck