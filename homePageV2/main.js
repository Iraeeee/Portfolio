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

// Ajouter un écouteur d'événements pour l'événement "animationiteration"
fishALeft.addEventListener("animationiteration", maFonction);

// Définir la fonction à exécuter à chaque boucle d'animation
function maFonction() {
  // Vérifier si l'animation en cours est celle que nous surveillons
  if (fishALeft.style.animationName === "nager") {
    // Récupérer la durée de l'animation
    var animationDuration = parseFloat(getComputedStyle(fishALeft).animationDuration);
    console.log(animationDuration)
    // Mettre l'animation en pause
    fishALeft.style.animationPlayState = "paused";
    
    // Appeler la fonction JavaScript après la durée de l'animation
    setTimeout(function() {
      // Réinitialiser la propriété "animation-play-state" pour permettre à l'animation de continuer
      fishALeft.style.animationPlayState = "running";
      
      // Appeler la fonction JavaScript
      setMarginTopTo(fishARight, minMarginTopFishALeft, maxMarginTopFishALeft);
    }, animationDuration * 1000);
  }
}






var fishARight = document.getElementById("fishARight");
var minMarginTopFishARight = 80;
var maxMarginTopFishARight = 160;
fishARight.addEventListener("animationiteration", setMarginTopTo(fishARight, minMarginTopFishARight, maxMarginTopFishARight));

function setMarginTopTo(element, minMarginTop, maxMarginTop){

    console.log("test");
    var randomMarginTop = Math.floor(Math.random() * (maxMarginTop - minMarginTop + 1));
    element.style.marginTop = randomMarginTop + "%";

}