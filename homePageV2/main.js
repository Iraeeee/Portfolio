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
