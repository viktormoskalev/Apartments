let navbarfunc=()=>{const e=document.querySelector(".navbar-toggle"),t=document.querySelector(".header");e.addEventListener("click",(function(){-1!==t.classList.value.indexOf("nav-open")?t.classList="header nav-close":t.classList="header nav-open"}))};navbarfunc();let counterfunc=()=>{let e=[];const t=document.querySelectorAll(".count-number");for(i=0;i<t.length;i++)e[i]=t[i].innerHTML,t[i].innerHTML=0;function n(n){let o=0,c=setInterval((function(){o==e[n]?clearInterval(c):(o++,e[n]>o+100&&(o+=3),e[n]>o+1e3&&(o+=10),t[n].innerHTML=o)}),1500/e[n])}let o=1;if(1==o){if(document.documentElement.clientHeight-t[3].getBoundingClientRect().top>40)for(o=0,i=0;i<t.length;i++)n(i),t[i].style.opacity="1"}window.addEventListener("scroll",(function(){if(1==o){if(document.documentElement.clientHeight-t[0].getBoundingClientRect().top>40)for(o=0,i=0;i<t.length;i++)n(i),t[i].style.opacity="1"}}))};counterfunc();const scrolltolinck=()=>{const e=document.querySelectorAll('a[href*="#"]'),t=document.querySelector(".header");for(i=0;i<e.length;i++)anchor=e[i],anchor.addEventListener("click",(function(e){e.preventDefault(),t.classList="header nav-close";const n=this.getAttribute("href").substr(1);try{document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}catch(e){console.log(e),console.log("wrong href")}}))};scrolltolinck();