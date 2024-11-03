let text=document.querySelector(".text")
let hill1=document.querySelector(".hill1")
let hill2=document.querySelector(".hill2")
let hill3=document.querySelector(".hill3")
let hill4=document.querySelector(".hill4")
let hill5=document.querySelector(".hill5")
let leaf=document.querySelector(".leaf")
let plant=document.querySelector(".plant")
let tree=document.querySelector(".tree")
let footer=document.querySelector(".footer")
console.log(text);
window.addEventListener("scroll", () => {
    let scroll_y = window.scrollY;
    text.style.marginTop = scroll_y * 3.5 + 'px';
    leaf.style.top=scroll_y *-1.5 +'px';
    hill4.style.left=scroll_y *-1.5 +'px';
    hill5.style.right=scroll_y *-1.5 +'px';


    const scrollPosition = window.scrollY;
console.log(scrollPosition);
let letter = document.querySelector(".letter");
const windowHeight = window.innerHeight;
console.log(windowHeight);

letter.style.position = 'relative';

if (scrollPosition > windowHeight) {
    // line.style.top = 10 + 'px';
   
    letter.style.top = 10 + 'px';
} else {
    letter.style.top = "-100vh"; 
}

});
