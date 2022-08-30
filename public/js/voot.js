const play=document.querySelector(".play");
const watch=document.querySelector(".watch");
const navbar=document.querySelector("#vootnavbar");
const body=document.querySelector("#getSingleMovie");
const oldvideo=document.querySelector(".handleback")
watch.addEventListener("click", e=>{
    play.classList.remove("class", "play");
    navbar.style.display="none";
    body.style.display="none";
    play.style.width="100vw"
    play.style.height="100vh";
    oldvideo.style.display="none";
    play.play();
})

let alert=document.querySelector(".alert");
setTimeout(()=>{
    alert.style.transform="translateX(550px)";
    alert.style.transition="ease all 0.5s";
    alert.style.position="fixed";
}, 2000)
{  
    alert.style.transform="translateX(0px)";
    alert.style.transition="ease all 0.7s";

}
