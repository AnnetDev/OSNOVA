var c=()=>{document.addEventListener("DOMContentLoaded",()=>{let o=document.querySelector(".header__toggle"),t=document.querySelector(".header__navigation"),n=document.querySelector(".header__toggle-icon"),a=document.querySelectorAll(".header__navigation-link"),d=document.querySelector(".header");o.addEventListener("click",e=>{e.stopPropagation(),t.classList.toggle("header__navigation--opened"),o.classList.toggle("header__toggle--opened"),n.classList.toggle("header__toggle-icon--opened")}),a.forEach(e=>{e.addEventListener("click",()=>{t.classList.remove("header__navigation--opened"),o.classList.remove("header__toggle--opened"),n.classList.remove("header__toggle-icon--opened")})}),document.addEventListener("click",e=>{d.contains(e.target)||(t.classList.remove("header__navigation--opened"),o.classList.remove("header__toggle--opened"),n.classList.remove("header__toggle-icon--opened"))})})};export{c as toggleMenu};
