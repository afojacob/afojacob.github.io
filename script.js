/*==================================================
JACOB AFO PORTFOLIO
==================================================*/


/*---------------------------------------
Smooth Fade-In Animation
---------------------------------------*/

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});


/*---------------------------------------
Active Navigation
---------------------------------------*/

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;
const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});


/*---------------------------------------
Navbar Shadow
---------------------------------------*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

});


/*---------------------------------------
Metric Counter
---------------------------------------*/

const counters=document.querySelectorAll(".metric-number");

const counterObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=counter.dataset.target;

animateCounter(counter,target);

counterObserver.unobserve(counter);

}

});

},

{
threshold:0.6
}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});


function animateCounter(element,target){

let numeric=parseFloat(target.replace(/[^\d.]/g,""));

let current=0;

const increment=numeric/70;

const prefix=target.match(/^[^\d]+/)?.[0]||"";
const suffix=target.match(/[^\d.]+$/)?.[0]||"";

function update(){

current+=increment;

if(current<numeric){

element.textContent=
prefix+
Math.floor(current).toLocaleString()+
suffix;

requestAnimationFrame(update);

}else{

element.textContent=target;

}

}

update();

}


/*---------------------------------------
Scroll Progress Bar
---------------------------------------*/

const progress=document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight=document.body.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});


/*---------------------------------------
Hero Image Float
---------------------------------------*/

const heroImage=document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/90;
const y=(window.innerHeight/2-e.pageY)/90;

heroImage.style.transform=

`translate(${x}px,${y}px)`;

});


/*---------------------------------------
Button Ripple
---------------------------------------*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

const ripple=this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});
