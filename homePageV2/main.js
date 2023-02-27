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

    const navBar = document.getElementsByClassName("nav-bar")
    setTimeout(() => {
        let opacity = 0;
        const interval = setInterval(() => {
        opacity += 0.05;
        navBar.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(interval);
        }
        }, 50);
      }, 50);

});