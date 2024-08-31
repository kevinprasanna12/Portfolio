

function movers1(){
    document.getElementById("s1").style.display= "inline-block" ;
}
function mouts1(){
    document.getElementById("s1").style.display= "none";
}
function movers2(){
    document.getElementById("s2").style.display= "inline-block";
}
function mouts2(){
    document.getElementById("s2").style.display= "none";
}
function movers3(){
    document.getElementById("s3").style.display= "inline-block";
}
function mouts3(){
    document.getElementById("s3").style.display= "none";
}
function movers4(){
    document.getElementById("s4").style.display= "inline-block";
}
function mouts4(){
    document.getElementById("s4").style.display= "none"
}
function movers5(){
    document.getElementById("s5").style.display= "inline-block";
}
function mouts5(){
    document.getElementById("s5").style.display="none";
}
function movers6(){
    document.getElementById("s6").style.display= "inline-block";
}
function mouts6(){
    document.getElementById("s6").style.display= "none";
}
function movers7(){
    document.getElementById("s7").style.display="inline-block";
}
function mouts7(){
    document.getElementById("s7").style.display= "none";
}

// ----------------------------------------------------------------------------------



window.addEventListener("mousemove", function(dets){
    gsap.to(".cursor", {
        x: dets.x,
        y: dets.y,
        delay:0,
        duration:0.2         
});

});

gsap.to('#major-contents',{
    scrollTrigger: {
        trigger: '.majorbody',
    },
    opacity: 1,
    stagger:0.1
});
