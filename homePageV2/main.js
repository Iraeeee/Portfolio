window.addEventListener('load', function() {

    var i = 0;
    var txt = "Hi! I'm Antoine Lutfalla. Welcome to my Portfolio ! Enjoy your stay.";
    var speed = 60;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("welcome-text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();

});

document.getElementById('scroll-down-btn').addEventListener('click', function() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });

var fishALeft = document.getElementById("fishALeft");
var minMarginTopFishALeft = 10;
var maxMarginTopFishALeft = 30;

var fishARight = document.getElementById("fishARight");
var minMarginTopFishARight = 80;
var maxMarginTopFishARight = 160;
//fishARight.addEventListener("animationiteration", setMarginTopTo(fishARight, minMarginTopFishARight, maxMarginTopFishARight));

function setMarginTopTo(element, minMarginTop, maxMarginTop){

    var randomMarginTop = Math.floor(Math.random() * (maxMarginTop - minMarginTop + 1));
    element.style.marginTop = randomMarginTop + "%";

}