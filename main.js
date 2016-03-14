console.log("linked");

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

$(document).ready(function(){
  image = document.getElementById("myimage").getBoundingClientRect()
  checkImage = function(){
    if($(window).scrollTop()+window.innerHeight >= image.top){
      console.log("visible")
    }
  }
  window.setInterval(checkImage, 2000)
})