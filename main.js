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

//-------------------------------------------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)


    




    gsap.to('#major-contents',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        opacity: 1,
        stagger:0.1
    });
    

window.addEventListener("mousemove", function(dets){
        gsap.to(".cursor", {
            x: dets.x,
            y: dets.y,
            delay:0,
            duration:0.2         
    });

});
   
    var probtn = document.getElementsByClassName("pro-btn");

for (var i = 0; i < probtn.length; i++) {
    probtn[i].addEventListener("mouseenter", function(dets) {
        gsap.to('.cursor', {
            backgroundColor: '#fff',
            scale:1.5
        });
    });
    
    probtn[i].addEventListener("mouseleave", function(dets) {
        gsap.to('.cursor', {
            backgroundColor: '#a290fc',
            scale:1
             // or whatever the original color is
        });
    });
}
 
var name = document.getElementsByClassName("name");

for (var i = 0; i < probtn.length; i++) {
    name[i].addEventListener("mouseenter", function(dets) {
        gsap.to('.cursor', {
            backgroundColor: 'transparent',
            scale:1.5,
            borderColor:'#a290fc',
            borderWidth: '1px',
            borderStyle: 'solid',
            scale:3
        });
    });
    name[i].addEventListener("mouseleave", function(dets) {
        gsap.to('.cursor', {
            backgroundColor: '#a290fc',
            scale:1
             // or whatever the original color is
        });
    });
}



var name = document.getElementsByClassName("name");

for (var i = 0; i < probtn.length; i++) {
    name[i].addEventListener("mouseenter", function(dets) {
        gsap.to('.name', {
            color: '#a290fc',
            delay:0,
            duration:0.1,
        });
    });
    name[i].addEventListener("mouseleave", function(dets) {
        gsap.to('.name', {
            color: 'ivory',
            delay:0,
            duration:0,
            scale:1
             // or whatever the original color is
        });
    });

}





});