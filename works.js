function moverhtml(){
    document.getElementById("html").style.display= "inline-block" ;
}
function mouthtml(){
    document.getElementById("html").style.display= "none";
}
function movercss(){
    document.getElementById("css").style.display= "inline-block";
}
function moutcss(){
    document.getElementById("css").style.display= "none";
}
function moverjs(){
    document.getElementById("js").style.display= "inline-block";
}
function moutjs(){
    document.getElementById("js").style.display= "none";
}
function moverfigma(){
    document.getElementById("figma").style.display= "inline-block";
}
function moutfigma(){
    document.getElementById("figma").style.display= "none"
}
function moverda(){
    document.getElementById("davinci").style.display= "inline-block";
}
function moutda(){
    document.getElementById("davinci").style.display="none";
}
function moverink(){
    document.getElementById("ink").style.display= "inline-block";
}
function moutink(){
    document.getElementById("ink").style.display= "none";
}
function moverwire(){
    document.getElementById("wire").style.display="inline-block";
}
function moutwire(){
    document.getElementById("wire").style.display= "none";
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
