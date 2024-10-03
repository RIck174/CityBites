const mobile=document.querySelector(".menu");
const mobilelink=document.querySelector(".sidebar");


mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active")
})


mobilelink.addEventListener("click",function(){
    const menubar=document.querySelector(".is-active");
    if(window.innerWidth<=768 && menubar){
        mobile.classList.toggle("is-active");
        mobilelink.classList.toggle("active");
    }
})

var step=100;
var stepFilter=60;
var scrolling=true;

document.querySelector(".back").addEventListener("click",function(e){
    e.preventDefault();
    let highlightWrapper=document.querySelector(".highlight-wrapper");
    highlightWrapper.scrollLeft-=step;
    });

document.querySelector(".next").addEventListener("click",function(e){
        e.preventDefault();
        let highlightWrapper=document.querySelector(".highlight-wrapper");
        highlightWrapper.scrollLeft+=step;
        });

document.querySelector(".back-M").addEventListener("click",function(e){
            e.preventDefault();
            let highlightWrapper=document.querySelector(".filter-W");
            highlightWrapper.scrollLeft-=step;
            });

document.querySelector(".next-M").addEventListener("click",function(e){
                e.preventDefault();
                let highlightWrapper=document.querySelector(".filter-W");
                highlightWrapper.scrollLeft+=step;
                });


