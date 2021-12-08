window.onscroll = function() {scrollFunction()};
var navScroll = document.getElementById("navbar");
mybutton = document.getElementById("myBtn");
function scrollFunction() {

if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
  navScroll.style.position = "sticky";
  
  navScroll.style.top = "0px";
} else {
  navScroll.style.top = "-180px";
  
}
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

var latestx = document.getElementById("latest");
var blogx =   document.getElementById("blog");
var pagesx = document.getElementById("pages");
var lin1lx = document.getElementById("lin1l");

function latest(){
    console.log(latestx.style.maxHeight);
    if (latestx.style.maxHeight === "150px") {
        latestx.style.maxHeight = "0px";
      } else {
        latestx.style.maxHeight = "150px";
        pagesx.style.maxHeight = "0px";
        blogx.style.maxHeight = "0px";
      }
}
function blog(){
    if (blogx.style.maxHeight === "150px") {
        blogx.style.maxHeight = "0px";

      } else {
        blogx.style.maxHeight = "150px";
        pagesx.style.maxHeight = "0px";
        latestx.style.maxHeight = "0px";
      }
}
function pages(){
    if (pagesx.style.maxHeight === "250px") {
        pagesx.style.maxHeight = "0px";
      } else {
        pagesx.style.maxHeight = "250px";
        latestx.style.maxHeight = "0px";
        blogx.style.maxHeight = "0px";
      }
}
function lin1l(){
    if (lin1lx.style.maxHeight === "550px") {
        lin1lx.style.maxHeight = "0px";
      } else {
        lin1lx.style.maxHeight = "550px";
      }
}