let menu=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
});

window.onscroll = () =>{
    navbar.classList.remove("active");
}

const date=document.querySelector("#date");

const time=new Date();
const year=time.getFullYear();

date.innerHTML=year;