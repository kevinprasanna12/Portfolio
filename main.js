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

//-------------------------------------------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)


    gsap.to('.mainbox',{
        scrollTrigger: {
            trigger: '.majorbody',
        },

        y:0,
        delay:.2,
        duration:1,   
        
    });
    gsap.to('.interestbox',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        x:0,
        delay:.2,
        duration:1,
    });
    gsap.to('.achievements',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        y:0,
        duration:1,
        delay:.5,
    });
    gsap.to('.education',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        y:0,
        duration:1,
        delay:.8,

    });
    gsap.to('.project',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        opacity:1,
        scale:1,
        duration:1,
        delay:.8,

    });
    gsap.to('.skillbox',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        x:0,
        duration:1.5,
        delay:1

    });
    gsap.to('.mybox',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        y:0,
        duration:1.5,
        delay:1

    });
    gsap.to('.social',{
        scrollTrigger: {
            trigger: '.majorbody',
        },
        x:0,
        duration:1.5,
        delay:.9

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
            borderWidth: '2px',
            borderStyle: 'solid',
            scale:4
        });
    });
    name[i].addEventListener("mouseleave", function(dets) {
        gsap.to('.cursor', {
            backgroundColor: '#a290fc',
            scale:1
             
        });
    });
}



var project = document.getElementsByClassName("project");

for (var i = 0; i < project.length; i++) {
    project[i].addEventListener("mouseenter", function(dets) {
        gsap.to('.cursor', {
            backgroundColor: 'transparent',
            scale:1.5,
            borderColor:'ivory',
            borderWidth: '1px',
            borderStyle: 'solid',
            scale:3
        });
    });
    project[i].addEventListener("mouseleave", function(dets) {
        gsap.to('.cursor', {
            backgroundColor: '#a290fc',
            scale:1,
            borderColor:'#a290fc'
             
             
        });
    });

}



});