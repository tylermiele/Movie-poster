/*JavaScript file from Scott McCrindle (thanks again) */


/* Grab the DOM elements to be interacted with */
const pageBg = document.querySelector("html");
const pageBg2 = document.querySelector("section");
const pageBg3 = document.querySelector("#div1");

const hoverElem = document.querySelector("#div1");
const hoverElem2 = document.querySelector("section");

function normal(){
    pageBg.setAttribute("style", "background-image: url(images/movieposterBlurred.jpg)");
    pageBg3.setAttribute("style", "background-image: url(images/movieposterNoText.jpg)");
    pageBg2.setAttribute("style", "background-color: rgba(16,3,23,255)");

    /*this is another way to style muliple components of a single element. Code Snippit: https://stackoverflow.com/questions/3968593/how-can-i-set-multiple-css-styles-in-javascript*/
    document.getElementById("title").style.cssText = "color: rgb(255, 145, 0); text-shadow: 2px 3px 4px red;";
    document.getElementById("title1").style.cssText = "color: rgb(255, 145, 0); text-shadow: 2px 3px 4px red;";
    document.getElementById("title2").style.cssText = "color: rgb(255, 145, 0); text-shadow: 2px 3px 4px red;";
    
}
function alt(){
    pageBg.setAttribute("style", "background-image: url(images/movieposterALTBlurred.jpg)");
    pageBg3.setAttribute("style", "background-image: url(images/movieposterALTNoText.jpg)");
    pageBg2.setAttribute("style", "background-color: rgb(0,0,0");
    document.getElementById("title").style.cssText = "color: rgba(3,255,140,255); text-shadow: 2px 3px 4px rgb(209, 208, 208);";
    document.getElementById("title1").style.cssText = "color: rgba(3,255,140,255); text-shadow: 2px 3px 4px rgb(209, 208, 208);";
    document.getElementById("title2").style.cssText = "color: rgba(3,255,140,255); text-shadow: 2px 3px 4px rgb(209, 208, 208);";
}
function sectionNormal(){
    pageBg.setAttribute("style", "background-image: url(images/movieposterBlurred.jpg)");
    pageBg3.setAttribute("style", "background-image: url(images/movieposterNoText.jpg)")
    pageBg2.setAttribute("style", "background-color: rgba(16,3,23,255)");
    document.getElementById("title").style.cssText = "color: rgb(255, 145, 0); text-shadow: 2px 3px 4px red;";
    document.getElementById("title1").style.cssText = "color: rgb(255, 145, 0); text-shadow: 2px 3px 4px red;";
    document.getElementById("title2").style.cssText = "color: rgb(255, 145, 0); text-shadow: 2px 3px 4px red;";
}
function sectionAlt(){
    pageBg.setAttribute("style", "background-image: url(images/movieposterALTBlurred.jpg)");
    pageBg3.setAttribute("style", "background-image: url(images/movieposterALTNoText.jpg)");
    pageBg2.setAttribute("style", "background-color: rgb(0,0,0");
    document.getElementById("title").style.cssText = "color: rgba(3,255,140,255); text-shadow: 2px 3px 4px rgb(209, 208, 208);";
    document.getElementById("title1").style.cssText = "color: rgba(3,255,140,255); text-shadow: 2px 3px 4px rgb(209, 208, 208);";
    document.getElementById("title2").style.cssText = "color: rgba(3,255,140,255); text-shadow: 2px 3px 4px rgb(209, 208, 208);";

}
/*hover elements that will the css upon mouse hover*/
hoverElem.addEventListener("mouseout", normal);
hoverElem.addEventListener("mouseover", alt);

hoverElem2.addEventListener("mouseout", sectionNormal);
hoverElem2.addEventListener("mouseover", sectionAlt);
