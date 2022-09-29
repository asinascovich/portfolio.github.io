gsap.to('.big-circle',{opacity:1,delay:4.5,duration:1.5,x:-50});
gsap.to('.pc-img',{opacity:2,delay:5.5,duration:2.5,x:-190});
gsap.to('.title-1',{opacity:2,delay:3,duration:2,y:-15});
gsap.to('.small-text',{opacity:2,delay:3.4,duration:1,y:-15});
gsap.to('.see-more',{opacity:2,delay:4,duration:1,y:-15});
gsap.to('.c-3',{opacity:2,delay:6.5,duration:1,y:-30});
gsap.to('.c-2',{opacity:1,delay:5,duration:1,y:30,x:30});
gsap.to('.c-4',{opacity:1,delay:6.8,duration:1,x:50});
gsap.to('.navbar',{opacity:1,delay:2.5,duration:1,y:35});


 function mediaQ() {
    if(window.innerWidth <700){
       
        
    }
 }

 mediaQ();





var manImg = document.getElementById('man-1')
function scrollMe(){
   window.onscroll = () =>{
       if (window.scrollY >= 500){
        gsap.to('.man-img',{opacity:1,delay:1,duration:1,y:-33});
       } 

   }
}
scrollMe();

var eye = document.getElementById('eye-1');
var textS = document.getElementById('title-s2');
var social = document.getElementById('social')
var crossImg = document.getElementById("x");
var contectText = document.getElementById("cont-text");

eye.addEventListener("click" , () =>{
    document.getElementById("social").classList.add("ami");
    social.classList.remove("amin");
    eye.style.opacity = 0;
    crossImg.style.display = "block";
    textS.classList.add("title-up");
    textS.classList.remove("title-down");
    gsap.to('.content-s',{opacity:1,delay:0.5,duration:1});
    social.style.zIndex = 15;


})
crossImg.addEventListener("click" , () =>{
    social.classList.remove("ami");
    social.classList.add("amin");
    eye.style.opacity = 1;
    crossImg.style.display = "none";
    textS.classList.remove("title-up");
    textS.classList.add("title-down");
    gsap.to('.content-s',{opacity:0,delay:0.2,duration:0.2});
    social.style.zIndex = 0;
})

var eyeThree = document.getElementById('eye-3');
 var design = document.getElementById("design");
 var crossImgtow = document.getElementById("xx");
 var textD = document.getElementById("title-s3");

eyeThree.addEventListener("click" , () =>{
    document.getElementById("design").classList.add("ami3");
    design.classList.remove("amin3");
    eyeThree.style.opacity = 0;
    crossImgtow.style.display = "block";
    textD.classList.add("title-up3");
    textD.classList.remove("title-down3");
    gsap.to('.content-s3',{opacity:1,delay:0.5,duration:1});
    design.style.zIndex = 15;


})
crossImgtow.addEventListener("click" , () =>{
    design.classList.remove("ami3");
    design.classList.add("amin3");
    eyeThree.style.opacity =1;
    crossImgtow.style.display = "none";
    textD.classList.remove("title-up3");
    textD.classList.add("title-down3");
    gsap.to('.content-s3',{opacity:0,delay:0.2,duration:0.2});
    design.style.zIndex = 0;
})



var eyeFour = document.getElementById('eye-4');
 var tools = document.getElementById("tools");
 var crossImgthree = document.getElementById("x-44");
 var textT = document.getElementById("title-s4");

eyeFour.addEventListener("click" , () =>{
    document.getElementById("tools").classList.add("ami4");
    tools.classList.remove("amin4");
    eyeFour.style.display = "none";
    crossImgthree.style.display = "block";
    textT.classList.add("title-up4");
    textT.classList.remove("title-down4");
    gsap.to('.content-s4',{opacity:2,delay:0.5,duration:1});
    tools.style.zIndex = 15;

   


})
crossImgthree.addEventListener("click" , () =>{
    tools.classList.remove("ami4");
    tools.classList.add("amin4");
    eyeFour.style.display = "block";
    crossImgthree.style.display = "none";
    textT.classList.remove("title-up4");
    textT.classList.add("title-down4");
    gsap.to('.content-s4',{opacity:0,delay:0.2,duration:0.2});
    tools.style.zIndex = 1;
    
})

var myEye = document.getElementById('my-eye');
 var other = document.getElementById("other");
 var crossSign = document.getElementById("x-55");
 var textO = document.getElementById("title-s5");

myEye.addEventListener("click" , () =>{
    document.getElementById("other").classList.add("grow-1");
    other.classList.remove("back-nrml");
    myEye.style.display = "none";
    crossSign.style.display = "block";
    eyeFour.style.opacity = 0;
    textO.classList.add("up-side");
    textO.classList.remove("down-side");
    gsap.to('.other-skills',{opacity:2,delay:0.5,duration:1});
    other.style.zIndex = 15;

   


})
crossSign.addEventListener("click" , () =>{
    other.classList.remove("grow-1");
    other.classList.add("back-nrml");
    myEye.style.display = "block";
    crossSign.style.display = "none";
    textO.classList.remove("up-side");
    eyeFour.style.opacity = 1;
    textO.classList.add("down-side");
    gsap.to('.other-skills',{opacity:0,delay:0.2,duration:0.2});
    other.style.zIndex = 0;
    
})

var emailBtn = document.getElementById("em-btn-1");
var theEmail = document.getElementById("the-em");
var contactForm = document.getElementById("cntc-frm");


emailBtn.addEventListener("click" , () =>{
    contactForm.classList.add("show-email");
    contactForm.classList.remove("show-phone");
    gsap.to('.the-email',{opacity:1,delay:0.2,duration:0.2});
    gsap.to('.the-phone',{opacity:0,delay:0.2,duration:0.2});
    theEmail.style.zIndex = 30;

})


var contactForm = document.getElementById("cntc-frm");
var phoneBtn = document.getElementById("ph-btn-2")
var thePhone = document.getElementById("the-ph");

phoneBtn.addEventListener("click" , () =>{
    contactForm.classList.add("show-email");
    gsap.to('.the-phone',{opacity:1,delay:0.2,duration:0.2});
    gsap.to('.the-email',{opacity:0,delay:0.2,duration:0.2});
    thePhone.style.zIndex = 30;

})


var contactBtn = document.getElementById("ct-btn");

contactBtn.addEventListener("click" , () =>{
   
    gsap.to('.contact-img-1',{opacity:1,delay:0.4,duration:0.4 , x:-18});
    gsap.to('.contact-form',{opacity:1,delay:0.5,duration:1,y:-35});
    
   

})


























