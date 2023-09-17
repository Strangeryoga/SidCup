
var cr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    cr.style.left = dets.x+"px"
    cr.style.top= dets.y+"px"

    blur.style.left = dets.x-250 +"px"
    blur.style.top = dets.y-250 + "px"
})

var hall=document.querySelectorAll("#nav h4")
hall.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    cr.style.scale=3
    cr.style.border="0.1px solid #fff"
    cr.style.backgroundColor="transparent"
   })

   elem.addEventListener("mouseleave",function(){
    cr.style.scale=1
    cr.style.border="0px solid #d48c21"
    cr.style.backgroundColor="#d48c21"
   })
})




gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})

// document.querySelector("#arrow").addEventListener("click",()=>{
//     window.scrollTo(0,document.body.scrollHeight)
// })



gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    // opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#c1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#c1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#c2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#c1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})



gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:"#page4 h1",
    scroller:"body",
    // markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:4
})