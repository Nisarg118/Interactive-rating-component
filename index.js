const container=document.querySelector(".container");
const thankYou=document.querySelector(".thank-you");


const submit=document.querySelector("#submit");
const rateAgain=document.querySelector("#rate-again");

const rating=document.querySelector("#rating");

const btn=document.querySelectorAll(".btn");

submit.addEventListener("click",()=>{
    thankYou.classList.remove("hidden");
    container.classList.add("hidden");
})

rateAgain.addEventListener("click",()=>{
    thankYou.classList.add("hidden");
    container.classList.remove("hidden");
})

btn.forEach(item =>{
    item.addEventListener("click",()=>{
        rating.innerHTML=item.innerHTML;
    })
})